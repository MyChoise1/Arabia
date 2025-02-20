import React from "react";
import "./AboutUs.css";
import image from '../../images/about.png'

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="image-section">
        <img src={image} alt="Lubrication Machinery" />
      </div>
      <div className="text-section">
        <h2>About us:</h2>
        <p>
          We are an Indian global technology-based company engaged in
          manufacturing of nanotechnology lubricants to deliver best performance
          to various machines in terms of lubrication, fuel economy, and
          durability.
        </p>
        <p>
          <strong>Plant and Laboratory:</strong> Cutting-edge manufacturing
          facilities and a modern in-house quality testing lab. The plants are
          equipped with fully automatic filling and packing machinery for small
          packs with filling, capping, printing, induction sealing, and
          strapping, all on a single line.
        </p>
        <p>
          Arabia Petrochem India Private Limited has state-of-the-art
          manufacturing plants as its crown jewels with a total manufacturing
          capacity of around 3000 KL per annum. Its in-house quality & testing
          laboratory continues to provide an unparalleled competitive edge owing
          to its technological superiority and world-class capabilities.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
