import Layout from "../components/Layout";
import Link from "next/link";
import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <Fragment>
      <Layout title="Landing">
        <div id="index">
          <div className="d1">
            <h1>
              <b style={{ color: "green" }}>Taharish Automobile</b>: Unmatched
              Excellence in Car Sales & Repairs
            </h1>
            <p className="p1">
              &quot;Discover Luxury. Experience Performance. Uncompromising
              Quality.&quot;
            </p>

            <div className="d1">
              <Link href="/automobile">
                <span style={{ cursor: "pointer" }}>
                  <p>
                    <em>Get Your Dream Car</em>
                  </p>
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
      </Layout>
    </Fragment>
  );
}
