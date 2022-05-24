import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtistAlbums from './components/presentational/ArtistAlbums/ArtistAlbums';
import ArtistSearch from './components/presentational/ArtistSearch/ArtistSearch';

export const RoutesContainer = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="artistAlbums/:mbid" element={<ArtistAlbums />} />
          <Route path="/" element={<ArtistSearch />} />
        </Routes>
      </div>
    </Router>
  );
};
