import React, { useState, useEffect } from "react";
import AdminLayout from "../../../../components/admin/Layout";
import { Modal, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import ConfirmationInput from "../../../../components/Confirmation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Carousel } from "react-bootstrap";
import Link from "next/link";
import FetchApiClient from "../../../../fetch_api_clients/api";

const AutoMobile = () => {
  const router = useRouter();

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  let apiClient = new FetchApiClient("/automobile", token);

  const [data, setData] = useState([]);
  // const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  //to display confirmation input
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [hideConfirmationModal, setHideConfirmationModal] = useState(true);

  useEffect(() => {
    const fetchLogistics = async () => {
      let { response } = await apiClient.get("");

      if (response) {
        setData(response);
      } else {
        toast.error("fail to fetch data");
      }
    };
    fetchLogistics();
  }, []);

  const handleModalOpen = (item) => {
    setShowModal(true);
    setModalData(item);
  };
  const handleModalClose = () => setShowModal(false);

  const deletePackage = async () => {
    let { response } = await apiClient.delete(`/${modalData?.id}`);

    if (response) {
      toast.success(response);
      router.reload();
    } else {
      toast.error("delete failed");
    }
  };
  return (
    <AdminLayout>
      <div className="table-responsive">
        <div className="d-flex justify-content-between align-items-center m-3">
          <h1>AUTOMOBILES</h1>
          <Link href="/dashboard/admin/automobile/upload">
            <button className="btn text-right text-white">
              Add CAR/PARTS{" "}
              <img
                src="https://img.icons8.com/ios/50/add.png"
                className="icon"
              />
            </button>
          </Link>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">TYPE</th>
              <th scope="col">CONDITIONS</th>
              <th scope="col">PRICE</th>
              <th scope="col">DATE</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr
                key={item?.id}
                onClick={() => handleModalOpen(item)}
                style={{ cursor: "pointer" }}
              >
                <td>{item?.name}</td>
                <td>{item?.type}</td>
                <td>{item?.conditions}</td>
                <td>{item?.price}</td>
                <td>{new Date(item?.created_at).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ overflow: "auto" }}>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                lineHeight: "1.5",
                color: "#3c171773",
              }}
            >
              AUTOMOBILE DETAILS
            </Modal.Title>
            <br />
          </Modal.Header>
          <Modal.Body>
            <Carousel className="w-screen">
              {typeof modalData?.files == "string"
                ? JSON.parse(modalData?.files).map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`Product ${modalData.title}`}
                        style={{ height: "auto" }}
                      />
                    </Carousel.Item>
                  ))
                : null}
            </Carousel>{" "}
            <br />
            <table className="table">
              <thead
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  lineHeight: "1.5",
                }}
              >
                Product&nbsp;Details
              </thead>{" "}
              <br />
              <tbody>
                <tr>
                  <th>PRODUCT ID</th>
                  <td>{modalData?.id}</td>
                </tr>

                <tr>
                  <th>Name</th>
                  <td>{modalData?.name}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{modalData?.type}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{modalData?.category}</td>
                </tr>
                <tr>
                  <th>Conditions</th>
                  <td>{modalData?.conditions}</td>
                </tr>

                <tr>
                  <th>Manufacturer</th>
                  <td>{modalData?.manufacturer}</td>
                </tr>
                <tr>
                  <th>Year of manufacture</th>
                  <td>{modalData?.year_of_manufacture}</td>
                </tr>
                <tr>
                  <th>Material</th>
                  <td>{modalData?.material}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{modalData?.price}</td>
                </tr>
              </tbody>
              <hr />
              <tfoot>
                <th>Date Uploaded</th>
                <td>{new Date(modalData?.created_at).toLocaleString()}</td>
              </tfoot>
              <tfoot>
                <th>Description</th>
                <td>{modalData?.description}</td>
              </tfoot>
            </table>
          </Modal.Body>

          <Modal.Footer className="justify-content-start">
            <Button
              variant="danger"
              onClick={() => {
                handleModalClose();
                setHideConfirmationModal(true);
                setDeleteConfirmation(true);
              }}
              style={{ background: "red", color: "white" }}
            >
              Delete
            </Button>
          </Modal.Footer>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {deleteConfirmation ? (
          <Modal show={hideConfirmationModal}>
            <ConfirmationInput
              setConfirmation={setDeleteConfirmation}
              action={deletePackage}
              title={`to delete package of id :.'${modalData?.id}'`}
            />

            <Modal.Footer>
              <Button
                variant="error"
                onClick={() => setHideConfirmationModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        ) : null}
      </div>
    </AdminLayout>
  );
};

export default AutoMobile;
