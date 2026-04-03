import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const INITIAL_MESSAGE = "Hello! I am PulseAI, your virtual triage assistant. How can I assist you with your healthcare needs today?";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: INITIAL_MESSAGE, isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateResponse = useCallback((query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('volunteer') || lowerQuery.includes('join')) {
      return "If you are a medical professional looking to volunteer, please use the Contact Form and select 'Volunteer'. We are actively looking for more medical staff!";
    } 
    if (lowerQuery.includes('fever') || lowerQuery.includes('sick') || lowerQuery.includes('pain')) {
      return "I can help connect you with our available volunteer doctors. Please submit a request via the Contact Form and choose 'Patient' so our triage system can route you as an emergency.";
    } 
    if (lowerQuery.includes('cost') || lowerQuery.includes('price') || lowerQuery.includes('fee')) {
      return "Our healthcare connectivity services are 100% free of charge. PulseCare is a non-profit operated entirely by volunteer medical staff and community members.";
    }
    
    return "Thank you for reaching out. A human coordination team member will review your query shortly. If this is a medical emergency, please contact local emergency services immediately.";
  }, []);

  const handleSend = (e) => {
    e?.preventDefault();
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    const userMessage = { id: Date.now(), text: trimmedInput, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = generateResponse(trimmedInput);
      setMessages(prev => [...prev, { id: Date.now(), text: responseText, isBot: true }]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800); // Natural delay
  };

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div 
        className="chatbot-trigger"
        onClick={handleToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="chat-window"
            style={{ borderRadius: '1rem' }}
          >
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: 'white', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>PulseAI Assistant</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.9)' }}>Automated Triage Active</div>
                </div>
              </div>
              <button onClick={handleToggle} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.25rem' }}>
                <X size={20} />
              </button>
            </div>

            <div className="chat-body">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-msg ${msg.isBot ? 'msg-bot' : 'msg-user'}`} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', flexDirection: msg.isBot ? 'row' : 'row-reverse' }}>
                  {msg.isBot && <Bot size={18} style={{ color: 'var(--gray-500)', flexShrink: 0, marginTop: '0.1rem' }} />}
                  <div style={{ wordBreak: 'break-word', lineHeight: 1.4 }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="chat-msg msg-bot" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', width: 'fit-content' }}>
                  <Bot size={18} style={{ color: 'var(--gray-500)' }} />
                  <div style={{ display: 'flex', gap: '0.3rem', padding: '0.25rem' }}>
                    {[0, 0.2, 0.4].map((delay, index) => (
                      <motion.div 
                        key={index}
                        animate={{ y: [0, -6, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.8, delay, ease: "easeInOut" }} 
                        style={{ width: 6, height: 6, background: 'var(--gray-500)', borderRadius: '50%' }} 
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="chat-input" style={{ borderTop: '1px solid var(--gray-200)' }}>
              <input 
                type="text" 
                placeholder="Type your symptoms or question..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" disabled={!inputValue.trim() || isTyping}>
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
