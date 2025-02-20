import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Contactpage from '../../components/Contactpage/Contactpage';


const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Contactpage/> 
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ContactPage;

