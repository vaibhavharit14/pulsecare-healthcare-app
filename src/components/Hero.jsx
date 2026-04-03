import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Users, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="bg-decorator bg-circle-1" />
      <div className="bg-decorator bg-circle-2" />

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'var(--gray-100)', color: 'var(--primary)', borderRadius: '2rem', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            Transforming Community Health
          </div>
          <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem', color: 'var(--dark)' }}>
            Empowering <span style={{ color: 'var(--primary)' }}>Healthcare</span> <br/> For Everyone
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--gray-500)', marginBottom: '2.5rem', maxWidth: '90%' }}>
            PulseCare bridges the gap between dedicated medical professionals and communities in need. We provide automated triage support, reliable resources, and immediate connections to accessible healthcare.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#support" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Get Support <ArrowRight size={20} />
            </a>
            <a href="#support" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Become a Volunteer
            </a>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <div className="value">500+</div>
              <div className="label">Active Volunteers</div>
            </div>
            <div className="stat-item">
              <div className="value">12k+</div>
              <div className="label">Patients Assisted</div>
            </div>
            <div className="stat-item">
              <div className="value">24/7</div>
              <div className="label">Smart Triage</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div className="glass-effect" style={{ padding: '2rem', borderRadius: '1.5rem', background: 'white', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ background: 'var(--gray-100)', borderRadius: '1rem', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', width: '100%', zIndex: 2 }}>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} style={{ background: 'var(--primary)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'white', boxShadow: 'var(--shadow)' }}>
                   <Shield size={28} />
                   <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Secure Portal</div>
                </motion.div>
                
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }} style={{ background: 'var(--secondary)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'white', boxShadow: 'var(--shadow)' }}>
                   <Clock size={28} />
                   <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Instant Triage</div>
                </motion.div>
                
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }} style={{ background: 'var(--dark)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'white', gridColumn: '1 / span 2', boxShadow: 'var(--shadow)' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <Users size={28} />
                     <Activity size={24} color="var(--primary)" />
                   </div>
                   <div style={{ fontWeight: 600, marginTop: '0.5rem' }}>Community Network Active</div>
                   <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>Connecting professionals globally</div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', background: 'white', padding: '1.25rem', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', display: 'flex', gap: '1rem', alignItems: 'center' }}
            >
              <div style={{ width: '3rem', height: '3rem', background: 'var(--primary)', color: 'white', border: '3px solid white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow)' }}>
                <Activity size={20} />
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: 'var(--dark)' }}>System Status</div>
                <div style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <span style={{ width: 8, height: 8, background: 'var(--secondary)', borderRadius: '50%', display: 'inline-block' }}></span>
                  Operational
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
