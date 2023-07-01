import React, { useState } from "react";
import AdminLayout from "../../../../components/admin/Layout";
import ImageUpload from "../../../../utils/fileupload";
import FetchApiClient from "../../../../fetch_api_clients/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const BlogEditor = () => {
  const router = useRouter();

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  let apiClient = new FetchApiClient("/blog", token);

  // setFileUploadError, setImageUrl, maxImages, maxSizes
  const [fileUploadError, setFileUploadError] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  let [loading, setLoading] = useState(false);
  const [no_of_subheading, set_no_of_subheading] = useState([1]);
  const [data, setData] = useState([]);
  const [subheadingData, setSubHeading] = useState([
    { title: "", body: "", imageurl: "" },
  ]);

  const [introductionData, setIntroductionData] = useState([]);

  //handle some input field
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //handle introduction input field
  const handleIntroductionData = (name, data) => {
    setIntroductionData({ ...introductionData, [name]: data });
  };

  //handle sub_heading input field
  const handleSubHeadingData = (event, index, field) => {
    const value =
      event?.target?.value !== undefined ? event.target.value : event;

    setSubHeading((prevHeading) => {
      const updatedHeading = [...prevHeading];
      updatedHeading[index] = {
        ...updatedHeading[index],
        [field]: value,
      };
      return updatedHeading;
    });
  };

  //add sub heading
  const addSubHeading = () => {
    console.log(fileUploadError, imageUrl);
    setSubHeading((prevSubHeading) => [
      ...prevSubHeading,
      { title: "", body: "", imageurl: "" },
    ]);
  };

  //submit blog post
  const handleSubmitBlogData = async () => {
    setLoading(true);
    let body = {
      ...data,
      introduction: JSON.stringify(introductionData),
      sub_heading: JSON.stringify(subheadingData),
    };

    let { response, error } = await apiClient.post("", body);
    if (error) {
      setLoading(false);
      toast.error(`${error}`);
    } else {
      setLoading(false);
      toast.success(`${response}`);
      router.push("/dashboard/admin/blog");
    }
  };

  return (
    <AdminLayout>
      <main>
        <h1
          style={{
            fontSize: "25px",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          {" "}
          NEW BLOG
        </h1>
        <div className="card p-4">
          <h1
            style={{
              fontSize: "20px",
              fontFamily: "roboto",
            }}
          >
            TOPIC NAME
          </h1>
          <input
            placeholder="Enter Topic name"
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="card p-4">
          <h1
            style={{
              fontSize: "20px",
              fontFamily: "roboto",
            }}
          >
            DESCRIPTION
          </h1>
          <input
            placeholder="Describe your blog here"
            onChange={handleInputChange}
            name="description"
          />
        </div>
        <div className="card p-4">
          <h1
            style={{
              fontSize: "20px",
              fontFamily: "Inter",
            }}
          >
            Introduction
          </h1>
          <textarea
            placeholder="Enter your introduction"
            onChange={(e) => handleIntroductionData("name", e.target.value)}
          />

          <ImageUpload
            maxImages={1}
            maxSizes={5242880}
            setFileUploadError={setFileUploadError}
            setImageUrl={setImageUrl}
            optionalFunction={(url) =>
              handleIntroductionData("imageurl", url[0])
            }
          />
        </div>

        <div className="card p-4">
          {no_of_subheading?.map((a, index) => (
            <>
              <h1
                className="h1"
                style={{
                  fontSize: "20px",
                  fontFamily: "Inter",
                }}
              >
                Sub Heading
              </h1>{" "}
              <input
                placeholder="Title"
                name="title"
                onChange={(e) => handleSubHeadingData(e, index, "title")}
              />
              <br />
              <textarea
                placeholder="Enter text here for sub heading"
                name="body"
                onChange={(e) => handleSubHeadingData(e, index, "body")}
              />
              <ImageUpload
                maxImages={1}
                maxSizes={5242880}
                setFileUploadError={setFileUploadError}
                setImageUrl={setImageUrl}
                optionalFunction={(url) =>
                  handleSubHeadingData(url[0], index, "imageurl")
                }
              />
            </>
          ))}
          <br />
          <button
            className="btn text-white"
            onClick={() => {
              set_no_of_subheading(() => [...no_of_subheading, 1]);
              addSubHeading();
            }}
          >
            Add Sub Heading
          </button>
        </div>

        <div className="card p-4">
          <h1
            style={{
              fontSize: "20px",
              fontFamily: "roboto",
            }}
          >
            Conclusion
          </h1>
          <textarea name="conclusion" onChange={handleInputChange} />
        </div>

        {loading ? (
          <button className="btn text-white py-2 px-3 my-3" disabled>
            POST ...
          </button>
        ) : (
          <button
            className="btn text-white py-2 px-3 my-3"
            onClick={handleSubmitBlogData}
          >
            POST BLOG
          </button>
        )}
      </main>
    </AdminLayout>
  );
};

export default BlogEditor;
