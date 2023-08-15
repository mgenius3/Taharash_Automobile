import Link from "next/link";
import Layout from "../components/Layout";
// import Link from 'next/link';
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FetchApiClient from "../fetch_api_clients/api";
import { Helmet } from "react-helmet";

export default function Home() {
  let apiClient = new FetchApiClient("/user");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitPackageMessage = async () => {
    setIsLoading(true);
    let { response, error } = await apiClient.post("/contact_message", data);
    if (response) {
      setIsLoading(false);
      toast.success(response);
    } else {
      setIsLoading(false);
      toast.error(error);
    }
  };
  return (
    <Fragment>
      <Helmet>
        <style>
          {`
          @media only screen and (max-width: 767px) {
            #index {
              margin: 10px;
            }
            .d1{
              display: none;
            }
          }
          .container {
            margin-top: 50px;
          }
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
      <Layout title="Contact">
        <div id="page-content">
          {/* <div
            className="page section-header text-center"
            style={{ margin: "60px 0px" }}
          >
            <div className="page-title">
              <div className="wrapper">
                <h1 className="page-width">Contact Us</h1>
              </div>
            </div>
          </div>
          <div className="bredcrumbWrap">
            <div className="container breadcrumbs">
              <Link href="/" title="Back to the home page">
                Home
              </Link>
              <span aria-hidden="true">›</span>
              <span>Contact Us</span>
            </div>
          </div>{" "} */}
          <div className="container">
            <div className="row">
              <div className="col-12 mb-4">
                <h2 className="poppins login mb-4">
                  <b className="poppins">CONTACT US</b>
                </h2>

                <p className="poppins contact_body login mb-5">
                  {" "}
                  <span className="privacy">
                    Fill up the form our team will get back to you in 24hrs
                  </span>
                </p>
                <div className="formFeilds contact-form form-vertical">
                  <form className="contact-form">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label
                            className="black poppins"
                            htmlFor="CustomerEmail"
                          >
                            First Name{" "}
                          </label>
                          <input
                            type="text"
                            id="ContactFormName"
                            name="firstName"
                            placeholder="Name"
                            className="login_input"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label
                            className="black poppins"
                            htmlFor="CustomerEmail"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="ContactFormName"
                            name="lastName"
                            placeholder="Name"
                            className="login_input"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label
                            className="black poppins"
                            htmlFor="CustomerEmail"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="ContactFormEmail"
                            name="email"
                            placeholder="Your email address"
                            className="login_input"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label
                            className="black poppins"
                            htmlFor="CustomerEmail"
                          >
                            Phone Number
                          </label>
                          <input
                            required
                            type="tel"
                            id="ContactFormPhone"
                            name="telephone"
                            pattern="[0-9\-]*"
                            placeholder="Your phone number"
                            className="login_input"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label
                            className="black poppins"
                            htmlFor="CustomerEmail"
                          >
                            What Service Do You Need? *
                          </label>
                          <textarea
                            required=""
                            rows="10"
                            id="ContactFormMessage"
                            name="services"
                            placeholder="Your Message"
                            className="login_input"
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="form-group">
                          <label
                            className="black poppins"
                            htmlFor="CustomerEmail"
                          >
                            Message
                          </label>
                          <textarea
                            required=""
                            rows="10"
                            id="ContactFormMessage"
                            name="message"
                            placeholder="Your Message"
                            className="login_input"
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        {isLoading ? (
                          <input
                            type="submit"
                            className="btn act_btn mt-5"
                            value="loading ..."
                            disabled
                          />
                        ) : (
                          <input
                            type="submit"
                            className="btn act_btn mt-5"
                            value="Send Message"
                            onClick={submitPackageMessage}
                          />
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="open-hours">
                  <strong>Opening Hours</strong>
                  <br />
                  Mon - Sat : 9am - 11pm
                  <br />
                  Sunday: 11am - 5pm
                </div>
                <hr />
                <ul className="addressFooter">
                  <li>
                    <i className="icon anm anm-map-marker-al"></i>
                    <p>
                      Road 1907, Katampe District, Plot 14, Adjacent jabs Luxury
                      Homes, FCT, Abuja
                    </p>
                  </li>
                  <li className="phone">
                    <i className="icon anm anm-phone-s"></i>
                    <Link href="tel:234 8139337963">
                      <p style={{ cursor: "pointer" }}> 08139337963(head)</p>
                    </Link>
                    <Link href="tel:234 8136869671">
                      <p style={{ cursor: "pointer" }}> 08136869671(head)</p>
                    </Link>
                    <Link href="tel:234 8035379572">
                      <p style={{ cursor: "pointer" }}> 08035379572(branch)</p>
                    </Link>
                  </li>
                  <li className="email">
                    <i className="icon anm anm-envelope-l"></i>
                    <Link href="mailto: taharishautomobileservices@gmail.com">
                      <p style={{ cursor: "pointer" }}>
                        taharishautomobileservices@gmail.com
                      </p>
                    </Link>
                  </li>
                </ul>
                <hr />
              </div> */}
            </div>
          </div>
          {/* <div className="map-section map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.519720740185!2d7.451123000000007!3d9.107440200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0aa5d4258e9b%3A0x51f4be49b234fa61!2s1907%20Katampe%20Rd%2C%20Kado%20900108%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1687368391108!5m2!1sen!2sng"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
            <div className="container">
              <div className="row">
                <div className="map-section__overlay-wrapper">
                  <div className="map-section__overlay">
                    <h3 className="h4">Office Address</h3>
                    <div className="rte-setting">
                      <p>
                        <b>HEAD OFFICE: </b>
                        <em>
                          Road 1907, Katampe District, Plot 14, Adjacent jabs
                          Luxury Homes, FCT, Abuja
                        </em>
                      </p>
                      <p>
                        <b>BRANCH OFFICE: </b>
                        <em>
                          Plot 556, Katampe Road, Opposite Harmony Court Estate,
                          jahi 9000108, Abuja
                        </em>
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                    <p>
                      <a
                        href="https://goo.gl/maps/xghw4wzKXaTyRFGx6"
                        className="btn btn--secondary btn--small"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get directions
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Layout>
    </Fragment>
  );
}
