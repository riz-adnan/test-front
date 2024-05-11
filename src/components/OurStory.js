import React,{useRef} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './OurStory.css'; // Import CSS for styling
import photo from './ourstory.png'
const OurStory = () => {
    const aboutref = useRef(null);
  return (
    <section className="our-story-section" ref={aboutref}>
      <Container>
        <h2 className="section-title">Our Story</h2>
        <Row className="align-items-center">
          <Col md={6} className="content-column">
            <p className="story-content">
            Recognized by Startup India in the Social Impact Sector, we are endorsed by the Ministry of Commerce and Industry and funded by the IIM Nagpur Foundation for Entrepreneurship (InFED) through the esteemed Startup India Seed Fund Scheme. Our core mission is to connect talented individuals with visionary leaders, specializing in aligning candidates within the 0-7 years experience bracket, which we term as our “Future Leaders Category”.
            </p>
          </Col>
          <Col md={6} className="photo-column">
            <Image
              src={photo}
              alt="Our Story Photo"
              fluid
            />
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default OurStory;
