import Layout from "../components/Layout";
import Link from "next/link";
import React, { Fragment, useRef } from "react";
import { Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet";
import SectionFour from "../components/user/sectionfour";
import Portfolio from "../components/user/portfolio";
import OurTeam from "../components/user/ourteam";
import GetQuote from "../components/user/getquote";

export default function AboutUs() {
  const container = useRef(null);

  const scroll = (scrollOffset) => {
    container.current.scrollLeft += scrollOffset;
  };
  return (
    <Fragment>
      <Helmet>
        <style>
          {`
          
          .navbar-light{
            background: #fff !important;
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
          .motor_type{
            background: #F8FFF9;
          }

        `}
        </style>
      </Helmet>

      <Layout title="About Us" whatsapp="whatsapp">
        <div id="index">
          <div className="d1">
            <h1 className="poppins">ABOUT US</h1>
            <p className="p1 poppins">
              Umatched Excellence in Car Sales & Repairs “Discover Luxury,
              Eperience Performance, Uncompromising Quality”
            </p>

            <div className="d1">
              <Link href="/automobile">
                <span style={{ cursor: "pointer" }}>
                  <p className="poppins">Get A Quote Today</p>
                </span>
              </Link>
            </div>
          </div>
          <div className="d2">
            {/* <Carousel controls={false}>
              <Carousel.Item interval={2500}>
                <img src="/images/range.png" />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img src="/images/cari.png" />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img src="/images/range2.png" />
              </Carousel.Item>
              <Carousel.Item interval={2500}> */}
            <img src="/images/about_section1.png" alt="About us" />
            {/* </Carousel.Item>
            </Carousel> */}
          </div>
        </div>
        <div className="motor_type">
          <div className="previos" onClick={() => scroll(-20)}>
            <img src="/images/prev.png" alt="prev" />
          </div>
          <div className="next" onClick={() => scroll(20)}>
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

        <div className="about_section">
          <div>
            <h2 className="poppins about_title">ABOUT US</h2>
            <p className="poppins about_body">
              Taharish Automobile Services Limited is more than just a
              fullservice auto repair company – it is a team of highly qualified
              experts dedicated to providing exceptional automotive repair and
              maintenance services for your car(s).
            </p>
            <div className="min_body">
              <p className="poppins about_body">
                eptional automotive repair and maintenance services for your
                car(s). Established in 2015, Taharish Automobile Services
                Limited is committed to ensuring the highest level of customer
                satisfaction through top-notch services and reliable solutions.
                Trust us to keep your car running smoothly and safely on the
                road.
              </p>
            </div>
          </div>
          <div className="about_image_container">
            <img src="/images/aboutcolorimage.png" alt="About " />
            <img
              src="/images/aboutimage.png"
              alt="About"
              className="aboslute_image"
            />
          </div>
        </div>

        <div className="about_section reverse_flex">
          <div>
            <h2 className="poppins about_title">OUR MISSION</h2>
            <p className="poppins about_body">
              To provide reliable and efficient repairs through teamwork, mutual
              respect, honesty, and hard work, while adhering to high ethical
              standards.
            </p>
            <div className="min_body">
              <p className="poppins about_body">
                We strive to do the right thing at the right time and place,
                aiming for customer satisfaction by using innovative technology
                and building long-term relationships.
              </p>
            </div>
          </div>
          <div className="about_image_container">
            <img src="/images/missioncolorimage.png" alt="mission " />
            <img
              src="/images/missionimage.png"
              alt="mission"
              className="aboslute_image"
            />
          </div>
        </div>

        <div className="about_section">
          <div>
            <h2 className="poppins about_title">OUR VISION</h2>
            <p className="poppins about_body">
              Taharish Automobile Services Limited strives to become the most
              trusted and preferred automobile service provider through
              continuous improvement, teamwork, and innovation. We aim to
              achieve our vision by offering affordable high-quality services.
            </p>
            {/* <div className="min_body">
              <p className="poppins about_body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div> */}
          </div>
          <div className="about_image_container">
            <img src="/images/visioncolorimage.png" alt="vision " />
            <img
              src="/images/visionimage.png"
              alt="vision"
              className="aboslute_image"
            />
          </div>
        </div>

        <div className="about_section reverse_flex">
          <div>
            <h2 className="poppins about_title">OUR CORE VALUES</h2>
            <p className="poppins about_body">
              We are committed to upholding the highest standards of ethics,
              integrity, and transparency, and are dedicated to sustainability
              and environmentally friendly practices.
            </p>
            <div className="min_body">
              <p className="poppins about_body">
                Our hallmark as a company is to strive for client satisfaction
                and provide prompt, excellent services, while also prioritizing
                innovation and excellence. <br /> We enforce good quality public
                relations through disciplined and professional presentation, and
                emphasize the importance of valuing all employees, clients, and
                shareholders equally. Additionally, we prioritize teamwork and
                punctuality.
              </p>
            </div>
          </div>

          <div className="about_image_container">
            <img src="/images/valuecolorimage.png" alt="value " />
            <img
              src="/images/valueimage.png"
              alt="value"
              className="aboslute_image"
            />
          </div>
        </div>

        <div className="about_section custom_mb">
          <div>
            <h2 className="poppins about_title">OUR GUARANTEE</h2>
            <p className="poppins about_body">
              We promise that if you're not happy with the repairs done on your
              vehicle, we'll redo the work to ensure your satisfaction.
            </p>
            {/* <div className="min_body">
              <p className="poppins about_body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div> */}
          </div>
          <div className="about_image_container">
            <img src="/images/guaranteecolorimage.png" alt="guarantee " />
            <img
              src="/images/guaranteeimage.png"
              alt="guarantee"
              className="aboslute_image"
            />
          </div>
        </div>

        <SectionFour />
        <Portfolio />
        <OurTeam />
        <GetQuote />
      </Layout>
    </Fragment>
  );
}
