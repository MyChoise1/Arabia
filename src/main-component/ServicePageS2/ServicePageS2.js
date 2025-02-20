import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';


const ServicePageS2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection2 sClass={'pt-120'}/> 
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ServicePageS2;
