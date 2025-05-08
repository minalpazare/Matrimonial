import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className='main-div'>
      <div className='div-two'>
        <large className='head-one'>Forever<span className='found'>Found</span></large>
        <img src='/images/heart 1.jpg' className='heart-img' alt='heart-image' />
        <p className='about'>About Us</p>
      </div>

      <div className='div-three'>
        <h3>
            Welcome to Forever found-Where Soulmates Meet.
        </h3>
        <p>
            At Forever Found, we believe that true love isn't just found - it's destined. Our mission is to 
            help you discover your forever partner through a plateform built on trust, respect, and heartfelt
            connections.<br/>
            Founded with a vision to bring people together in meaningful and lasting relationships,
            Forever Found isn't just another matrimonial site, We go beyond algorithms - we underestand
            the emotions, values, and dreams that shape a perfect union.
        </p>
        <p>
          <h5>Why Forever Found</h5>
          <ul>
            <li>
              Genuine Matches: We prioritize quality over quantity. Every profile is carefully verified,
              so you are connecting with real people who are genuinely looking for a lifelong commitment.
            </li>
            <li>
              Safety First: Your privacy and safety are our top priorities. We offer secure communication
              channels and profile moderation to ensure a respectful, secure environment.
            </li>
            <li>
              Community-Oriented: We are more than a service - we are a community. We celebrate love stories,
              success journeys, and create opportunities for offline meet-ups and cultural connections. 
            </li>
            <li>
              Inclusive & Diverse: Love knows no boundaries. We welcome people from all walks of life, religions,
              communities, and religions. Everyone deseerves a faire chance at love.
            </li>
          </ul>          
        </p>
        <h3>Our Vision</h3>
        <p>
          To be India's most trusted matrimonial plateform where meaningful relationships are built on shared
          values, mutual respect, and lasting love.
        </p>

        <h3>Our Promise</h3>
        <p>
          We promise to walk with you on your journey - with empathy, innovation, and an unwavering commitment
          to helping you find not just a match, but your forever.
        </p>
      </div>
      <div className='footer'>
        <p className='footer-text'>Forever<span className='found'>Found</span> - 2025</p>
      </div>
    </div> 
       
  )
}

export default Aboutus;
