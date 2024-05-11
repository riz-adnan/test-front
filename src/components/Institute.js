import React from 'react';
import './Institute.css'; // Import CSS for styling

const Institute = () => {
  // List of company logos
  const logos = [
    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/1200px-IIT_Kharagpur_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/1200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Indian_Institute_of_Management_Sambalpur_Logo.svg/640px-Indian_Institute_of_Management_Sambalpur_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/b/bf/Tata_Institute_of_Social_Sciences_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/en/6/64/Indian_Institute_of_Management_Nagpur_Logo.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/6/64/IIM_Jammu_Logo.png/180px-IIM_Jammu_Logo.png',
    'https://upload.wikimedia.org/wikipedia/en/e/ec/Indian_Institute_of_Management_Udaipur_Logo.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/4/48/IIM_Kozhikode_Logo.svg/1200px-IIM_Kozhikode_Logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/8/84/Institute_of_Management_Technology%2C_Ghaziabad_logo.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/1200px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png'
  ];

  return (
    <div className="container carousel-container">
      <h1 className='hero-title'>From prestigious institutes like</h1>
      <div className="carousel">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className='imgclass' />
        ))}
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className='imgclass' />
        ))}
      </div>
    </div>
  );
};

export default Institute;
