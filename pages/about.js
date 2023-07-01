import Layout from "../components/Layout";
import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

export default function AboutUs() {
  return (
    <Fragment>
      <Layout title="About Us - Landing">
        <div id="about">
          <div className="d1">
            <span className="sp1">
              <h1>TAHARISH SYNERGY SERVICES LIMITED</h1>
              <p>VEHICLES SERVICES, REPAIRS, AND MAINTENANCE</p>
            </span>
            <span className="sp2">
              <p>
                {" "}
                Tahaish Synergy Services Limited is a leading provider of
                vehicle services, repairs and maintenace in Nigeria. Established
                in 2015, we have built a reputation for delivering exceptional
                automotive solutions to our customers.
              </p>
            </span>
          </div>
          <div className="d2">
            <Carousel controls={false}>
              <Carousel.Item interval={2500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  src="/images/rangerover.jpg"
                  alt="taharish"
                  title="taharish"
                  style={{
                    width: "100%",
                    height: "60vh!important",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  src="/images/rangerover2.jpg"
                  alt="taharish"
                  title="taharish"
                  style={{
                    width: "100%",
                    height: "60vh!important",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <img
                  className="blur-up lazyload bg-img land-image-slider"
                  src="/images/car2.jpg"
                  alt="taharish"
                  title="taharish"
                  style={{
                    width: "100%",
                    height: "60vh!important",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="d3">
            <span className="sp1">
              <h1>Our&nbsp;Experience</h1>
            </span>
            <span className="sp2">
              <p>
                We have been serving customers for several years and has a solid
                experience in providing a wide range of automotive repair and
                maintenance services with a focus on customer satisfaction and
                using technology.
              </p>
            </span>
          </div>

          <div className="d4">
            <h1>Our&nbsp;Services</h1>
            <ul>
              <li>Car sales</li>
              <li>Vehicle Inspection</li>
              <li>Mechanical Repairs</li>
              <li>Electrical Repairs</li>
              <li>Wheel Services</li>
              <li>Exhaust Systems</li>
              <li>Brake Systems</li>
              <li>Engine Overhaul and Replacement</li>
              <li>Transmission Overhauling and Replacement</li>
              <li>Transmission Overhaul and Repacement</li>
              <li>Heat, Ventilation, Air condition (H-VAC) Services</li>
            </ul>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
