import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/arabia-logo.png'
import Services from '../../api/service';
import Projects from '../../api/project'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row ">
                        <div className="col col-lg-4 col-md-8 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="blog" width={200} />
                                </div>
                                <p>Indian global technology-based company engaged in
                                    manufacturing of nanotechnology lubricants to deliver best performance
                                    to various machines in terms of lubrication, fuel economy, and
                                    durability.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-8 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>Office No. 01, Chetna Heights, Saibaba Nagar, Kondhwa Khurd, Pune 411048.</li>
                                        <li><i className="fi flaticon-phone-call"></i>+91 81800 70870</li>
                                        <li><i className="fi flaticon-send"></i>arabia.petrochem@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2025 Arabia Petrochem . All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;