import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Recognised.css'; // Import CSS for styling

const Recognised = () => {
  return (
    <section className="recognised-section">
      <Container>
        <h2 className="section-title">Recognised By</h2>
        <Row className="justify-content-center">
          <Col md={4} className="logo-column">
            <Image src="https://uxdt.nic.in/wp-content/uploads/2020/06/Startup-India_Preview.png?x31668" className="logo" />
          </Col>
          <Col md={4} className="logo-column">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm55vdlavEi5rQIHjudjHjOKPPSacNCogpYTn1E4EP0Q&s" className="logo" />
          </Col>
          <Col md={4} className="logo-column">
            <Image src="https://pbs.twimg.com/profile_images/1285186374673588225/dL5shAXd_400x400.jpg" className="logo" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Recognised;
