// pages/Home.jsx
import React, { useCallback, useRef, useState, useEffect } from 'react';
import './Home.css';
import { 
  FaTruck, 
  FaBox, 
  FaClock, 
  FaMapMarkerAlt, 
  FaShieldAlt, 
  FaHeadset, 
  FaRocket, 
  FaChartLine,
  FaCheckCircle,
  FaTimesCircle,
  FaBuilding,
  FaHandshake,
  FaWarehouse,
  FaIndustry,
  FaStore,
  FaWrench,
  FaUsers,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    freightType: '',
    weight: '',
    pickupDate: '',
    equipment: 'Sprinter Van',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const contactRef = useRef(null);

  // Set minimum date for pickup to today
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // Add animation classes on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContact = useCallback(() => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission - replace with your actual API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        pickupLocation: '',
        deliveryLocation: '',
        freightType: '',
        weight: '',
        pickupDate: '',
        equipment: 'Sprinter Van',
        details: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    { icon: <FaRocket />, title: "Nationwide Expedited Freight", description: "Fast and dependable delivery across the country", tag: "Expedited" },
    { icon: <FaTruck />, title: "Sprinter Van Services", description: "Perfect for urgent, time-critical shipments", tag: "Urgent" },
    { icon: <FaTruck />, title: "Cargo Van Delivery", description: "Cost-effective solutions for small to mid-size loads", tag: "Economy" },
    { icon: <FaTruck />, title: "Semi-Truck (FTL)", description: "Reliable transport for large and high-volume shipments", tag: "Bulk" },
    { icon: <FaBox />, title: "Partial & LTL Loads", description: "Flexible options for smaller freight that doesn't require a full truck", tag: "Flexible" },
    { icon: <FaMapMarkerAlt />, title: "Last-Mile Delivery", description: "Efficient final delivery to your customer's door", tag: "Final Mile" },
    { icon: <FaTruck />, title: "Local, Regional & Long-Distance", description: "Coverage wherever your business operates", tag: "All Distances" },
    { icon: <FaClock />, title: "Dedicated Loads", description: "Direct transport with no transfers or delays", tag: "Direct" },
    { icon: <FaRocket />, title: "Same-Day & Next-Day Delivery", description: "Rapid solutions to keep your operations on track", tag: "Rapid" },
    { icon: <FaClock />, title: "Flexible Scheduling", description: "We adapt to your timelines and shipping demands", tag: "Adaptable" },
    { icon: <FaHeadset />, title: "Real-Time Communication", description: "Stay informed with updates every step of the way", tag: "Transparent" },
    { icon: <FaShieldAlt />, title: "Professional Handling", description: "Safe, secure, and careful transport of every shipment", tag: "Secure" }
  ];

  const whyChooseUs = [
    { icon: <FaClock />, title: "Reliable, On-Time Delivery", description: "We understand that delays cost money. Our team is committed to delivering every load safely and on schedule." },
    { icon: <FaMapMarkerAlt />, title: "Nationwide Coverage", description: "Whether local or across the country, we have the capacity to move your freight wherever it needs to go." },
    { icon: <FaTruck />, title: "Versatile Fleet", description: "From sprinter vans and cargo vans to semi-trucks, we handle everything from small urgent shipments to full truckloads." },
    { icon: <FaRocket />, title: "Expedited Solutions", description: "When time is critical, we move fast with dedicated, no-delay transportation." },
    { icon: <FaTruck />, title: "Direct & Dedicated Service", description: "Your freight goes straight to its destination—no unnecessary stops or transfers." },
    { icon: <FaHeadset />, title: "Clear Communication", description: "We keep you updated so you always know where your shipment is." },
    { icon: <FaChartLine />, title: "Flexible & Scalable", description: "We adapt to your business needs, whether it's a one-time shipment or ongoing logistics support." },
    { icon: <FaShieldAlt />, title: "Professional & Careful Handling", description: "Every load is treated with the highest level of care and attention." },
    { icon: <FaHeadset />, title: "Customer-First Approach", description: "We focus on building long-term partnerships by delivering consistent, high-quality service." }
  ];

  const idealCustomers = [
    { icon: <FaBuilding />, title: "Freight Brokers & 3PLs", description: "Partners who need reliable carriers for their shippers" },
    { icon: <FaIndustry />, title: "Manufacturers", description: "Consistent shipping needs for raw materials and finished goods" },
    { icon: <FaWarehouse />, title: "Distributors & Warehouses", description: "Regular coordination of inbound and outbound shipments" },
    { icon: <FaStore />, title: "E-commerce & Retail", description: "Time-sensitive deliveries to meet customer expectations" },
    { icon: <FaTruck />, title: "Construction Supply", description: "Consistent demands for building materials and equipment" },
    { icon: <FaUsers />, title: "Small to Mid-Sized Businesses", description: "Businesses that need a trusted logistics partner" }
  ];

  const partners = [
    { icon: <FaHandshake />, title: "Freight Brokers", description: "Regularly working with shippers needing reliable transportation" },
    { icon: <FaBuilding />, title: "Logistics Companies", description: "Dispatch services and 3PL providers seeking dependable carriers" },
    { icon: <FaWarehouse />, title: "Warehouses & Distribution Centers", description: "Facilities that frequently coordinate shipments" },
    { icon: <FaIndustry />, title: "Manufacturers & Wholesalers", description: "Businesses with consistent shipping demands" },
    { icon: <FaStore />, title: "E-commerce Fulfillment", description: "Retail distribution with time-sensitive needs" },
    { icon: <FaWrench />, title: "Truck Repair & Maintenance", description: "Supporting transportation operations" },
    { icon: <FaTruck />, title: "Other Carriers", description: "Collaboration, load sharing, and overflow support" }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" aria-label="Hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">Est. 2020</div>
          <h1>Fast, Reliable Transportation Solutions</h1>
          <p>Serving businesses nationwide with sprinter vans, cargo vans, and semi-trucks</p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="cta-button primary">
              Get a Quote Today
            </button>
            <button className="cta-button secondary">
              Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat">
              <span className="stat-number">Nationwide</span>
              <span className="stat-label">Coverage</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Story Section */}
      <section className="story" aria-label="Our Story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content animate-on-scroll">
              <span className="section-tag">Our Story</span>
              <h2>Built on Determination, Driven by Excellence</h2>
              <p className="story-highlight">
                Zyline Transportation Services LLC was founded in August 2020 during the height of the COVID-19 pandemic — a time when reliability in transportation was more critical than ever.
              </p>
              <p>
                Behind the company is a powerful story of determination: a young father, facing sudden job loss, with a three-year-old daughter depending on him and bills that could no longer wait. Instead of accepting defeat, he turned adversity into opportunity.
              </p>
              <p>
                He recognized that while the world was slowing down, businesses still needed a dependable partner to keep their freight moving. That realization became the foundation of Zyline Transportation Services LLC — a company built not just to operate, but to solve real problems for real businesses.
              </p>
              <p>
                From day one, the focus has been simple: deliver on time, communicate clearly, and treat every shipment like it matters — because it does. Clients choose Zyline not just for transportation, but for peace of mind knowing their freight is handled with urgency, care, and professionalism.
              </p>
              <div className="story-quote">
                <p>"Today, Zyline Transportation Services LLC stands as a trusted partner for businesses that value reliability, consistency, and strong service."</p>
              </div>
            </div>
            <div className="story-stats animate-on-scroll">
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-number">August 2020</div>
                <div className="stat-label">Founded</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-number">99%</div>
                <div className="stat-label">On-Time Delivery</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🤝</div>
                <div className="stat-number">100+</div>
                <div className="stat-label">Trusted Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission" aria-label="Our Mission">
        <div className="container">
          <div className="mission-content animate-on-scroll">
            <span className="section-tag">Our Mission</span>
            <h2>Moving Your Business Forward</h2>
            <p>
              At Zyline Transportation Services LLC, our mission is to deliver dependable, on-time transportation solutions 
              that businesses can trust, while building lasting relationships through reliability, professionalism, 
              and a commitment to putting our customers first.
            </p>
            <div className="mission-values">
              <div className="value">
                <FaCheckCircle />
                <span>Reliability</span>
              </div>
              <div className="value">
                <FaCheckCircle />
                <span>Professionalism</span>
              </div>
              <div className="value">
                <FaCheckCircle />
                <span>Customer First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services" aria-label="Our Services">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">What We Offer</span>
            <h2>Our Services</h2>
            <p className="section-subtitle">
              We provide fast, reliable transportation solutions using sprinter vans, cargo vans, and semi-trucks—serving 
              businesses nationwide with both time-sensitive and large-scale freight needs.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card animate-on-scroll" key={index} style={{animationDelay: `${index * 0.05}s`}}>
                <div className="service-tag">{service.tag}</div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose" aria-label="Why Choose Us">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Why Choose Us</span>
            <h2>Your Trusted Logistics Partner</h2>
            <p className="section-subtitle">
              At Zyline Transportation Services LLC, we don't just move freight — we provide peace of mind. 
              Our commitment to reliability, speed, and service makes us a trusted partner for businesses that can't afford delays.
            </p>
          </div>
          <div className="features-grid">
            {whyChooseUs.map((feature, index) => (
              <div className="feature-card animate-on-scroll" key={index} style={{animationDelay: `${index * 0.05}s`}}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Customers Section */}
      <section className="ideal-customers" aria-label="Ideal Customers">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Who We Serve</span>
            <h2>Our Ideal Customers</h2>
            <p className="section-subtitle">
              Our ideal customers are businesses and professionals who rely on dependable freight transportation to keep their operations running smoothly. 
              We work best with partners who value clear communication, reliability, and professionalism.
            </p>
          </div>
          <div className="customers-grid">
            {idealCustomers.map((customer, index) => (
              <div className="customer-card animate-on-scroll" key={index}>
                <div className="customer-icon">{customer.icon}</div>
                <h3>{customer.title}</h3>
                <p>{customer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="partnerships" aria-label="Partnerships">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Collaborate With Us</span>
            <h2>Businesses We Partner With</h2>
            <p className="section-subtitle">
              We're interested in connecting with businesses that serve similar customers or operate within the logistics and supply chain industry.
            </p>
          </div>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card animate-on-scroll" key={index}>
                <div className="partner-icon">{partner.icon}</div>
                <h3>{partner.title}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
          <div className="partnership-cta">
            <p>🤝 Interested in partnering with us? <button onClick={scrollToContact} className="text-link">Let's connect →</button></p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-label="Call to Action">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Need Reliable Transportation?</h2>
            <p>
              Zyline Transportation Services LLC makes it quick and easy to get your freight moving.
              Send us your shipment details and we'll provide a fast, competitive quote tailored to your needs — 
              whether it's sprinter van, cargo van, or semi-truck service.
            </p>
            <button onClick={scrollToContact} className="cta-button primary large">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" ref={contactRef} className="contact-form-section" aria-label="Contact Form">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Get Started</span>
            <h2>Get a Fast Quote</h2>
            <p className="section-subtitle">
              Fast quotes. Reliable delivery. Nationwide service.
            </p>
          </div>
          
          {submitStatus === 'success' && (
            <div className="alert alert-success animate-on-scroll" role="alert">
              <FaCheckCircle /> Thank you! Your quote request has been sent. We'll contact you shortly.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="alert alert-error animate-on-scroll" role="alert">
              <FaTimesCircle /> Sorry, there was an error. Please try again or call us directly.
            </div>
          )}
          
          <form className="contact-form animate-on-scroll" onSubmit={handleSubmit} noValidate>
            <div className="form-header">
              <h3>Shipment Details</h3>
              <p>Please include all relevant information for an accurate quote</p>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Smith" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Business Name" 
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567" 
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickupLocation">Pickup Location *</label>
                <input 
                  type="text" 
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="City, State, ZIP" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryLocation">Delivery Location *</label>
                <input 
                  type="text" 
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleInputChange}
                  placeholder="City, State, ZIP" 
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="freightType">Type of Freight *</label>
                <input 
                  type="text" 
                  id="freightType"
                  name="freightType"
                  value={formData.freightType}
                  onChange={handleInputChange}
                  placeholder="What are you shipping?" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="weight">Weight / Dimensions *</label>
                <input 
                  type="text" 
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="Approx. weight or dimensions" 
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="pickupDate">Pickup Date *</label>
                <input 
                  type="date" 
                  id="pickupDate"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  min={today}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="equipment">Equipment Needed *</label>
                <select 
                  id="equipment"
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="Sprinter Van">Sprinter Van</option>
                  <option value="Cargo Van">Cargo Van</option>
                  <option value="Semi-Truck (FTL)">Semi-Truck (FTL)</option>
                  <option value="Partial / LTL">Partial / LTL</option>
                  <option value="Not Sure">Not Sure / Consultation Needed</option>
                </select>
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="details">Additional Details</label>
              <textarea 
                id="details"
                name="details"
                rows="4" 
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Any special requirements, handling instructions, or additional information..."
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-button" 
              disabled={isSubmitting}
              aria-label="Submit quote request"
            >
              {isSubmitting ? 'Sending Request...' : 'Get Your Free Quote →'}
            </button>
            
            <p className="form-note">
              <FaShieldAlt /> Your information is secure. We'll respond within 1 business hour.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;