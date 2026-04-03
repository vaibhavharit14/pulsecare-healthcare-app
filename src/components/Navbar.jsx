import React from 'react';
import { HeartPulse } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-effect" style={{ 
      position: 'sticky', 
      top: '1rem', 
      zIndex: 100, 
      margin: '1rem 2rem', 
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '0.5rem', display: 'flex' }}>
          <HeartPulse size={24} color="white" />
        </div>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)', fontFamily: 'Outfit' }}>PulseCare</span>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="#support" style={{ color: 'var(--gray-700)', textDecoration: 'none', fontWeight: 500, transition: 'var(--primary) 0.2s' }}>Services</a>
        <a href="#support" style={{ color: 'var(--gray-700)', textDecoration: 'none', fontWeight: 500 }}>Volunteer</a>
        <a href="#support" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Join Portal</a>
      </div>
    </nav>
  );
};

export default Navbar;
