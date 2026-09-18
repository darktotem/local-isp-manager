import './styles/App.css';
import './styles/index.css';

import {Navbar} from './components/Navbar.tsx';
import {Footer} from './components/Footer.tsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
