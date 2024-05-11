import React,{useRef} from 'react';
 // Custom CSS for flip effect
// Import Bootstrap CSS
import { Card } from 'react-bootstrap'; // Importing Card component from Bootstrap
import { Link } from 'react-router-dom';

const CardsSection = () => {
  const servref=useRef(null);
  return (
    
    <section id="services" className="container" >
      <h1 className='edit'>Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card-container">
            <div className="card-front">
              <Card>
              <Card.Title>Campus Placement</Card.Title>
                <Card.Img variant="top" src="https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                  
                </Card.Body>
              </Card>
              <div className="card-content">
                <h5>Campus Placement</h5>
                <p>
                For companies, we help them with them with relevant profiles from the top campuses based on their fitment and fill their roles with 7 days turn around time for no cost to company. 
                </p>
                <Link to ='/contact'><button className="btn btn-dark">Discover More</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-container">
            <div className="card-front">
              <Card>
              <Card.Title>Recruitement and Placement</Card.Title>
                <Card.Img variant="top" src="https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                  
                </Card.Body>
              </Card>
              <div className="card-content">
                <h5>Recruitement and Placement</h5>
                <p>
                Sourcing and identifying qualified candidates for open positions. Conducting interviews, assessments, and screenings to evaluate candidate suitability.
                </p>
                <Link to ='/contact'><button className="btn btn-dark">Discover More</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-container">
            <div className="card-front">
              <Card>
              <Card.Title>1% Club</Card.Title>
                <Card.Img variant="top" src="https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                  
                </Card.Body>
              </Card>
              <div className="card-content">
                <h5>1% Club</h5>
                <p>
                Companies love candidates from premier Institutes like IITs, IIITs, IIMs and Ivey league but they love them even more when they have 2-3 years post MBA experience. In our 1% Club we have alumni of all 20 IIMs and 10+ IITs. 
                </p>
                <Link to ='/contact'><button className="btn btn-dark">Discover More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
