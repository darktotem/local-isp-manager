import './styles/index.css'
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import Button from './components/ui/Button';
import Card from './components/ui/Card.tsx';
import {Input} from './components/ui/Input.tsx';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <h1>Fast & Reliable Internet</h1>
          <p>Connect your home or business with high-speed fiber today.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <Button variant="primary" size="lg">Get Connected</Button>
            <Button variant="outlined" size="lg">View Packages</Button>
          </div>
        </section>

        {/* 1. Using your Card Component */}
        <section style={{ marginTop: '3rem' }}>
          <h2>Available Fiber Packages</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <Card padding="lg" hoverable>
              <h3>Home Lite</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>KSh 2,999 / mo</p>
              <p>15 Mbps unlimited high-speed browsing.</p>
              <Button variant="primary" fullWidth style={{ marginTop: '1rem' }}>Select Plan</Button>
            </Card>

            <Card padding="lg" hoverable>
              <h3>Home Plus</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>KSh 4,499 / mo</p>
              <p>40 Mbps smooth HD streaming & gaming.</p>
              <Button variant="primary" fullWidth style={{ marginTop: '1rem' }}>Select Plan</Button>
            </Card>
          </div>
        </section>

        {/* 2. Using your Input Component */}
        <section style={{ marginTop: '3rem', maxWidth: '500px' }}>
          <h2>Check Availability in Your Area</h2>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Input 
              label="Phone Number" 
              placeholder="e.g. 0712345678" 
              hint="We'll send connection details via SMS."
            />
            <Input 
              label="Physical Address / Location" 
              placeholder="e.g. Estate, House No." 
            />
            <Button variant="primary">Check Coverage</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default App
