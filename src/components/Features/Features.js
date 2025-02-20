import React from 'react';
import fI1 from '../../images/icon/calendar.svg'
import fI2 from '../../images/icon/express-delivery.svg'
import fI3 from '../../images/icon/prototype.svg'
import cmn from '../../images/icon/6.png'

const Features = (props) => {

    return (
        <section className={`wpo-features-section ${props.fClass}`}>
            <div className="container">
                <div className="wpo-features-wrap">
                    <div className="row align-items-center justify-content-between">
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src={fI1} alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Book Online</h4>
                                </div>
                            </div>
                            <div className="angle"><img src={cmn} alt=""/></div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="wpo-features-item active">
                                <div className="wpo-features-icon">
                                    <img src={fI2} alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4>We Arrive</h4>
                                </div>
                            </div>
                            <div className="angle"><img src={cmn} alt=""/></div>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <img src={fI3} alt=""/>
                                </div>
                                <div className="wpo-features-text">
                                    <h4>Solve Problem</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Features;
