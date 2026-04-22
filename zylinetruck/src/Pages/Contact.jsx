// pages/ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    freightType: '',
    weightSize: '',
    pickupDate: '',
    equipment: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! A Zyline logistics specialist will contact you shortly with a fast quote.');
    setFormData({
      name: '', email: '', phone: '', pickupLocation: '', deliveryLocation: '',
      freightType: '', weightSize: '', pickupDate: '', equipment: ''
    });
  };

  return (
    <div className="container" style={{padding: '3rem 0 4rem'}}>
      <div className="hero-badge">Get in touch</div>
      <h1 className="section-title" style={{textAlign: 'left'}}>Request a fast quote</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
        <div style={{flex: '1.2'}}>
          <p style={{marginBottom: '1.5rem', fontSize: '1.05rem'}}>Need reliable transportation? Zyline Transportation Services LLC makes it quick and easy to get your freight moving. Send us your shipment details and we'll provide a fast, competitive quote tailored to your needs — whether it's sprinter van, cargo van, or semi-truck service.</p>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="pickupLocation" placeholder="Pickup Location (City, State) *" value={formData.pickupLocation} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="deliveryLocation" placeholder="Delivery Location (City, State) *" value={formData.deliveryLocation} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="freightType" placeholder="Type of Freight" value={formData.freightType} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="text" name="weightSize" placeholder="Weight or Size (e.g., 500 lbs / pallets)" value={formData.weightSize} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="date" name="pickupDate" placeholder="Pickup Date" value={formData.pickupDate} onChange={handleChange} />
              </div>
              <div className="form-group">
                <select name="equipment" value={formData.equipment} onChange={handleChange}>
                  <option value="">Equipment Needed</option>
                  <option value="Sprinter Van">Sprinter Van</option>
                  <option value="Cargo Van">Cargo Van</option>
                  <option value="Semi-Truck (FTL)">Semi-Truck (FTL)</option>
                  <option value="LTL / Partial">LTL / Partial</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows="3" placeholder="Additional details..."></textarea>
              </div>
              <button type="submit" className="btn-primary">Get Fast Quote <i className="fas fa-paper-plane"></i></button>
              <p style={{marginTop: '1rem', fontSize: '0.8rem'}}><i className="fas fa-clock"></i> Fast response within business hours</p>
            </form>
          </div>
        </div>
        
        <div style={{flex: '0.8', background: '#f0f4fa', borderRadius: '28px', padding: '2rem'}}>
          <h3><i className="fas fa-headset"></i> Contact directly</h3>
          <p style={{margin: '1rem 0'}}><i className="fas fa-envelope"></i> dispatch@zyline-transport.com</p>
          <p><i className="fas fa-phone-alt"></i> +1 (800) 555-9945</p>
          <hr style={{margin: '1rem 0'}} />
          <h4>Why partner with us?</h4>
          <ul style={{marginLeft: '1rem'}}>
            <li>✔️ Same-day quotes</li>
            <li>✔️ Real-time tracking</li>
            <li>✔️ 24/7 dispatching</li>
          </ul>
          <div style={{marginTop: '2rem'}}>
            <i className="fas fa-truck-moving fa-2x" style={{color: '#c17b2e'}}></i>
            <p>Zyline Transportation — <strong>Fast quotes. Reliable delivery. Nationwide service.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;