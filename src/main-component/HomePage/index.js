import React, { Fragment } from 'react';
import Appointment from '../../components/Appointment/Appointment';
// import BlogSection from '../../components/BlogSection/BlogSection';
// import Features from '../../components/Features/Features';
import Footer from '../../components/footer/Footer';
// import FunFact from '../../components/FunFact/FunFact';
// import Hero from '../../components/hero/Hero';
import Navbar from '../../components/Navbar/Navbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
// import ServiceSection from '../../components/ServiceSection/ServiceSection';
// import TeamSection from '../../components/TeamSection/TeamSection';
// import Testimonial from '../../components/Testimonial/Testimonial';
// import WorkSection from '../../components/WorkSection/WorkSection';
import Logo from '../../images/logo.png'
import Newdisplay from '../../components/newdisplay';



const HomePage = () => {

    return (
        <Fragment>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={Logo} />
            {/* <Hero /> */}
            {/* <Features /> */}
            {/* <WorkSection /> */}
            {/* <ServiceSection /> */}
            {/* <FunFact /> */}
            <ProjectSection />
            <Newdisplay />
            {/* <TeamSection /> */}
            <Appointment />
            {/* <Testimonial /> */}
            {/* <BlogSection /> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;