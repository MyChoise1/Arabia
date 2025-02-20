import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.png'
import About from '../../components/about/about';
import AboutDetails from '../../components/about/aboutDetails';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <About />
            <AboutDetails />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;
