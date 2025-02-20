import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import { Link } from 'react-router-dom'
import Benefits from './benefits'
import ServiceSidebar from './sidebar'
import Footer from '../../components/footer/Footer.js'

const ServiceSinglePage = (props) => {
    const { id } = useParams()

    const serviceDetails = Services.find(item => item.Id === id)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={serviceDetails.sTitle} pagesub={'Service'} />
            <div className="wpo-project-details-area wpo-service-details section-padding">
                <div className="container">
                    <div className="row">
                        <ServiceSidebar />
                        <div className="col-lg-8 order-lg-2 order-md-1 order-1">
                            <div className="wpo-minimals-wrap">
                                <div className="minimals-img">
                                    <img src={serviceDetails.sImg} alt="" />
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h2>{`${serviceDetails.sTitle} Cleaning `}</h2>
                                <p>{serviceDetails.description}</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.ssImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.ssImg2} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                                <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour,sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.</p>
                            </div>
                            <div className="wpo-faq-section">
                                <h4>Frequently Ask Questions</h4>
                                <Benefits />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
