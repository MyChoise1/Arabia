import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSection from '../../components/ServiceSection/ServiceSection';


const ServicePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection/> 
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ServicePage;
