import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Navbar } from './Pages/Navbar';
import { About } from './Pages/About';
import { Team } from './Pages/Team';
import { GalleryPage } from './Pages/GalleryPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Add the ScrollToTop component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}

export default App;
