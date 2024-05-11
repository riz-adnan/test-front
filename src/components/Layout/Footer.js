import React, {useRef} from 'react';
import './Footer.css'; // Import your CSS file (if needed)

const Footer = () => {
  const contactref = useRef(null);
  return (
    <footer className="footer" ref={contactref}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="list-unstyled contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Vadodara, Gujarat</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>Phone: (555) 555-5555</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>Email: contact@yourcompany.com</span>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-title">Social Media</h3>
            <ul className="list-unstyled social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="footer-title">Newsletter</h3>
            <p>
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
