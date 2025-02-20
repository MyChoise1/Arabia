import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle MainTitle={'Latest News & Blog'} />
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.map((blog, bl) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="wpo-blog-content">
                                        <a className="date" href="blog-single.html">{blog.create_at}</a>
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h2>
                                        <ul>
                                            <li>{blog.author}</li>
                                            <li><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.comment} Comments</Link></li>
                                            <li>{blog.share} Share</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;