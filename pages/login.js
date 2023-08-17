import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
// import { useMutation } from 'react-query';
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import FetchApiClient from "../fetch_api_clients/api";
import { Helmet } from "react-helmet";

export default function Login() {
  let apiClient = new FetchApiClient("/user");

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { handleSubmit } = useForm();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitLoginDetails = async () => {
    setIsLoading(true);

    let { response, error } = await apiClient.post("/login", data);
    if (response) {
      localStorage.setItem("token", response);
      setIsLoading(false);
      router.push("/");
    } else {
      setIsLoading(false);
      toast.error(error);
    }
  };

  return (
    <Layout title="Signup">
      <Helmet>
        <style>
          {`
          @media only screen and (max-width: 1023px) {
            #index {
              margin: 10px;
            }
            .d1{
              display: none;
            }   
          }
          
          @media only screen and (min-width: 1024px) {
            .d1, d2{
              width: 50% !important;
            }  
            #index{
              flex-wrap: nowrap;
            } 
          }
          #index {
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
      <div id="page-content">
        {/* <img
          src="/images/tahicon.png"
          width={80}
          className="mx-4 my-2 text-center"
        />
        <div className="page section-header text-center">
          <div className="page-title">
            <div className="wrapper">
              <h1 className="mx-2">Login</h1>
            </div>
          </div>
        </div> */}

        <div id="index">
          <div className="d1">
            <img src="/images/about_section1.png" alt="About us" />
          </div>
          <div className="d2">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 main-col">
                  <div className="mb-4">
                    <form
                      method="post"
                      action="#"
                      id="CustomerLoginForm"
                      acceptCharset="UTF-8"
                      className="contact-form"
                      onSubmit={handleSubmit(submitLoginDetails)}
                    >
                      <h2 className="poppins login mb-4">
                        <b className="poppins">Log In</b>
                      </h2>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group">
                            <label htmlFor="CustomerEmail black">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="CustomerEmail"
                              autoCorrect="off"
                              autoCapitalize="off"
                              className="login_input"
                              placeholder="Your Email"
                              required
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="form-group">
                            <label htmlFor="CustomerPassword">Password</label>
                            <input
                              type="password"
                              name="password"
                              placeholder="Min of 8 Characters"
                              id="CustomerPassword"
                              className="login_input"
                              required
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
                          <div className="form-group checkdiv">
                            <input
                              type="checkbox"
                              placeholder="Min of 8 Characters"
                              id="checkboxfield"
                              // className="login_input"
                              required
                              onChange={handleInputChange}
                            />
                            <label htmlFor="checkboxfield mb-0 poppins">
                              I agree to all{" "}
                              <span className="privacy">
                                Term, Privacy Policy
                              </span>{" "}
                              and <span className="privacy">fees</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                          {isLoading ? (
                            <input
                              value="loading..."
                              className="btn act_btn mb-3"
                            ></input>
                          ) : (
                            <input
                              type="submit"
                              className="btn act_btn mb-3"
                              value="Log in"
                            />
                          )}
                          <p
                            className="mb-4 poppins"
                            style={{
                              color: "black",
                              cursor: "pointer",
                              textAlign: "start",
                            }}
                          >
                            {/* <a href="#" id="RecoverPassword">
                              Forgot your password?
                            </a>{' '}
                            &nbsp; | &nbsp; */}
                            Don’t have an account?{" "}
                            <Link href="/register" id="customer_register_link">
                              <b>
                                <span className="privacy"> Sign Up </span>
                              </b>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
