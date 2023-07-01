import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import FetchApiClient from "../../fetch_api_clients/api";
import { toast } from "react-toastify";

export default function SingleBlog() {
  let apiClient = new FetchApiClient("/blog");
  const router = useRouter();
  const { query } = router;
  const { blog } = query;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSingleBlog = async () => {
      console.log(blog);
      if (blog != undefined) {
        let { response, error } = await apiClient.get(`/${blog}`);
        console.log(response);
        if (error) toast.error("unable to fetch blog, refresh");
        else setData(response);
      }
    };

    fetchSingleBlog();
  }, [blog]);

  return (
    <Layout>
      <div id="blog">
        {data?.map((blog) => (
          <>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bolder",
                margin: "10px",
                textAlign: "center",
                opacity: "0.6",
                padding: "10px",
              }}
              className="mx-3 mx-lg-5"
            >
              {`${blog?.name}`}
            </h1>

            <section className="blog_body_main">
              <div>
                <div className="d1">
                  {blog?.introduction ? <h3>Introduction</h3> : null}

                  <p>{<pre>{`${JSON.parse(blog?.introduction).name}`}</pre>}</p>
                  {blog?.introduction && (
                    <img src={`${JSON.parse(blog?.introduction).imageurl}`} />
                  )}
                </div>
                <div className="d2">
                  <img />
                </div>
                <div className="d3">
                  <span>
                    <img />
                  </span>
                  <span></span>
                </div>

                {blog?.sub_heading &&
                  JSON.parse(blog?.sub_heading).map((sub) => (
                    <>
                      <div className="d6">
                        <h6>{sub?.title}</h6>
                        <p>
                          <pre>{sub?.body}</pre>
                        </p>
                      </div>
                      <div className="d7">
                        <img src={sub?.imageurl} />
                      </div>
                    </>
                  ))}

                <div className="d9">
                  <h5>Conclusion</h5>
                  <p>{blog?.conclusion}</p>
                </div>
              </div>

              <div>
                <p>Written @ {new Date(blog?.created_at).toDateString()}</p>
              </div>
              <hr />
            </section>

            <section className="blog_footer">
              <div>
                <div className="latest">
                  <h6>Taharish blog</h6>
                  <h3>From the blog</h3>
                  <p>
                    The latest industry news, interviews, technologies, and
                    resources.
                  </p>
                  <button>View all Blogs</button>
                </div>
                {/* <div className="more_blogs">
                  <div>
                    <div>
                      <img />
                      <p className="p1">Design 8min read</p>
                      <h5>UX review presentations</h5>
                      <p className="p2">
                        How do you create compelling presentations that wow your
                        colleagues and impress your managers?
                      </p>
                      <span className="wrote_by">
                        <img width={50} />
                        <p>
                          <b>mgenius</b>
                          <em>20 Jan 2022</em>
                        </p>
                      </span>
                    </div>
                    <div>
                      <img />
                      <p className="p1">Product 10min read</p>

                      <h5>UX review presentations</h5>
                      <p className="p2">
                        How do you create compelling presentations that wow your
                        colleagues and impress your managers?
                      </p>
                      <span className="wrote_by">
                        <img width={50} />
                        <p>
                          <b>teknesis</b>
                          <em>20 Jan 2022</em>
                        </p>
                      </span>
                    </div>
                  </div>
                  <aside>
                    <img className="prev" />
                    <img className="next" />
                  </aside>
                </div> */}
              </div>
            </section>
          </>
        ))}
      </div>
    </Layout>
  );
}
