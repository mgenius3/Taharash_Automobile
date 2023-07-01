import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import FetchApiClient from "../../fetch_api_clients/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import { shortenString } from "../../utils/stringManipulation";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  let apiClient = new FetchApiClient("/blog");

  useEffect(() => {
    const fetchAllBlog = async () => {
      let { response } = await apiClient.get("");
      if (response) setBlogs(response);
      else {
        toast.error("unable to fetch blog data");
      }
    };
    fetchAllBlog();
  }, []);

  return (
    <Layout>
      <Carousel style={{ background: "black" }}>
        <Carousel.Item interval={2500}>
          <img
            className="blur-up lazyload bg-img land-image-slider"
            src="/images/rangerover2.jpg"
            alt="automobile"
            title="automobile"
          />
          <Carousel.Caption>
            <div className="">
              <h2 className="h1 mega-title slideshow__title">
                <b style={{ color: "green" }}>Taharish</b>{" "}
                <b className="land-text-slider">Automobile</b>
              </h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="blur-up lazyload bg-img land-image-slider"
            src="/images/rangerover.jpg"
            alt="autombile"
            title="automobile"
          />
          <Carousel.Caption>
            <div className="">
              <h2 className="h1 mega-title slideshow__title">
                <b className="land-text-slider">CHECK OUR BLOGS</b>
              </h2>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="d-flex align-items-center m-5 justify-content-center">
          <h1 style={{ fontSize: "35px", fontWeight: "bolder" }}>
            All Blog Content
          </h1>
          <p className="text-muted mx-3" style={{ fontSize: "14px" }}>
            Check and Read all our blogs <br /> about cars
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-12 col-lg-6 mb-5">
              <div
                className="card h-100"
                style={{
                  borderRadius: "20px",
                  background: "#e0e0e05c",
                  border: "none",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img
                      src={"/images/car.png"}
                      alt={blog.name}
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{ fontWeight: "bolder" }}
                      >
                        {blog.name}
                      </h5>
                      <p className="card-text">
                        {shortenString(blog.description, 200)}
                      </p>
                    </div>
                    <div className="card-footer">
                      <Link href={`/blog/${blog.id}`}>
                        <p
                          style={{
                            backgroundColor: "black",
                            borderRadius: "8px",
                            color: "white",
                            padding: "10px 17px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                        >
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogList;
