import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import vimage from './assets/vimage.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContactForm />
      <Chatbot />
      
      {/* Simple Footer */}
      <footer style={{ background: 'var(--dark)', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src={vimage} alt="VImage" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.5rem', margin: 0 }}>PulseCare AI</h2>
          </div>
          <p style={{ color: 'var(--gray-500)', maxWidth: '500px', margin: '0 auto 2rem' }}>
            A prototype healthcare support application utilizing modern web technologies and AI automation concepts to bridge volunteers and patients.
          </p>
          <div style={{ color: 'var(--gray-500)', fontSize: '0.875rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            © {new Date().getFullYear()} PulseCare VH NGO Application Concept.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
