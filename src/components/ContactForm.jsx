import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Patient', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    // Network request mock
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState('success');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', role: 'Patient', message: '' });
    setFormState('idle');
  };

  return (
    <section id="support" style={{ padding: '6rem 0', background: 'var(--light)' }}>
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--dark)', marginBottom: '1rem' }}>Connect With PulseCare</h2>
          <p style={{ color: 'var(--gray-500)', fontSize: '1.1rem' }}>
            Whether you are seeking medical assistance or looking to provide your healthcare expertise, our platform connects you seamlessly.
          </p>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="form-card"
            style={{ borderRadius: '1.5rem' }}
          >
            {formState === 'success' ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '3rem 1rem' }}
              >
                <div style={{ display: 'inline-flex', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  <CheckCircle size={56} />
                </div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--dark)' }}>Registration Successful!</h3>
                <p style={{ color: 'var(--gray-500)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. Your profile has been automatically tagged under <strong style={{ color: 'var(--primary)' }}>{formData.role}</strong> using our smart triage system. Our regional coordinator will contact you shortly via email.
                </p>
                <button onClick={resetForm} className="btn btn-outline">Submit Another Registration</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input 
                      type="text" id="name" name="name" required
                      className="form-control" placeholder="John Doe"
                      value={formData.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" id="email" name="email" required
                      className="form-control" placeholder="john@domain.com"
                      value={formData.email} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Registration Type:</label>
                  <div className="role-selector">
                    {['Patient', 'Volunteer', 'Partner NGO'].map(role => (
                      <label key={role} className={`role-option ${formData.role === role ? 'active' : ''}`}>
                        <input 
                          type="radio" name="role" value={role} 
                          checked={formData.role === role} onChange={handleChange}
                        />
                        {role}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">How can we help? (Optional)</label>
                  <textarea 
                    id="message" name="message" rows="4" 
                    className="form-control" placeholder="Please describe your requirements, medical history, or volunteer availability..."
                    value={formData.message} onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? (
                    <>Processing <Loader2 size={20} className="spinner" /></>
                  ) : (
                    <>Submit Details <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
            
            {formState !== 'success' && (
              <div style={{ marginTop: '2.5rem', padding: '1.25rem', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <div style={{ background: 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '0.5rem', marginTop: '0.1rem' }}>
                  <Sparkles size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--dark)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Smart Triage Active</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.5 }}>
                    Your submission is processed through our automated routing system to ensure lightning-fast allocation to appropriate medical personnel based on priority parameters.
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
