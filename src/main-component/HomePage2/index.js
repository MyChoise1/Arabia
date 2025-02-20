import React, { Fragment } from 'react';
import Appointment from '../../components/Appointment/Appointment';
import BlogSection from '../../components/BlogSection/BlogSection';
import Features from '../../components/Features/Features';
import Footer from '../../components/footer/Footer';
import FunFact2 from '../../components/FunFact2/FunFact2';
import Hero2 from '../../components/hero2/hero2';
import Navbar from '../../components/Navbar/Navbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import Logo from '../../images/logo.png'



const HomePage2 = () => {

    return (
        <Fragment>
            <Navbar topbarBlock={'wpo-header-style-2'} Logo={Logo} />
            <Hero2 />
            <Features fClass={'wpo-features-section-s2'}/>
            <ServiceSection2 />
            <FunFact2 />
            <ProjectSection />
            <TeamSection />
            <Appointment />
            <Testimonial />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage2;