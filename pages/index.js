import Layout from "../components/Layout";
import Link from "next/link";
import React, { Fragment, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet";
import WhatWeDo from "../components/user/whatwedo";
import WhyChooseUs from "../components/user/whychooseus";
import SectionFour from "../components/user/sectionfour";
import Portfolio from "../components/user/portfolio";
import OurShop from "../components/user/ourshop";
import Testimonia from "../components/user/testimonia";
import OurTeam from "../components/user/ourteam";
import GetQuote from "../components/user/getquote";

export default function Home() {
  const container = useRef(null);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };
  return (
    <Fragment>
      <Helmet>
        <style>
          {`
            #__next {
              background: #D7F5DC !important;
            }
            .navbar-light{
              background: #D7F5DC !important;
            }
            .navbar-light .navbar-nav .nav-link{
              color: black !important;
            }
            .nav-link, .navbar {
              padding: 0.5rem 0rem;
              width: 90%;
              margin: auto;
            }
            #footer{
              margin-top: 0;
            }
            a{font-weight: bolder; font-size:25; text-decoration: none}

          `}
        </style>
      </Helmet>
      <Layout title="Landing" whatsapp="whatsapp">
        <div id="index">
          <div className="d1">
            <h1 className="poppins">Taharish Automobile</h1>
            <p className="p1 poppins">
              Umatched Excellence in Car Sales & Repairs “Discover Luxury,
              Eperience Performance, Uncompromising Quality”
            </p>

            <div className="d1">
              <Link href="/automobile">
                <span style={{ cursor: "pointer" }}>
                  <p className="poppins">Get Your Dream Car</p>
                </span>
              </Link>
            </div>
          </div>
          <div className="d2">
            <Carousel controls={false}>
              <Carousel.Item interval={2500}>
                <img src="/images/range.png" />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img src="/images/cari.png" />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img src="/images/range2.png" />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img src="/images/car2i.png" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="motor_type">
          <div className="previos show-1400" onClick={() => scroll(-20)}>
            <img src="/images/prev.png" alt="prev" />
          </div>
          <div className="next show-1400" onClick={() => scroll(20)}>
            <img src="/images/nxt.png" alt="nxt" />
          </div>
          <div className="partner" ref={container}>
            <div className="">
              <img className="" src="/images/Trello-logo.png" />
            </div>
            <div className="">
              <img className="" src="/images/partner1.png" />
            </div>
            <div className="">
              <img className="" src="/images/partner2.png" />
            </div>
            <div className="">
              <img className="" src="/images/partner3.png" />
            </div>
            <div className="">
              <img className="" src="/images/partner4.png" />
            </div>
            <div className="">
              <img className="" src="/images/partner5.png" />
            </div>
            <div className="">
              <img className="" src="/images/partner6.png" />
            </div>
            <div className="">
              <img className="" src="/images/partner7.png" />
            </div>
          </div>
        </div>

        <WhatWeDo />
        <WhyChooseUs />
        <SectionFour />
        <Portfolio />
        <OurShop />
        {/* <Testimonia /> */}
        <OurTeam />
        {/* <GetQuote /> */}
      </Layout>
    </Fragment>
  );
}
