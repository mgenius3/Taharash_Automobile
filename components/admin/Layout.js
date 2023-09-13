import React, { useRef, useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getInitials, shortenString } from "../../utils/stringManipulation";
import jwtDecode from "jwt-decode";
import logout from "../../utils/logout";
import PageAuthentication from "../../hooks/useAuth";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FetchApiClient from "../../fetch_api_clients/api";

function AdminLayout({ children }) {
  const [noOfContactMessages, setNoOfContactMessages] = useState(null);

  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });

  let apiClient = new FetchApiClient("/admin", token);

  const [user, setUser] = useState();
  const asideRef = useRef();
  const router = useRouter();

  useEffect(() => {
    try {
      let decoded = jwtDecode(token);
      setUser(decoded);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const userlogout = () => {
    let out = logout();

    if (out) router.push("/login");
  };

  useEffect(() => {
    const fetchMessages = async () => {
      let { response } = await apiClient.get("/all_contact_message");
      setNoOfContactMessages(response?.length);
    };

    fetchMessages();
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Admin - Kupon </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="Get your automobile here for a good price"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/tahicon.png" />
      </Head>
      <ToastContainer position="bottom-center" />
      <PageAuthentication>
        <main id="account">
          <aside ref={asideRef}>
            <div className="profile">
              <span>
                <span
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: "5px 10px",
                    margin: "10px",
                  }}
                >
                  {getInitials(user?.fullName)}
                </span>
                <br />
                <p>Admin - {shortenString(user?.fullName, 10)}</p>
              </span>

              <img
                id="cancel"
                src="https://img.icons8.com/ios/50/FD7E14/cancel.png"
                onClick={() => asideRef.current.classList.remove("menu")}
              />
            </div>

            <div className="side_links">
              <Link href="/">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/FD7E14/home-page--v1.png"
                    className="icon"
                  />
                  <b>Home</b>
                </span>
              </Link>
              <hr />
              <Link href="/dashboard/admin/profile">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/material-outlined/24/FD7E14/user.png"
                    className="icon"
                  />
                  <b>My Profile</b>
                </span>
              </Link>
              <hr />

              <Link href="/dashboard/admin/user">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/stickers/100/null/user-skin-type-3.png"
                    className="icon"
                  />
                  <b>User</b>
                </span>
              </Link>
              <hr />

              <Link href="/dashboard/admin/blog">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/FD7E14/book.png"
                    className="icon"
                  />
                  <b>Blog</b>
                </span>
              </Link>
              <hr />

              <Link href="/dashboard/admin/automobile">
                <span style={{ cursor: "pointer" }}>
                  <img
                    className="icon"
                    src="https://img.icons8.com/ios/50/automotive.png"
                    alt="automotive"
                  />
                  <b>Automobile</b>
                </span>
              </Link>
              <hr />

              <Link href="/dashboard/admin/messages">
                <span style={{ cursor: "pointer" }}>
                  <img
                    src="https://img.icons8.com/ios/50/messages-mac.png"
                    className="icon"
                  />

                  <b>Messages({noOfContactMessages})</b>
                </span>
              </Link>
              <hr />

              <span style={{ cursor: "pointer" }} onClick={() => userlogout()}>
                <img
                  src="https://img.icons8.com/ios/50/FD7E14/logout-rounded--v1.png"
                  className="icon"
                />
                <b>Logout</b>
              </span>
            </div>
          </aside>

          <section className="main_container">
            <header>
              <div>
                <img
                  id="menu"
                  src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
                  onClick={() => asideRef.current.classList.add("menu")}
                />

                <h3>Admin - Settings</h3>
                <p style={{ opacity: "0.7" }}>
                  Manage your personal and organization settings
                </p>
              </div>
            </header>

            <article>{children}</article>
          </section>
        </main>
      </PageAuthentication>
    </Fragment>
  );
}

export default AdminLayout;
