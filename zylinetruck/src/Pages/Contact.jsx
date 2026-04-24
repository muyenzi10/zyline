import React, { useState, useRef } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaHeadset, FaCertificate, FaBolt, FaTruck, FaTrailer, FaDoorOpen, FaBuilding, FaPhoneAlt, FaEnvelopeOpenText, FaClock, FaShieldAlt, FaStar, FaCheckCircle, FaMapPin, FaPaperPlane, FaSpinner, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    location: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  
  const formRef = useRef(null);

  // Validation functions
  const isValidName = (value) => {
    if (!value || value.trim() === '') return false;
    const nameRegex = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s\-']+$/;
    return nameRegex.test(value.trim()) && value.trim().length >= 2;
  };

  const isValidEmail = (email) => {
    if (!email.trim()) return false;
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const isValidPhone = (rawPhone) => {
    if (!rawPhone.trim()) return false;
    const digits = rawPhone.replace(/[\s()+\-.]/g, '');
    return /^[0-9]{7,15}$/.test(digits);
  };

  const isValidState = (stateVal) => {
    if (!stateVal.trim()) return false;
    const trimmed = stateVal.trim();
    if (trimmed.length < 2) return false;
    const regionRegex = /^[a-zA-Z\u00C0-\u024F\s.,'&()-]+$/;
    return regionRegex.test(trimmed);
  };

  const isValidLocation = (loc) => {
    if (!loc || loc.trim() === '') return false;
    const trimmed = loc.trim();
    if (trimmed.length < 3) return false;
    const locationRegex = /^[a-zA-Z0-9\u00C0-\u024F\s.,\-/#]+$/;
    return locationRegex.test(trimmed);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name required.';
    } else if (!isValidName(formData.firstName)) {
      newErrors.firstName = 'Letters, spaces, hyphens only (min 2 chars).';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Last name required.';
    } else if (!isValidName(formData.lastName)) {
      newErrors.lastName = 'Valid last name (min 2 chars).';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email address required.';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Enter a valid email (e.g., name@domain.com).';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number required.';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Valid phone number (7-15 digits).';
    }
    
    if (!formData.state) {
      newErrors.state = 'State / Region required.';
    } else if (!isValidState(formData.state)) {
      newErrors.state = 'Valid state/region (letters, spaces).';
    }
    
    if (!formData.location) {
      newErrors.location = 'Pickup location required.';
    } else if (!isValidLocation(formData.location)) {
      newErrors.location = 'Valid address (min 3 chars, letters, numbers).';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const clearFieldErrors = () => {
    setErrors({});
  };

  const showMessage = (message, type) => {
    setFeedback({ message, type });
    setTimeout(() => {
      setFeedback({ message: '', type: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ message: '', type: '' });
    
    if (!validateForm()) {
      showMessage('⚠️ Please fix the highlighted fields. All required info needed.', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    const leadData = {
      ...formData,
      timestamp: new Date().toISOString(),
      company: "Zyline Transportation Services LLC",
      officeAddress: "1581 West Alsace Way, West Valley, Utah 84119"
    };
    
    try {
      console.log('Zyline Transport lead:', leadData);
      await new Promise(resolve => setTimeout(resolve, 600));
      
      showMessage(`✅ Thanks ${formData.firstName}! A transport agent will contact you shortly with a quote. We'll contact you at ${formData.email} and ${formData.phone} for pickup at "${formData.location}" (${formData.state}) within 1 hour.`, 'success');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        location: '',
        message: ''
      });
      clearFieldErrors();
      
    } catch (err) {
      showMessage('⚠️ Temporary issue. Please call dispatch directly.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* SPACER FOR FIXED NAVBAR */}
      <div className="zyline-contact-nav-spacer"></div>
      
      <section className="zyline-contact-section">
        <div className="zyline-contact-orange-accent-top"></div>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* LEFT COLUMN: Contact Form */}
            <div className="col-lg-6">
              <div className="zyline-contact-card">
                <div className="zyline-contact-section-badge">
                  <FaHeadset className="me-1" /> 24/7 Dispatch
                </div>
                <div className="zyline-contact-business-name">Zyline <span>Transportation Services</span> LLC</div>
                <div className="zyline-contact-company-tag"><FaCertificate /> Licensed & Premium Fleet</div>
                <div className="zyline-contact-divider-orange"></div>
                
                <div className="zyline-contact-company-summary">
                  <strong>Fast, reliable nationwide freight solutions</strong> using sprinter vans, cargo vans, and semi-trucks. Serving businesses with time-sensitive and large-scale needs.
                </div>
                
                <div className="zyline-contact-services-badge-list">
                  <span className="zyline-contact-service-pill"><FaBolt /> Expedited Freight</span>
                  <span className="zyline-contact-service-pill"><FaTruck /> Sprinter/Cargo Vans</span>
                  <span className="zyline-contact-service-pill"><FaTrailer /> FTL / LTL</span>
                  <span className="zyline-contact-service-pill"><FaDoorOpen /> Last-Mile Delivery</span>
                </div>
                
                {feedback.message && (
                  <div className={feedback.type === 'success' ? 'zyline-contact-success-message' : 'zyline-contact-error-message'}>
                    {feedback.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} ref={formRef}>
                  <div className="row g-2 mb-1">
                    <div className="col-md-6">
                      <div className="zyline-contact-form-group">
                        <label htmlFor="firstName" className="zyline-contact-form-label">
                          First name <span className="zyline-contact-text-orange">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className={`zyline-contact-form-control ${errors.firstName ? 'is-invalid' : ''}`}
                          placeholder="e.g., Michael"
                          value={formData.firstName}
                          onChange={handleChange}
                          autoComplete="given-name"
                        />
                        {errors.firstName && <div className="zyline-contact-invalid-feedback">{errors.firstName}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="zyline-contact-form-group">
                        <label htmlFor="lastName" className="zyline-contact-form-label">
                          Last name <span className="zyline-contact-text-orange">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className={`zyline-contact-form-control ${errors.lastName ? 'is-invalid' : ''}`}
                          placeholder="e.g., Carter"
                          value={formData.lastName}
                          onChange={handleChange}
                          autoComplete="family-name"
                        />
                        {errors.lastName && <div className="zyline-contact-invalid-feedback">{errors.lastName}</div>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="row g-2">
                    <div className="col-md-6">
                      <div className="zyline-contact-form-group">
                        <label htmlFor="email" className="zyline-contact-form-label">
                          Email address <span className="zyline-contact-text-orange">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`zyline-contact-form-control ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="hello@zyline.com"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                        />
                        {errors.email && <div className="zyline-contact-invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="zyline-contact-form-group">
                        <label htmlFor="phone" className="zyline-contact-form-label">
                          Phone number <span className="zyline-contact-text-orange">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className={`zyline-contact-form-control ${errors.phone ? 'is-invalid' : ''}`}
                          placeholder="+1 (816) 437-5248"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                        />
                        {errors.phone && <div className="zyline-contact-invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="row g-2">
                    <div className="col-md-6">
                      <div className="zyline-contact-form-group">
                        <label htmlFor="state" className="zyline-contact-form-label">
                          State / Region <span className="zyline-contact-text-orange">*</span>
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          className={`zyline-contact-form-control ${errors.state ? 'is-invalid' : ''}`}
                          placeholder="e.g., Utah, California"
                          value={formData.state}
                          onChange={handleChange}
                          autoComplete="address-level1"
                        />
                        {errors.state && <div className="zyline-contact-invalid-feedback">{errors.state}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="zyline-contact-form-group">
                        <label htmlFor="location" className="zyline-contact-form-label">
                          Pickup / Service Location <span className="zyline-contact-text-orange">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          className={`zyline-contact-form-control ${errors.location ? 'is-invalid' : ''}`}
                          placeholder="Street address, city, or landmark"
                          value={formData.location}
                          onChange={handleChange}
                          autoComplete="address-line1"
                        />
                        {errors.location && <div className="zyline-contact-invalid-feedback">{errors.location}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="zyline-contact-small-hint mb-2">
                    <FaMapMarkerAlt className="zyline-contact-text-orange" /> Exact location helps us dispatch faster
                  </div>
                  
                  <div className="zyline-contact-form-group">
                    <label htmlFor="message" className="zyline-contact-form-label">Freight details (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      className="zyline-contact-form-control"
                      placeholder="Shipment type, weight, dimensions, or special requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="zyline-contact-btn-orange mt-1" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><FaSpinner className="fa-pulse" /> Sending...</>
                    ) : (
                      <><FaPaperPlane /> Get a Quote</>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* RIGHT COLUMN: Contact Information & Social Media */}
            <div className="col-lg-5 offset-lg-1">
              <div className="zyline-contact-info-card">
                <h4><FaTruck className="me-2" /> Zyline Services</h4>
                <div className="zyline-contact-info-list">
                  <p><FaBuilding /> <span><strong>Zyline Transportation Services LLC</strong><br />1581 West Alsace Way<br />West Valley, Utah 84119</span></p>
                  <p><FaPhoneAlt /> <span><strong>+1 (816) 437 5248</strong></span></p>
                  <p><FaEnvelopeOpenText /> <span>dispatch@zyline-transport.com</span></p>
                  <p><FaClock /> <span>24/7 Dispatch — We never sleep</span></p>
                </div>
                
                <div className="zyline-contact-social-links">
                  <a 
                    href="https://www.instagram.com/zyline.transport" 
                    className="zyline-contact-social-instagram" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="https://www.facebook.com/zyline.transport" 
                    className="zyline-contact-social-facebook" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="https://www.twitter.com/zyline_transport" 
                    className="zyline-contact-social-twitter" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a 
                    href="mailto:dispatch@zyline-transport.com" 
                    className="zyline-contact-social-email" 
                    aria-label="Email Us"
                  >
                    <FaEnvelope />
                  </a>
                </div>
                
                <hr />
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                  <span className="zyline-contact-badge-light"><FaShieldAlt className="me-1" /> Premium fleet</span>
                  <span className="zyline-contact-badge-light"><FaBolt /> Instant quotes</span>
                  <span className="zyline-contact-badge-light"><FaStar /> 5-star support</span>
                </div>
                <p className="mt-2 mb-0 small text-muted" style={{ fontSize: "0.65rem", color: "#8b9eb0", fontWeight: "500" }}>
                  <FaCheckCircle className="zyline-contact-text-orange" /> Fast, reliable nationwide transportation
                </p>
                <div className="mt-1">
                  <FaMapPin className="zyline-contact-text-orange me-1" /> 
                  <span className="small" style={{ fontSize: "0.7rem", color: "#5a6e85", fontWeight: "500" }}>Serving West Valley City & nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;