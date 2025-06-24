import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/MainHome.css'; // reuse existing styles

const Contact = () => {
  return (
    <div className="main-home-wrapper">
      <Navbar />

      <section className="main-home-hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out with your questions, feedback, or suggestions.</p>
      </section>

      <section style={{ padding: '3rem 2rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Contact Form */}
          <div style={{ flex: '1 1 400px', background: '#f9fafb', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Send us a message</h2>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label>Name</label>
                <input type="text" placeholder="Your name" required style={inputStyle} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required style={inputStyle} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label>Message</label>
                <textarea rows="4" placeholder="Write your message..." required style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>

          {/* Location Details */}
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Our Location</h3>
            <p><strong>CloudSeals HQ</strong></p>
            <p>123 Startup Street</p>
            <p>Hyderabad, Telangana, India</p>
            <p>Email: support@cloudseals.com</p>
            <p>Phone: +91 98765 43210</p>

            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0626785907724!2d78.48667117595403!3d17.447031601223234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914f80e7a107%3A0x27902dd6a4309c34!2sGoogle%20Hyderabad!5e0!3m2!1sen!2sin!4v1687989347537!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0, marginTop: '1rem' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  marginTop: '0.5rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

export default Contact;
