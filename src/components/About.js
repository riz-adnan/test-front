import React from 'react';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-title">About Career Company India</h2>
        <Row>
          <Col md={6}>
            <div className="about-left">
              <h3>Experienced Professionals</h3>
              <p>Our team comprises seasoned career development experts and talent acquisition specialists with 10+ years of experience in impactful roles at national institutions and leading corporations.</p>
              <h3>Recognized Excellence</h3>
              <p>Acknowledged by Startup India in the esteemed "Social Impact Sector" and backed by funding from the IIM Nagpur Foundation for Entrepreneurship (InFED) through the PM's prestigious SISFS initiative.</p>
              <h3>Placement Leadership</h3>
              <p>Led by a founder who spearheaded placement efforts at 2 prestigious IIMs and placed 1200+ students, delivering top-tier talent to renowned companies like McKinsey Digital, Accenture, TCS, and more, across various roles from Management Trainees to Vice Presidents.</p>
              <h3>Nationwide Presence</h3>
              <p>Collaborating with top institutions across the country, we offer comprehensive career development and placement services.</p>
              <h3>Tailored Solutions</h3>
              <p>From talent sourcing to campus specialization, we provide customized services to ensure the recruitment of the best talent, ready for immediate deployment.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="about-right">
              <Image
                src="https://i.imgur.com/SJo0lZj.jpeg"
                alt="Founder's Photo"
                fluid
                className="founder-photo"
              />
              <h3>Founder's Journey</h3>
              <div className="timeline">
                <div className="timeline-point">
                  <Badge variant="primary">.</Badge>
                  <p>April 2023: Started The Career Company India</p>
                </div>
                <div className="timeline-point">
                  <Badge variant="primary">.</Badge>
                  <p>2020-2023: Career Development IIM Udaipur. Delivered 433% hike to E-commerce. Set up Placements for PGPX.</p>
                </div>
                <div className="timeline-point">
                  <Badge variant="primary">.</Badge>
                  <p>2018-2020: Career Development IIM Nagpur. Founding Team. Placed First 5 Batches.</p>
                </div>
                <div className="timeline-point">
                  <Badge variant="primary">.</Badge>
                  <p>2017: Training and Placement, ITM Vocational University</p>
                </div>
                <div className="timeline-point">
                  <Badge variant="primary">.</Badge>
                  <p>2015-2017: Recruiter Capital One, Collabera. Placed 20+ consulatants in Capital One and BOA.</p>
                </div>
                <div className="timeline-point">
                  <Badge variant="primary">.</Badge>
                  <p>Alumni IIM Calcutta (EPGM) </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
