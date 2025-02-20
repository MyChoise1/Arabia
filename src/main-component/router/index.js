import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import HomePage3 from '../HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import CartPage from '../CartPage/CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import AppointmentPage from '../AppointmentPage/AppointmentPage';
import TermPage from '../TermPage/TermPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import PricingPage from '../PricingPage/PricingPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import ContactPage from '../ContactPage/ContactPage';
import ShopPage from '../ShopPage';
import ProductSinglePage from '../ProductSinglePage';
const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='team-single/:id' element={<TeamSinglePage />} />
          <Route path='home2' element={<Homepage2 />} />
          <Route path='home3' element={<HomePage3 />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='service-s2' element={<ServicePageS2 />} />
          <Route path='service-single/:id' element={<ServiceSinglePage />} />
          <Route path='project' element={<ProjectPage />} />
          <Route path='project-single/:id' element={<ProjectSinglePage />} />
          <Route path='appointment' element={<AppointmentPage />} />
          <Route path='terms' element={<TermPage />} />
          <Route path='testimonial' element={<TestimonialPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='product-single/:id' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='blog-single/:id' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
