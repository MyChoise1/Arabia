import React from 'react'
import car from './car.jpg'
import preview from './preview.png'
import prevProduct from './prev-product.png'
import './AboutUs.css'

const AboutDetails = () => {
    return (
        <div className="about-container" style={{marginTop: '90px', marginBottom: '100px'}}>
            <div className="car-image-wrapper">
                <img className="car-img" src={car} alt="car" />
            </div>
            <div className="new-text-section">
                <h2>ARABIA PETROCHIEM</h2>
                <img src={preview} alt="preview" />
                <img src={prevProduct} alt="prevProduct" />
            </div>
        </div>
    )
}

export default AboutDetails;
