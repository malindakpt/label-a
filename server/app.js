import express from 'express';
import fs from 'fs';
import path from 'path';

import react from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();
const port = 3500;

app.use('^/$', (req, res, next) => {
     fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
         if(err){
             console.log('Err:', err);
             return res.status(500).send('Error occured');
         }
         res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App></App>)}</div>`));
     })
});

app.use(express.static(path.resolve('__dirname', '..', 'build')));

app.listen(port, () => {
    console.log('App started');
});