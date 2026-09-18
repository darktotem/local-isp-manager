
import './styles/index.css';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';


import {Carousel} from './features/landing/Carousel.tsx';
import {AboutSection} from './features/landing/AboutSection.tsx';
import {Packages} from './features/landing/Packages.tsx';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Carousel/>
        <AboutSection/>
        <Packages/>
      </main>

      <Footer />
    </div>
  );
}
export default App
