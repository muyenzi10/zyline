import React, { useEffect, useCallback, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Service.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  // Gallery data - 9 local images - CORRECTED PATHS (using /assets/services/)
  const galleryItems = useMemo(() => [
    { image: "/assets/services/truck0.jpg", title: "Zyline Transportation Services" },
    { image: "/assets/services/truck00.jpg", title: "Zyline Transportation Services"},
    { image: "/assets/services/truck3.jpeg", title: "Zyline Transportation Services"},
    { image: "/assets/services/truck4.png", title: "Zyline Transportation Services"},
    { image: "/assets/services/truck5.jpeg", title: "Zyline Transportation Services" },
    { image: "/assets/services/truck6.jpeg", title: "Zyline Transportation Services"},
    { image: "/assets/services/truck7.jpg", title: "Zyline Transportation Services" },
    { image: "/assets/services/truck8.jpg", title: "Zyline Transportation Services" },
    { image: "/assets/services/truck9.jpeg", title: "Zyline Transportation Services" }
  ], []);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const lightboxRef = React.useRef(null);
  const lightboxImageRef = React.useRef(null);
  const lightboxCaptionRef = React.useRef(null);
  const lightboxCounterRef = React.useRef(null);

  // Function to update lightbox content
  const updateLightboxContent = useCallback(() => {
    const item = galleryItems[currentIndex];
    if (lightboxImageRef.current) lightboxImageRef.current.src = item.image;
    if (lightboxCaptionRef.current) lightboxCaptionRef.current.textContent = item.caption;
    if (lightboxCounterRef.current) lightboxCounterRef.current.textContent = `${currentIndex + 1} of ${galleryItems.length}`;
  }, [currentIndex, galleryItems]);

  // Function to go to previous image
  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

  // Function to go to next image
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  }, [galleryItems.length]);

  // Function to open lightbox
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Update lightbox content when currentIndex changes
  useEffect(() => {
    if (lightboxOpen) {
      updateLightboxContent();
    }
  }, [currentIndex, lightboxOpen, updateLightboxContent]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, prevImage, nextImage]);

  // Handle click outside lightbox
  const handleLightboxClick = (e) => {
    if (e.target === lightboxRef.current) closeLightbox();
  };

  const services = [
    { icon: "bi-lightning-charge-fill", title: "Expedited Freight", description: "Fast nationwide shipping for urgent and time-sensitive loads." },
    { icon: "bi-truck", title: "Sprinter Van Services", description: "Ideal for small, priority shipments that need immediate delivery." },
    { icon: "bi-box-seam", title: "Cargo Van Delivery", description: "Affordable transportation for small to mid-size freight." },
    { icon: "bi-truck-front", title: "Full Truckload (FTL)", description: "Semi-truck solutions for large and high-volume shipments." },
    { icon: "bi-layers", title: "Partial & LTL Loads", description: "Flexible shipping options for freight that doesn't require a full truck." },
    { icon: "bi-house-door", title: "Last-Mile Delivery", description: "Efficient final delivery directly to your customer or destination." },
    { icon: "bi-star-fill", title: "Dedicated Loads", description: "Direct transport with no unnecessary stops or transfers." },
    { icon: "bi-map", title: "Local, Regional & Nationwide Hauling", description: "Serving businesses wherever they operate." }
  ];

  const trustPoints = [
    "✔ On-Time Deliveries",
    "✔ Nationwide Coverage",
    "✔ Fast Response Times",
    "✔ Sprinter Vans, Cargo Vans & Semi-Trucks",
    "✔ Dedicated & Expedited Service",
    "✔ Real-Time Shipment Updates",
    "✔ Safe & Professional Freight Handling",
    "✔ Flexible Scheduling",
    "✔ Customer-First Service"
  ];

  return (
    <>
      {/* SECTION 1: HERO SECTION */}
      <section className="services-hero">
        <div className="container hero-content">
          <div className="text-center" data-aos="fade-up" data-aos-duration="800">
            <span className="hero-badge">✦ ZYLINE TRANSPORTATION SERVICES LLC ✦</span>
            <h1 className="hero-title fw-bold">OUR SERVICES</h1>
            <p className="hero-subtitle mx-auto">Transportation Services Built for Your Business</p>

            <div className="hero-buttons">
              <a href="#services" className="btn-hero-primary">
                Explore Services <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">States Covered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Partners</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="mouse"></div>
        </div>
      </section>

      {/* SECTION 2: SERVICES GRID */}
      <section className="container py-5" id="services">
        <div className="services-header" data-aos="fade-up">
          <h2 className="services-title">OUR SERVICES</h2>
          <p className="services-subtitle">Transportation Services Built for Your Business</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="fade-up" data-aos-delay={100 + index * 50}>
              <div className="service-card p-4">
                <div className="service-icon"><i className={`bi ${service.icon}`}></i></div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FLEET GALLERY */}
      <section className="container my-5">
        <div className="gallery-section p-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h2 className="section-title d-inline-block text-center">Our Fleet Gallery</h2>
            <p className="text-secondary mt-3">Click on any image to view in full size with navigation</p>
          </div>
          <div className="row g-4" id="gallery-container">
            {galleryItems.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index} data-aos="zoom-in" data-aos-delay={100 + index * 50}>
                <div className="gallery-item" onClick={() => openLightbox(index)}>
                  <img src={item.image} alt={`Fleet Truck ${index + 1}`} />
                  <div className="zoom-icon"><i className="bi bi-search"></i></div>
                  <div className="gallery-overlay"><p>Zyline Transportation Services</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox-overlay active" ref={lightboxRef} onClick={handleLightboxClick}>
          <div className="lightbox-container">
            <button className="lightbox-close" onClick={closeLightbox}><i className="bi bi-x-lg"></i></button>
            <button className="lightbox-prev" onClick={prevImage}><i className="bi bi-chevron-left"></i></button>
            <img className="lightbox-image" ref={lightboxImageRef} src="" alt="" />
            <button className="lightbox-next" onClick={nextImage}><i className="bi bi-chevron-right"></i></button>
            <div className="lightbox-caption" ref={lightboxCaptionRef}></div>
            <div className="lightbox-counter" ref={lightboxCounterRef}></div>
          </div>
        </div>
      )}

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="container my-5">
        <div className="why-choose-us p-5" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <span className="badge-service d-inline-block mb-3">✦ WHY CHOOSE US</span>
              <h2 className="display-6 fw-bold" style={{ color: "#0a2e3d" }}>Why Businesses Trust Zyline Transportation Services LLC</h2>
              <div className="row mt-4">
                <div className="col-md-6">
                  {trustPoints.slice(0, 5).map((point, i) => (
                    <div className="check-item" key={i}>
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {trustPoints.slice(5).map((point, i) => (
                    <div className="check-item" key={i}>
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded-4" style={{ borderLeft: "4px solid #ff6b35" }} data-aos="fade-right">
                <p className="mb-0 fst-italic fw-semibold">"We don't just move freight — we help keep your business moving."</p>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <i className="bi bi-truck-front display-1 floating-icon" style={{ color: "#ff6b35", opacity: 0.3 }}></i>
              <i className="bi bi-arrow-repeat display-1 mx-3 floating-icon" style={{ color: "#ff8c42", opacity: 0.3, animationDelay: "0.5s" }}></i>
              <i className="bi bi-clock-history display-1 floating-icon" style={{ color: "#ff6b35", opacity: 0.3, animationDelay: "1s" }}></i>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MISSION SECTION */}
      <section className="container my-5">
        <div className="mission-section p-5 text-white text-center" data-aos="flip-up">
          <h2 className="display-6 fw-bold mb-3">OUR MISSION</h2>
          <p className="fs-4 fw-semibold mb-2">Reliable Transportation. Long-Term Partnerships.</p>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: "800px" }}>
            Our mission is to provide dependable, on-time transportation solutions businesses can trust 
            while building lasting relationships through professionalism, reliability, and exceptional customer service.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;