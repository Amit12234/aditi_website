// -----------------------------
// File: App.js (replace your existing App.js with this)
// -----------------------------

import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.png';
import profile from './images/profile.jpeg';
import TestimonialsSlider from './components/TestimonialsSlider';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="navbar">
        <div className="nav-container">
          <div className="nav-logo">

  {/* Logo now acts as the mobile navbar toggle */}
  <button
    className="navbar-logo-button"
    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
    aria-expanded={menuOpen ? 'true' : 'false'}
    onClick={() => setMenuOpen((prev) => !prev)}
  >
    <img src={logo} alt="Pratidhi logo" className="navbar-logo" />
  </button>

  <h2 className="navbar-title">
    <span className="navbar-title-full">Pratidhi Therapy & Wellness LLP</span>
    <span className="navbar-title-short">Pratidhi Therapy & Wellness LLP</span>
  </h2>

</div>
          <button
            className="nav-burger"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>

          <ul
            id="primary-navigation"
            className={`nav-menu ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <div className="container hero-content">
            <h1 id="hero-heading" className="hero-title" aria-label="Pratidhi: Embracing The Power of Hope">
              <span className="hero-title-line">Pratidhi: Embracing The Power of Hope</span>
            </h1>

            <p className="hero-tagline">
              Pratidhi, meaning hope in Sanskrit, beautifully captures the essence of psychological healing.
            </p>

            <p className="hero-meaning">
              Rooted in Vedic philosophy, it reflects timeless wisdom and the journey towards inner peace. In counselling,
              hope is the foundation for transformation, resilience, and recovery. The name symbolizes trust, positivity,
              and a sense of spiritual grounding. It assures us that no matter our struggle, a path forward
              always exists.
            </p>

            <h3 className="hero-whatwedo">What we do</h3>
            <p className="hero-description">
              Our aim at Pratidhi, is to provide accessible, affordable, and quality mental health care to individuals, couples,
              families, and groups to help them develop emotional resilience, coping skills, and self-awareness to
              manage life's challenges effectively. We understand how important mental health is and we aim at providing
              preventive programs and early intervention techniques to reduce the long-term effects of mental health
              issues.
            </p>

            <a
              className="cta-button"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeivAm8tJUDRAhwohBGeUvv5bBRbvLTdX1pDuI03vYRm-_nMA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Consultation
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about" aria-labelledby="about-heading">
          <div className="container">
            <h2 id="about-heading">About The Founder</h2>
            <div className="about-content">
              <img
                src={profile}
                alt="Founder portrait"
                className="about-profile-img"
                loading="lazy"
              />
              <div className="about-text">
                <p>
                  Holding a Masters Degree in Clincal Psychology, with over 4 years of experience in helping
                  individuals across different spectrum of mental and emotional challenges develop insight through counselling and collaborative efforts.
                </p>
                <p>
                  Since one size doesn't fit all, every counselling approach is also unique to everyone. Therefore, each
                  individual deserves personalized attention and therapy sessions customized to their needs.
                </p>
                <p>
                  Whether it's marital discord, relationship stress, anxiety, career issues, stress management
                  phobias, anger issues and outbursts, depression, behavioural or learning problems, or any other challenge, we believe that
                  psychological issues are ways to vent out our negative mental energies that arise out of traumatic or overwhelming experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services" aria-labelledby="services-heading">
          <div className="container">
            <h2 id="services-heading">Our Services</h2>
            <div className="services-grid">
              <div className="service-card counseling-card">
                <h3>Psychological Counseling</h3>
                <p>
                  A safe, compassionate space to explore challenges, gain clarity, and build resilience. Includes
                  adolescent, individual, couples, marital, family and career counselling.
                </p>
              </div>
              <div className="service-card meditation-card">
                <h3>Meditation & Mindfulness</h3>
                <p>
                  Guided practices to reduce stress, improve focus, and cultivate inner peace, self-awareness and
                  emotional balance.
                </p>
              </div>
              <div className="service-card courses-card">
                <h3>Courses & Workshops</h3>
                <p>
                  Engaging programs covering psychological concepts for students, professionals and individuals seeking
                  deeper understanding.
                </p>
              </div>
              <div className="service-card service-card-center psychometrics-card">
                <h3>Psychometrics Screening Assessment</h3>
                <p>
                  Evidence-based tools to assess personality, intelligence, career interests and emotional well-being
                  for informed decisions.
                </p>
              </div>
              <div className="service-card service-card-center internships-card">
                <h3>Internships</h3>
                <p>
                  Practical exposure for aspiring professionals—bridging theory with real-world supervised application.
                </p>
              </div>
              <div className="service-card service-card-center career-card">
                <h3>Career and Guidance</h3>
                <p>
                  Personalised guidance to help you understand your strengths, interests, and goals, and make informed, confident career decisions at every stage of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why" className="why-choose" aria-labelledby="why-heading">
          <div className="container">
            <h2 id="why-heading">Why Choose Us</h2>
            <div className="why-choose-intro">
              <p>
                At Pratidhi, we understand that seeking support is a courageous step. We create a safe, non-judgmental,
                compassionate space where every individual feels heard and valued.
              </p>
            </div>
            <div className="features">
              <div className="feature personalized-card">
                <h3>Personalized Care</h3>
                <p>Each journey is unique. Sessions are tailored to your needs and goals.</p>
              </div>
              <div className="feature professional-card">
                <h3>Professional Expertise</h3>
                <p>Years of training and evidence-based strategies that truly help.</p>
              </div>
              <div className="feature holistic-card">
                <h3>Holistic Growth</h3>
                <p>We nurture resilience, confidence, and emotional well-being -not only symptom relief.</p>
              </div>
              <div className="feature confidential-card">
                <h3>Confidential & Supportive</h3>
                <p>Your privacy and comfort are paramount in every conversation.</p>
              </div>
              <div className="feature empowering-card">
                <h3>Empowering Change</h3>
                <p>Guiding you to thrive—in relationships, career and personal life.</p>
              </div>
            </div>
            <div className="why-choose-outro">
              <p>
                Choosing us means choosing growth, healing, and a trusted partner in your mental and emotional wellness
                journey.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="testimonials" aria-labelledby="testimonials-heading">
          <div className="container">
            <h2 id="testimonials-heading">What Our Clients Say</h2>
            <TestimonialsSlider />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact" aria-labelledby="contact-heading">
          <div className="container">
            <h2 id="contact-heading">Contact Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>
                  📍  Indirapuram <br />
                       Ghaziabad-201014, Uttar Pradesh, India
                </p>
                <p>📞  +91 9310521056 </p>
                <p>✉️ pratidhi02@gmail.com</p>
              </div>
              <div className="contact-form">
                <h3>Book a Consultation</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" aria-label="Your Name" />
                  <input type="email" placeholder="Your Email" aria-label="Your Email" />
                  <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
                  <textarea placeholder="Tell us about your needs..." aria-label="Message"></textarea>
                </form>

                {/* Wrap the CTA in a centering container to avoid clipping and stretching */}
                <div className="form-container">
                  <a
                    className="cta-button"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeivAm8tJUDRAhwohBGeUvv5bBRbvLTdX1pDuI03vYRm-_nMA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Consultation
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Pratidhi Therapy & Wellness LLP</h3>
              <p>Professional psychological counseling and holistic healing services.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#why">Why Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li>Psychological Counseling</li>
                <li>Meditation & Mindfulness</li>
                <li>Courses & Workshops</li>
                <li>Psychometrics Screening Assessment</li>
                <li>Internships</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/share/17rgVcLM5z/" aria-label="Facebook">Facebook</a>
                <a href="https://www.instagram.com/pratidhi_therapyandwellness?igsh=bGJpZmlsa3VzaGM2" aria-label="Instagram">Instagram</a>
                <a href="https://www.linkedin.com/in/aditi-dwivedi-763588211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">LinkedIn</a>
                {/* <a href="#" aria-label="YouTube">YouTube</a> */}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Pratidhi Therapy & Wellness LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
