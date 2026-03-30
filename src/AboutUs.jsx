import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-container">
        <h1>About Paradise Nursery</h1>
        <p>
          Welcome to <strong>Paradise Nursery</strong> — your one-stop destination for beautiful,
          healthy houseplants. We are passionate about bringing nature indoors and helping
          plant lovers find the perfect green companions for their homes and offices.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make plant shopping easy, enjoyable, and accessible for everyone.
          We carefully curate a wide selection of houseplants, from easy-care succulents to
          lush tropical varieties, so there is something for every plant enthusiast.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide variety of high-quality plants</li>
          <li>Organized by category for easy browsing</li>
          <li>Competitive pricing</li>
          <li>Easy-to-use shopping cart</li>
          <li>Passionate plant experts behind every selection</li>
        </ul>
        <h2>Contact Us</h2>
        <p>Email: support@paradisenursery.com</p>
        <p>Phone: +1 (800) 123-4567</p>
        <p>Address: 123 Garden Lane, Plant City, FL 33563</p>
      </div>
    </div>
  );
}

export default AboutUs;
