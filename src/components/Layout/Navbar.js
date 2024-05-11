import React,{useRef} from 'react';
import { Navbar as BootstrapNavbar, Nav, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './Navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import photo from './logotcc.jpg';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const homeref = useRef(null);
  const servref = useRef(null);
  const aboutref = useRef(null);
  const contactref = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <BootstrapNavbar
      expand="lg"
      className={scrolled ? 'navbarscrolled' : 'navbar'}
      fixed="top"
    >
      <BootstrapNavbar.Brand href="#" className="logo">
      <Image
              src={photo}
              alt="Our Story Photo"
              fluid
              style={{ width: '2em', height: '2em' }}
            />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
         <Nav.Link> <Link to='#home' className='mla'>Home</Link></Nav.Link>
         <Nav.Link><Link to='#services' className='mla'>Services</Link></Nav.Link>
          
          
         <Nav.Link><Link to="#about" className='mla'>About</Link></Nav.Link>
         <Nav.Link><Link to="#partners" className='mla'>Partners</Link> </Nav.Link>
        </Nav>
        <div className="right-section">
        
        <a href="/contact" className='mla'><button className="appointment-btn">Book an Appointment</button></a>
      </div>
      </BootstrapNavbar.Collapse>
      
    </BootstrapNavbar>
  );
};

export default Navbar;
