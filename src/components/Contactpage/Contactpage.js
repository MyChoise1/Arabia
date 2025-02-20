import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>Regd. Office: Office No. 01, Chetna Heights, Saibaba Nagar, Kondhwa Khurd, Pune 411048. F618/1 Kondhwa Bebvewadi Road Bebvewadi Pune
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>arabia.petrochem@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+91 81800 70870</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe
                        title="arabia-petrochem-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.791992176247!2d73.8816707155727!3d18.4768339874395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c157f8cba25f%3A0x93bcff64a43f9000!2sChetna%20Heights%2C%20Saibaba%20Nagar%2C%20Kondhwa%20Khurd%2C%20Pune%20411048%2C%20India!5e0!3m2!1sen!2sus!4v1615376263872!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>


            </section>
        </section>
    )

}

export default Contactpage;
