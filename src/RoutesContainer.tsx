import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Artist } from './components/container/Artist/ArtistView';
import { ArtistSearch } from './components/presentational/ArtistSearch/ArtistSearch';

export const RoutesContainer = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="artist/:mbid" element={<Artist />} />
          <Route path="/" element={<ArtistSearch />} />
        </Routes>
      </div>
    </Router>
  );
};
