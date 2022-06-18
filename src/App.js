import './App.css';
import LandingPage from './Components/LandingPage';
import Work from './Components/Work';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <LandingPage />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
