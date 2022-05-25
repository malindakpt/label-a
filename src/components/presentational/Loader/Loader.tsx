import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import classes from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={classes.container}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        <CircularProgress />
      </Box>
    </div>
  );
};
