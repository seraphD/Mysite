import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Projects from './components/Propjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="portfolio" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
