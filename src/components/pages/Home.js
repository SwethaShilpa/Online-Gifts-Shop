import React from 'react';
import sliderImg from '../../assets/images/slider-img.png';
import savingImg from '../../assets/images/saving-img.png';
import line from '../../assets/images/line.png';
import gifts from '../../assets/images/gifts.png';
import Shop from './Shop';
import AboutUs from './About';
import ContactUs from './Contactus';
import Testimonial from './Testimonial';

export default function Home(props) {

    return (
        <>
            <section class="hero_area slider_section">
            <div class="slider_container">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-7">
                            <div class="detail-box">
                            <h1>
                                Welcome To Our <br/>
                                Gift Shop
                            </h1>
                            <p>
                                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                            </p>
                            <a href="/" value="">
                                Contact Us
                            </a>
                            </div>
                        </div>
                        <div class="col-md-5 ">
                            <div class="img-box">
                            <img src={sliderImg} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item ">
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-7">
                            <div class="detail-box">
                            <h1>
                                Welcome To Our <br/>
                                Gift Shop
                            </h1>
                            <p>
                                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                            </p>
                            <a href="/">
                                Contact Us
                            </a>
                            </div>
                        </div>
                        <div class="col-md-5 ">
                            <div class="img-box">
                            <img src={sliderImg} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item ">
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-7">
                            <div class="detail-box">
                            <h1>
                                Welcome To Our <br/>
                                Gift Shop
                            </h1>
                            <p>
                                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                            </p>
                            <a href="/">
                                Contact Us
                            </a>
                            </div>
                        </div>
                        <div class="col-md-5 ">
                            <div class="img-box">
                            <img src={sliderImg} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="carousel_btn-box">
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    <span class="sr-only">Previous</span>
                    </a>
                    <img src={line} alt="" />
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
            </section>
            <Shop/>
            <section class="saving_section ">
                <div class="box">
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-lg-6">
                        <div class="img-box">
                        <img src={savingImg} alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="detail-box">
                        <div class="heading_container">
                            <h2>
                            Best Savings on <br/>
                            new arrivals
                            </h2>
                        </div>
                        <p>
                            Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
                        </p>
                        <div class="btn-box">
                            <a href="/" class="btn1">
                            Buy Now
                            </a>
                            <a href="/" class="btn2">
                            See More
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <AboutUs/>
            <section class="gift_section layout_padding-bottom">
                <div class="box ">
                <div class="container-fluid">
                    <div class="row">
                    <div class="col-md-5">
                        <div class="img_container">
                        <div class="img-box">
                            <img src={gifts} alt=""/>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="detail-box">
                        <div class="heading_container">
                            <h2>
                            Gifts for your <br/>
                            loved ones
                            </h2>
                        </div>
                        <p>
                            Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                        </p>
                        <div class="btn-box">
                            <a href="/" class="btn1">
                            Buy Now
                            </a>
                            <a href="/" class="btn2">
                            See More
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <ContactUs/>
            <Testimonial/>
        </>
    )
}
