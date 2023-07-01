import React, { useState, useEffect } from "react";
import AdminLayout from "../../../../components/admin/Layout";
import FetchApiClient from "../../../../fetch_api_clients/api";
import { shortenString } from "../../../../utils/stringManipulation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

const AllBlogPage = () => {
  const router = useRouter();
  const [data, setData] = useState();

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  let apiClient = new FetchApiClient("/blog", token);

  useEffect(() => {
    const fetchMessages = async () => {
      let { response } = await apiClient.get("");
      console.log(response);
      if (response) setData(response);
      else toast.error("unable to fetch data");
    };
    fetchMessages();
  }, []);

  const handleDeleteBlog = async (id) => {
    let { response } = await apiClient.delete(`/${id}`);
    if (response) {
      toast.success("successfully deleted");
      router.reload();
    } else {
      toast.error("unable to delete, try again");
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-5">
        <span className="d-flex align-items-end justify-content-between mb-3">
          <h1
            className="text-center mb-0 "
            style={{
              fontSize: "30px",
            }}
          >
            ALL BLOGS
          </h1>
          <Link href="/dashboard/admin/blog/upload">
            <button className="btn text-right text-white">
              Add Blog{" "}
              <img
                src="https://img.icons8.com/ios/50/add.png"
                className="icon"
              />
            </button>
          </Link>
        </span>

        <table className="table table-striped">
          <thead className="thead-dark text-white">
            <tr>
              <th scope="col" style={{ color: "white" }}>
                Topic
              </th>
              <th scope="col" style={{ color: "white" }}>
                Description
              </th>
              <th scope="col" style={{ color: "white" }}>
                Date Created
              </th>
              <th scope="col" style={{ color: "white" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((msg, index) => (
              <>
                <tr key={index}>
                  <Link href={`/blog/${msg?.id}`}>
                    <>
                      <td style={{ cursor: "pointer" }}>
                        {shortenString(msg.name, 20)}
                      </td>
                      <td style={{ cursor: "pointer" }}>
                        {shortenString(msg?.description, 40)}
                      </td>
                      <td style={{ cursor: "pointer" }}>
                        {new Date(msg.created_at).toLocaleDateString()}
                      </td>
                    </>
                  </Link>

                  <td
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <button
                      style={{
                        cursor: "pointer",
                        color: "white",
                        backgroundColor: "red",
                        textAlign: "center",
                        borderRadius: "7px",
                      }}
                      onClick={() => handleDeleteBlog(msg?.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AllBlogPage;
