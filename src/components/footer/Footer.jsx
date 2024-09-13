import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing the best services for our customers with a focus on reliability, customer service, and innovation.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li><span>Email:</span> saifkhancs@0056@gmail.com</li>
            <li><span>Phone:</span> +91-7459080056</li>
            <li><span>Address:</span> 123 Main Street, City, Country : India</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2024 Anime Zola. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
