import React from 'react';

import './display.css';

import detail1 from '../images/detail/detail1.jpg'
import detail2 from '../images/detail/detail2.jpg'
import detail3 from '../images/detail/detail3.jpg'
import detail4 from '../images/detail/detail4.jpg'
import detail5 from '../images/detail/detail5.jpg'
import detail6 from '../images/detail/detail6.jpg'

const Newdisplay = () => {
    return (
        <div className="container">
            <div className="image-row">
                <div className="image">
                    <img src={detail1} alt="1" />
                </div>
                <div className='line_row'></div>
                <div className="image">
                    <img src={detail2} alt="2" />
                </div>
            </div>
            <div className='line_col'></div>
            <div className="image-row">
                <div className="image">
                    <img src={detail3} alt="3" />
                </div>
                <div className='line_row'></div>
                <div className="image">
                    <img src={detail4} alt="4" />
                </div>
            </div>
            <div className='line_col'></div>
            <div className="image-row">
                <div className="image">
                    <img src={detail5} alt="5" />
                </div>
                <div className='line_row'></div>
                <div className="image">
                    <img src={detail6} alt="6" />
                </div>
            </div>
        </div>
    );
};

export default Newdisplay;
