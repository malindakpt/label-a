import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AlbumDetails from './components/container/AlbumDetails/AlbumDetails';
import ArtistAlbums from './components/container/ArtistAlbums/ArtistAlbums';
import ArtistSearch from './components/container/ArtistSearch/ArtistSearch';

export const RoutesContainer = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="albumInfo/:artist/:album" element={<AlbumDetails />} />
          <Route path="artistAlbums/:mbid" element={<ArtistAlbums />} />
          <Route path="/" element={<ArtistSearch />} />
        </Routes>
      </div>
    </Router>
  );
};
