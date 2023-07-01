import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";
import PageAuthentication from "../../hooks/useAuth";
import FetchApiClient from "../../fetch_api_clients/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "../../components/loadingOverlay";

export default function Cart() {
  const router = useRouter();
  const { query } = router;
  const { product } = query;
  const [data, setData] = useState({});
  // const [error, setError] = useState();
  const [imagetoshow, setImagetoshow] = useState(0);
  // const [checkcopy, setCheckCopy] = useState(false);
  const [paymentloading, setPaymentLoading] = useState(false);

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });
  let apiClient = new FetchApiClient("/automobile", token);

  useEffect(() => {
    const fetchAutomobile = async () => {
      let { response } = await apiClient.get(`/${product}`);
      if (response) setData(response);
    };

    fetchAutomobile();
  }, [product]);

  //making payment for car
  const makePayment = async () => {
    setPaymentLoading(true);
    let { response } = await apiClient.get("/payment/automobile");

    if (response) {
      if (window !== undefined) window.location.replace(`${response}`);
      setPaymentLoading(false);
    } else {
      setPaymentLoading(false);
      toast.error("unable to make payment");
    }
  };

  // function handleCopy(copy_code) {
  //   if (navigator.clipboard && navigator.clipboard.writeText) {
  //     navigator.clipboard
  //       .writeText(copy_code)
  //       .then(() => {
  //         setCheckCopy(true);
  //         console.log("URL copied to clipboard!");
  //       })
  //       .catch((error) => {
  //         console.error("Failed to copy URL to clipboard:", error);
  //       });
  //   } else {
  //     fallbackCopyToClipboard(copy_code);
  //   }
  // }

  // function fallbackCopyToClipboard(copy_code) {
  //   const textArea = document.createElement("textarea");
  //   textArea.value = copy_code;
  //   document.body.appendChild(textArea);
  //   textArea.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(textArea);
  //   setCheckCopy(true);
  // }

  return (
    <PageAuthentication>
      <Layout title="Automobile">
        {data ? (
          <div className="container" id="shop">
            <div>
              <div className="auto_head">
                <h1 className="auto_name">{data?.title}</h1>
                <p className="auto_price">#{data?.price}</p>
              </div>
              <div className="auto_img">
                <span className="auto_pics_main">
                  {typeof data.files === "string" ? (
                    <img
                      className="d-block"
                      src={JSON.parse(data?.files)[imagetoshow]}
                      alt="Image One"
                      style={{ width: "100%" }}
                    />
                  ) : null}
                </span>
                <span className="auto_pics_sub">
                  {typeof data.files === "string"
                    ? JSON.parse(data?.files).map((file, i) => (
                        <img
                          className="d-block"
                          src={file}
                          alt="Image One"
                          style={{ width: "100%" }}
                          onClick={() => setImagetoshow(i)}
                          key={i}
                        />
                      ))
                    : null}
                </span>
              </div>

              <div className="auto_description">
                <h3>Description</h3>
                <p>{data?.description}</p>
              </div>

              <div className="auto_seller_details">
                <div className="d1">
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>MODEL</th>
                        <th>YEAR</th>
                        <th>CATEGORY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{data?.model}</td>
                        <td>{data?.year_of_manufacture}</td>
                        <td>{data?.category}</td>
                      </tr>
                    </tbody>
                    <thead className="thead-dark">
                      <tr>
                        <th>CONDITION</th>
                        <th>MATERIAL</th>
                        <th>DATE UPLOADED</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{data?.conditions}</td>
                        <td>{data?.material}</td>
                        <td>{new Date(data?.created_at).toDateString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {paymentloading ? (
                  <LoadingOverlay />
                ) : (
                  <div className="d2">
                    <p onClick={makePayment}>MAKE PAYMENT</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Alert
            key="danger"
            variant="danger"
            style={{ margin: "200px 100px" }}
          >
            loading...
          </Alert>
        )}
      </Layout>
    </PageAuthentication>
  );
}
