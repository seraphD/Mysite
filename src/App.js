import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import Summary from './components/Summary';
import Projects from './components/Propjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Summary />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
