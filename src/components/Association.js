import React from 'react';
import './Association.css'; // Import CSS for styling

const Association = () => {
  // List of company logos
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1280px-Genpact_logo.svg.png',
    'https://1000logos.net/wp-content/uploads/2023/11/Amul-Logo.png',
    'https://i.pinimg.com/originals/d3/ca/44/d3ca44ad81a24fcbe71b4e2d78e8d41b.png',
    'https://static.vecteezy.com/system/resources/previews/020/190/476/original/infosys-logo-infosys-icon-free-free-vector.jpg',
    'https://media.licdn.com/dms/image/C4E0BAQHVETkm9Gt3Ew/company-logo_100_100/0/1662102002914?e=2147483647&v=beta&t=fCGAiuIh95spgyRQ-6z8axm4OHCfqIbTKmupOzljTic',
    'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2RlY2lzaW9uLXBvaW50LmpwZw.png',
    'https://media.licdn.com/dms/image/C4D0BAQFj6PAEr9f-mA/company-logo_200_200/0/1636350382907/dash_dynamic_llp_logo?e=2147483647&v=beta&t=N8bjshHXO1Fy9k6qplgf-Ju_mANBqV6T_oeS-sV72HI',
    'https://technopark.org/storage/company/16715967732283555357_Nissan%20Logo.jpg',
    'https://www.insightplatforms.com/wp-content/uploads/2022/05/MavenMagnet-Logo-Square-Insight-Platforms.png',
    'https://storage.googleapis.com/atlas-cms-assets/ather-logo-1.png',
    'https://www.sec.gov/Archives/edgar/data/1262976/000126297618000075/a991baspressreleaseimage1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfM1VSMdurMfZXBwKwKl-slkt-aYwGMzhq8HMM8zJz1A&s',
    'https://media.licdn.com/dms/image/D4D0BAQENyJpH0mcryw/company-logo_200_200/0/1712574699459/infinite_analytics_logo?e=2147483647&v=beta&t=PhoG1NkJNUY1j0ibZIKSrMFW6MrKCnMkeCpmIWrCsW8',
    ''

    // Add more logos as needed
  ];

  return (
    <section id="partners" className="container carousel-container">
      <h1 className='hero-title'>We are providing talent to</h1>
      <div className="carousel">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className='imgclass' />
        ))}
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className='imgclass' />
        ))}
      </div>
    </section>
  );
};

export default Association;
