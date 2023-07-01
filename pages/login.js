import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
// import { useMutation } from 'react-query';
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import FetchApiClient from "../fetch_api_clients/api";

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
      console.log("hello");
      router.back();
    } else {
      setIsLoading(false);
      toast.error(error);
    }
  };

  return (
    <Layout title="Login">
      <div id="page-content">
        <img
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
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
              <div className="mb-4">
                <form
                  method="post"
                  action="#"
                  id="CustomerLoginForm"
                  acceptCharset="UTF-8"
                  className="contact-form"
                  onSubmit={handleSubmit(submitLoginDetails)}
                >
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <label htmlFor="CustomerEmail">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="CustomerEmail"
                          autoCorrect="off"
                          autoCapitalize="off"
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
                          placeholder=""
                          id="CustomerPassword"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                      {isLoading ? (
                        <input value="loading..." className="btn mb-3"></input>
                      ) : (
                        <input
                          type="submit"
                          className="btn mb-3"
                          value="Sign In"
                        />
                      )}
                      <p
                        className="mb-4"
                        style={{ color: "black", cursor: "pointer" }}
                      >
                        {/* <a href="#" id="RecoverPassword">
                          Forgot your password?
                        </a>{' '}
                        &nbsp; | &nbsp; */}
                        New User ?{" "}
                        <Link href="/register" id="customer_register_link">
                          <b style={{ color: "#6e0000" }}>Create Account </b>
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
    </Layout>
  );
}
