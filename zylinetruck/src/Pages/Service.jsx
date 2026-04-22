// TransportationServicesPage.js
import React from 'react';

const Service = () => {
  const servicesList = [
    "Nationwide Expedited Freight",
    "Sprinter Van Services",
    "Cargo Van Delivery",
    "Semi-Truck (Full Truckload – FTL)",
    "Partial & LTL Loads",
    "Last-Mile Delivery",
    "Local, Regional & Long-Distance Hauling",
    "Dedicated Loads",
    "Same-Day & Next-Day Delivery",
    "Flexible Scheduling",
    "Real-Time Communication",
    "Professional Handling"
  ];

  const whyChooseUs = [
    "Reliable, On-Time Delivery – We understand that delays cost money. Our team is committed to delivering every load safely and on schedule.",
    "Nationwide Coverage – Whether local or across the country, we have the capacity to move your freight wherever it needs to go.",
    "Versatile Fleet – From sprinter vans and cargo vans to semi-trucks, we handle everything from small urgent shipments to full truckloads.",
    "Expedited Solutions – When time is critical, we move fast with dedicated, no-delay transportation.",
    "Direct & Dedicated Service – Your freight goes straight to its destination—no unnecessary stops or transfers.",
    "Clear Communication – We keep you updated so you always know where your shipment is.",
    "Flexible & Scalable – We adapt to your business needs, whether it's a one-time shipment or ongoing logistics support.",
    "Professional & Careful Handling – Every load is treated with the highest level of care and attention.",
    "Customer-First Approach – We focus on building long-term partnerships by delivering consistent, high-quality service."
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Transportation Services</h1>
          <p className="subtitle">Fast, reliable solutions for businesses nationwide</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="section">
        <div className="container">
          <div className="services-intro">
            <p>
              At Zyline Transportation Services LLC, we provide fast, reliable transportation solutions using 
              sprinter vans, cargo vans, and semi-trucks — serving businesses nationwide with both time-sensitive 
              and large-scale freight needs.
            </p>
          </div>
          
          <h2>What We Offer</h2>
          <div className="services-grid">
            {servicesList.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">🚚</div>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="why-grid">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-number">{index + 1}</div>
                <p>{reason}</p>
              </div>
            ))}
          </div>
          
          {/* Peace of Mind Message */}
          <div className="peace-mind">
            <p>
              <strong>At Zyline Transportation Services LLC, we don't just move freight — we provide peace of mind.</strong> 
              Our commitment to reliability, speed, and service makes us a trusted partner for businesses that can't afford delays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;