import React, { useState, useEffect , useRef} from 'react';
import './Carousel.css';

const Carousel = () => {
    const homeref = useRef(null);
    
  const slidesData = [
    {
        
      backgroundImage:"https://img.freepik.com/free-photo/hr-reading-applicants-resume-job-interview-top-closeup-view_1163-4672.jpg?t=st=1715398393~exp=1715401993~hmac=bd04a7d32e4f6fead067fa3cb63fa35fda19e1907cbebc2c915a758e8feb5117&w=740",
      title: 'Hire with Us',
      description: 'We provide most efficient and reliable service.'
    },
    {
      backgroundImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: 'Discover Our Services',
      description: 'We are a fast and dynamic team of professionals.'
    }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % slidesData.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (

    <>
    
    <section id="home" className="carousel-containers">
        
      {slidesData.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`} style={{backgroundImage: `url(${slide.backgroundImage})`}}>
          <div className="content">
            <h2 className={index === currentSlide ? 'fade-in' : ''}>{slide.title}</h2>
            <p className={index === currentSlide ? 'fade-in' : ''}>{slide.description}</p>
            
            <a href='/contact' className={`discover-btn ${index === currentSlide ? 'fade-in' : ''}`} style={{"color":"black", "textDecoration":"underline"} }>Discover More =></a>
          </div>
        </div>
      ))}
    </section>
    </>
  );
};

export default Carousel;
