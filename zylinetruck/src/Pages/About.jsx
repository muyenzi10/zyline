import React from "react";
import { Helmet } from "react-helmet";
import './About.css'

const About = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </Helmet>

      <div className="about-main-wrapper">
        <section className="about-hero py-5">
          <div className="container py-4">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="about-badge px-3 py-2 mb-3 rounded-pill">
                  <i className="bi bi-truck me-1"></i> Since 2020
                </span>
                <h1 className="display-4 fw-bold text-white mb-3">
                  About <span className="border-bottom border-warning border-3 pb-1">Zyline</span> Transportation Services
                </h1>
                <p className="lead text-white-50 mb-4">
                  Reliable logistics partner moving your business forward — safely, on time, and with integrity.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a href="/contact" className="about-btn-outline bg-white bg-opacity-10 border-white text-white" style={{borderColor: "white", color: "white"}}>
                    <i className="bi bi-telephone-fill me-1"></i>Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-5 text-center text-lg-end">
                <div className="bg-white bg-opacity-10 p-4 rounded-4 backdrop-blur-sm d-inline-block">
                  <i className="bi bi-truck-front fs-1 text-warning"></i>
                  <i className="bi bi-arrow-repeat fs-1 text-warning mx-2"></i>
                  <i className="bi bi-clock-history fs-1 text-warning"></i>
                  <p className="text-white mt-3 fw-light mb-0">Delivering excellence since August 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container my-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="pe-lg-4">
                <h2 className="about-section-title fs-2 mb-3">Who we are & what drives us</h2>
                <p className="text-secondary-emphasis fs-5 mb-3">
                  <strong>Zyline Transportation Services LLC</strong> is a trusted freight transportation company dedicated to providing 
                  <span className="about-accent-text"> safe, efficient, and on-time delivery solutions</span> for businesses that depend on reliable logistics.
                </p>
                <p className="text-secondary">
                  Since our founding in <strong>August 2020</strong>, we have built our reputation through professionalism, consistency, and a strong commitment to customer satisfaction. We understand that transportation is more than moving freight—it's about keeping businesses running, meeting deadlines, and maintaining trust. That's why we focus on clear communication, timely updates, and dependable service every step of the way.
                </p>
                <div className="about-quote-block p-4 rounded-4 mt-4 shadow-sm bg-light">
                  <i className="bi bi-chat-quote-fill fs-3 me-2" style={{color: "#f7b32b"}}></i>
                  <p className="mb-0 fst-italic fs-6">
                    "At Zyline Transportation Services, we understand that transportation is more than moving freight—it's about keeping businesses running, meeting deadlines, and maintaining trust."
                  </p>
                </div>
                <div className="mt-4">
                  <div className="row row-cols-2 g-3 mt-2">
                    <div className="col">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-check-circle-fill text-warning"></i> 
                        <span>100% owner-operated mindset</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-check-circle-fill text-warning"></i> 
                        <span>Real-time tracking & updates</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-check-circle-fill text-warning"></i> 
                        <span>Safety & compliance first</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-check-circle-fill text-warning"></i> 
                        <span>24/7 dispatch support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="d-flex flex-column h-100">
                  <h3 className="h5 fw-bold mb-3">
                    <i className="bi bi-pin-map-fill me-2" style={{color: "#f7b32b"}}></i> 
                    Our core promise
                  </h3>
                  <p>
                    Our goal is to build long-term partnerships with customers who value reliability, integrity, and professional service. 
                    <strong> We don't just move loads — we help our partners succeed.</strong> When your freight matters, you can count on 
                    Zyline Transportation Services LLC to deliver safely, efficiently, and on schedule.
                  </p>
                  <div className="mt-auto pt-3">
                    <div className="bg-light p-3 rounded-3">
                      <div className="d-flex justify-content-between">
                        <div>
                          <i className="bi bi-trophy-fill" style={{color: "#f7b32b"}}></i> 
                          <span className="small fw-semibold">0 incidents</span><br />
                          <span className="text-secondary small">safety record 2024</span>
                        </div>
                        <div>
                          <i className="bi bi-people-fill" style={{color: "#f7b32b"}}></i> 
                          <span className="small fw-semibold">98%</span><br />
                          <span className="text-secondary small">on-time delivery</span>
                        </div>
                        <div>
                          <i className="bi bi-star-fill" style={{color: "#f7b32b"}}></i> 
                          <span className="small fw-semibold">5/5</span><br />
                          <span className="text-secondary small">customer rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container mb-5">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="about-stat-card p-4 h-100">
                <i className="bi bi-calendar-check fs-1" style={{color: "#1a4a5f"}}></i>
                <h3 className="fw-bold mt-2 mb-1">Since 2020</h3>
                <p className="text-secondary">Years of proven logistics excellence & growing network</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-stat-card p-4 h-100">
                <i className="bi bi-building fs-1" style={{color: "#1a4a5f"}}></i>
                <h3 className="fw-bold mt-2 mb-1">500+</h3>
                <p className="text-secondary">Business partners including brokers, shippers & retailers</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-stat-card p-4 h-100">
                <i className="bi bi-map fs-1" style={{color: "#1a4a5f"}}></i>
                <h3 className="fw-bold mt-2 mb-1">50 States</h3>
                <p className="text-secondary">Coverage across USA — local & long-distance routes</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <div className="text-center mb-5">
            <h2 className="about-section-title d-inline-block text-center mx-auto" style={{width: "auto"}}>We proudly serve</h2>
            <p className="text-secondary mt-3 mx-auto" style={{maxWidth: "700px"}}>
              Freight brokers, shippers, manufacturers, distributors, retailers, and growing businesses that need dependable transportation services to keep operations moving smoothly.
            </p>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3 justify-content-center">
            <div className="col"><div className="bg-white p-3 rounded-4 text-center shadow-sm h-100"><i className="bi bi-briefcase-fill fs-3" style={{color: "#f7b32b"}}></i><p className="mb-0 mt-2 fw-semibold small">Freight Brokers</p></div></div>
            <div className="col"><div className="bg-white p-3 rounded-4 text-center shadow-sm h-100"><i className="bi bi-box-seam fs-3" style={{color: "#f7b32b"}}></i><p className="mb-0 mt-2 fw-semibold small">Shippers</p></div></div>
            <div className="col"><div className="bg-white p-3 rounded-4 text-center shadow-sm h-100"><i className="bi bi-gear-wide-connected fs-3" style={{color: "#f7b32b"}}></i><p className="mb-0 mt-2 fw-semibold small">Manufacturers</p></div></div>
            <div className="col"><div className="bg-white p-3 rounded-4 text-center shadow-sm h-100"><i className="bi bi-diagram-3 fs-3" style={{color: "#f7b32b"}}></i><p className="mb-0 mt-2 fw-semibold small">Distributors</p></div></div>
            <div className="col"><div className="bg-white p-3 rounded-4 text-center shadow-sm h-100"><i className="bi bi-shop fs-3" style={{color: "#f7b32b"}}></i><p className="mb-0 mt-2 fw-semibold small">Retailers</p></div></div>
            <div className="col"><div className="bg-white p-3 rounded-4 text-center shadow-sm h-100"><i className="bi bi-graph-up-arrow fs-3" style={{color: "#f7b32b"}}></i><p className="mb-0 mt-2 fw-semibold small">Growing Biz</p></div></div>
          </div>
        </section>

        <section className="container my-5 py-2">
          <div className="row align-items-center mb-4">
            <div className="col-md-8">
              <h2 className="about-section-title mb-0">What we deliver — beyond the miles</h2>
              <p className="text-secondary mt-2">Whether handling local routes or long-distance deliveries, every shipment is managed with care, precision, and urgency.</p>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="/view" className="about-btn-outline">View all services <i className="bi bi-arrow-right-short"></i></a>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="about-service-card p-4 h-100">
                <i className="bi bi-truck about-service-icon"></i>
                <h4 className="h5 fw-bold mt-3">Full Truckload (FTL)</h4>
                <p className="text-secondary">Dedicated capacity for large freight, maximizing efficiency and minimizing handling.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-service-card p-4 h-100">
                <i className="bi bi-layers about-service-icon"></i>
                <h4 className="h5 fw-bold mt-3">Less Than Truckload (LTL)</h4>
                <p className="text-secondary">Cost-effective consolidation for smaller shipments with reliable scheduling.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-service-card p-4 h-100">
                <i className="bi bi-clock about-service-icon"></i>
                <h4 className="h5 fw-bold mt-3">Expedited Shipping</h4>
                <p className="text-secondary">Time-critical deliveries with priority dispatch and real-time tracking.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container my-5">
          <div className="row bg-white rounded-5 shadow-sm p-4 p-lg-5 align-items-center">
            <div className="col-lg-8">
              <h3 className="fw-bold" style={{color: "#0a2e3d"}}>Your success drives our mission</h3>
              <p className="fs-5 mt-2">We don't just move loads — we help our partners succeed. <span className="about-accent-text">Long-term partnerships</span> built on reliability, integrity, and professional service. That's the Zyline difference.</p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <div><i className="bi bi-chat-dots-fill me-1 text-warning"></i> Clear communication</div>
                <div><i className="bi bi-bell-fill me-1 text-warning"></i> Timely updates</div>
                <div><i className="bi bi-shield-check me-1 text-warning"></i> Dependable service</div>
              </div>
            </div>
            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <i className="bi bi-people-fill fs-1 opacity-25" style={{color: "#0a2e3d"}}></i>
              <div className="bg-warning bg-opacity-10 rounded-4 p-3 mt-2">
                <p className="mb-0 fw-semibold">"When your freight matters, you can count on Zyline."</p>
              </div>
            </div>
          </div>
        </div>

        <section className="container my-5">
          <div className="bg-light rounded-4 p-4 p-md-5">
            <div className="row justify-content-center text-center">
              <div className="col-md-10">
                <i className="bi bi-quote display-1 text-warning opacity-50"></i>
                <p className="fs-4 fw-medium mt-3">Zyline Transportation has been a game-changer for our distribution network — on-time delivery and exceptional communication. They truly care about our deadlines.</p>
                <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "45px", height: "45px"}}>
                    <i className="bi bi-person-fill text-dark"></i>
                  </div>
                  <div className="text-start">
                    <strong>Marcus Reynolds</strong><br />
                    <span className="small text-secondary">Logistics Director, Allied Retail Group</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container my-5 text-center">
          <div className="bg-white shadow rounded-5 p-5" style={{background: "linear-gradient(115deg, #ffffff 0%, #fef9e6 100%)"}}>
            <h2 className="fw-bold" style={{color: "#0a2e3d"}}>Ready to move your freight with confidence?</h2>
            <p className="lead text-secondary mb-4">Partner with Zyline Transportation Services LLC and experience reliability that drives your business forward.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="/contact" className="about-btn-outline px-5 py-3 fs-6 rounded-pill border-2">
                <i className="bi bi-headset"></i> Contact support
              </a>
            </div>
            <hr className="my-4" />
            <p className="mb-0 text-muted small">
              <i className="bi bi-truck me-1"></i> Zyline Transportation Services LLC — Delivering safely, efficiently, and on schedule since August 2020
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;