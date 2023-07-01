import React, { useState, useEffect } from "react";
import AdminLayout from "../../../../components/admin/Layout";
import { useForm } from "react-hook-form";
// import { useMutation } from 'react-query';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageUpload from "../../../../utils/fileupload";
import LoadingOverlay from "../../../../components/loadingOverlay";
import { useRouter } from "next/router";

import {
  Categories,
  Condition,
  Materials,
  Years,
} from "../../../../utils/data";

import FetchApiClient from "../../../../fetch_api_clients/api";

export default function Logistics() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [imageUrl, setImageUrl] = useState([]);

  const [fileUploadError, setFileUploadError] = useState();
  const [isLoading, setIsLoading] = useState();

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  let apiClient = new FetchApiClient("/automobile", token);

  useEffect(() => {
    toast.error(fileUploadError);
    setData({ ...data, ["files"]: JSON.stringify(imageUrl) });
  }, [imageUrl]);

  const { handleSubmit } = useForm();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitPackageDetails = async () => {
    let { response, error } = await apiClient.post("", data);
    if (response) {
      setIsLoading(false);
      toast.success("successfully posted");
      router.push("/dashboard/admin/automobile");
    } else {
      setIsLoading(false);
      toast.error(error);
    }
  };

  return (
    <AdminLayout>
      <div id="page-content" style={{ margin: "50px 0px" }}>
        <div className="page section-header text-center">
          <div className="page-title">
            <div className="wrapper">
              <h1
                className="page-width"
                style={{ fontWeight: "bolder", fontSize: "20px" }}
              >
                {" "}
                Add Automobile
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
              <div className="customer-box returning-customer">
                <div
                  id="customer-login"
                  className="collapse customer-content"
                ></div>
              </div>
            </div>
          </div>

          <div className="row billing-fields">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 sm-margin-30px-bottom">
              <div className="create-ac-content bg-light-gray padding-20px-all">
                <form onSubmit={handleSubmit(submitPackageDetails)}>
                  <fieldset>
                    <h2 className="login-title mb-3">Automobile Details</h2>
                    <ImageUpload
                      setFileUploadError={setFileUploadError}
                      setImageUrl={setImageUrl}
                      maxImages={3}
                      maxSizes={5242880}
                    />
                  </fieldset>
                  <hr />
                  <br />
                  <fieldset>
                    <div className="row">
                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="type">
                          Automobile type
                          <span className="required-f">*</span>
                        </label>
                        <select
                          name="type"
                          id="type"
                          required
                          onChange={handleInputChange}
                        >
                          <option disabled selected>
                            --- Please Select ---
                          </option>

                          <option value="car">Car</option>
                          <option value="part">Car Parts</option>
                        </select>
                      </div>

                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="input-model">
                          Name <span className="required-f">*</span>
                        </label>
                        <input
                          name="name"
                          id="input-model"
                          type="text"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="input-model">
                          Manufacturer <span className="required-f">*</span>
                        </label>
                        <input
                          name="manufacturer"
                          id="input-model"
                          type="text"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="input-model">Model</label>
                        <input
                          name="model"
                          id="input-model"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="year_of_manufacture">
                          Year of Manufacturer{" "}
                        </label>
                        <select
                          name="year_of_manufacture"
                          id="year_of_manufacture"
                          onChange={handleInputChange}
                        >
                          <option disabled selected>
                            {" "}
                            --- Please Select ---{" "}
                          </option>
                          {Years?.map((year, i) => (
                            <option value={year} key={i}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="category">
                          Category <span className="required-f">*</span>
                        </label>
                        <select
                          name="category"
                          id="category"
                          required
                          onChange={handleInputChange}
                        >
                          <option disabled selected>
                            {" "}
                            --- Please Select ---{" "}
                          </option>
                          {Categories?.map((category, i) => (
                            <option value={category} key={i}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="material">
                          Material <span className="required-f">*</span>
                        </label>
                        <select
                          name="material"
                          id="material"
                          required
                          onChange={handleInputChange}
                        >
                          <option disabled selected>
                            {" "}
                            --- Please Select ---{" "}
                          </option>
                          {Materials?.map((material, i) => (
                            <option value={material} key={i}>
                              {material}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                        <label htmlFor="condition">
                          Condition <span className="required-f">*</span>
                        </label>
                        <select
                          name="conditions"
                          id="conditions"
                          required
                          onChange={handleInputChange}
                        >
                          <option disabled selected>
                            {" "}
                            --- Please Select ---{" "}
                          </option>
                          {Condition?.map((condition, i) => (
                            <option value={condition} key={i}>
                              {condition}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-12 col-lg-12 col-xl-12 required">
                        <label htmlFor="input-city">
                          Price (&#8358;) <span className="required-f">*</span>
                        </label>
                        <input
                          name="price"
                          id="input-city"
                          type="text"
                          required
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                      <div className="form-group col-md-12 col-lg-12 col-xl-12">
                        <label htmlFor="input-company">
                          Automobile Description{" "}
                          <span className="required-f">*</span>
                        </label>
                        <textarea
                          className="form-control resize-both"
                          rows="3"
                          name="description"
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </fieldset>
                  <div className="order-button-payment">
                    {isLoading ? (
                      <LoadingOverlay />
                    ) : (
                      <button
                        className="btn text-white"
                        value="Place order"
                        type="submit"
                      >
                        UPLOAD
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
