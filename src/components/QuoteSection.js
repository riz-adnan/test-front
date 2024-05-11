import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './QuoteSection.css'; // Import custom CSS for styling

const QuoteSection = () => {
  return (
    <div className="quote-section">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="quote-box">
              <div className="quotation-logo">
                <img src="https://static.vecteezy.com/system/resources/previews/009/458/854/non_2x/quote-icon-logo-design-template-vector.jpg" alt="quotation logo" />
              </div>
              <div className="quote-text">
                <p>
                “We are a team of professional match makers that connect great talent with visionary leadership."
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QuoteSection;
