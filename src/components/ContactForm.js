import React, { useState } from 'react';
import './ContactForm.css';
import { Container, Form, Button } from 'react-bootstrap';

const generateRandomNumber = () => {
  return Math.floor(10000000 + Math.random() * 90000000); // Generates random 8-digit number
};

const ContactForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [pointOfContact, setPointOfContact] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(generateRandomNumber());

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      companyName,
      companyAddress,
      pointOfContact,
      phoneNumber
    };

    try {
      console.log('Submitting form data:', formData)
      const response = await fetch('https://test-backend-ab5q.onrender.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        // Optionally, you can reset the form fields after successful submission
        setCompanyName('');
        setCompanyAddress('');
        setPointOfContact('');
        setPhoneNumber(generateRandomNumber());
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container className='containeres'>
      <h2>Call us on +91 {phoneNumber} or book a call with us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="companyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="companyAddress">
          <Form.Label>Company Address</Form.Label>
          <Form.Control
            type="text"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="pointOfContact">
          <Form.Label>Point of Contact</Form.Label>
          <Form.Control
            type="text"
            value={pointOfContact}
            onChange={(e) => setPointOfContact(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
