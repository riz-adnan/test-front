import React from 'react'
import Navbar from './Layout/Navbar';
import Carousel from './Carousel';
import CardsSection from './CardsSection';
import QuoteSection from './QuoteSection';
import Parallax from './Parallax';
import HeroSection from './HeroSection';
import Footer from './Layout/Footer';
import Association from './Association';
import Institute from './Institute';
import OurStory from './OurStory';
import Recognised from './Recognised';
import About from './About';
const Home = () => {
  return (
    <div>
        <Navbar />
      <Carousel />
      <CardsSection />
      <OurStory />
      <Recognised />
      <About />
      <QuoteSection />
      
      <Parallax />
      <HeroSection />
      <Association/>
      <Institute/>
      <Footer />
    </div>
  )
}

export default Home