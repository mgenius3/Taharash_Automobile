import React, { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import jwtDecode from "jwt-decode";
import { getInitials } from "../../utils/stringManipulation";
import logout from "../../utils/logout";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";

export default function MainHeader() {
  const [token] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
  });
  const [user, setUser] = useState({});
  const [avatarMenu, setAvatarMenu] = useState(false);
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

  // console.log(user);
  return (
    //  <!--Header-->
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/" className="nav_brand">
          <img
            src="/images/taharish-automobile.png"
            width="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-uppercase mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-uppercase mx-3">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="text-uppercase mx-3">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/services" className="text-uppercase mx-3">
              Services
            </Nav.Link>
            <Nav.Link href="/automobile" className="text-uppercase mx-3">
              CAR SHOP
            </Nav.Link>
            <Nav.Link href="/blog" className="mx-3">
              BlOG
            </Nav.Link>
          </Nav>
          <Nav>
            <nav
              className="navbar navbar-expand-lg"
              style={{ position: "relative", zIndex: "100" }}
            >
              <div className="container-fluid">
                <ul
                  className={`navbar-nav ${
                    user?.admin == "yes" ? " adminNav" : " userNav"
                  }`}
                  // style={{ position: "absolute", right: "0px" }}
                >
                  {/* <!-- Avatar Menu --> */}
                  {!Object.keys(user).length ? (
                    <li className="account_signing">
                      <Link href="/login">
                        <small
                          style={{
                            fontSize: "15px",
                            cursor: "pointer",
                            border: "1px solid #20B15A",
                            padding: "7px 12px",
                            color: "black",
                            borderRadius: "7px",
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          Login{" "}
                        </small>
                      </Link>
                      <Link href="register">
                        <small
                          style={{
                            fontSize: "15px",
                            cursor: "pointer",
                            border: "1px solid #20B15A",
                            background: "#20B15A",
                            padding: "7px 12px",
                            color: "white",
                            borderRadius: "7px",
                            cursor: "pointer",
                          }}
                          className="d-sm-inline"
                        >
                          {" "}
                          Register{" "}
                        </small>
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => setAvatarMenu(!avatarMenu)}
                      >
                        <p
                          style={{
                            color: "white",
                            background: "green",
                            borderRadius: "50%",
                            padding: "3px 7px",
                          }}
                        >
                          {getInitials(user?.fullName)?.toUpperCase()}
                        </p>
                      </a>
                      {avatarMenu ? (
                        <ul
                          className="bg-light position-absolute"
                          aria-labelledby="navbarDropdownMenuLink"
                          style={{ left: "-50px" }}
                        >
                          {user?.admin == "yes" && (
                            <li
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                            >
                              <Link href={`/dashboard/admin/profile`}>
                                <span>
                                  <img
                                    src="https://img.icons8.com/ios/50/null/administrator-male--v1.png"
                                    width={15}
                                  />{" "}
                                  Admin
                                </span>
                              </Link>
                            </li>
                          )}
                          <li
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                          >
                            <Link href={`/dashboard/user/profile`}>
                              <span>
                                <img
                                  src="https://img.icons8.com/ios-filled/50/null/user.png"
                                  width={15}
                                />{" "}
                                Profile
                              </span>
                            </Link>
                          </li>

                          <li
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                            onClick={() => userlogout()}
                          >
                            <span>
                              <img
                                src="https://img.icons8.com/ios-filled/50/null/logout-rounded.png"
                                width={15}
                              />{" "}
                              Logout
                            </span>
                          </li>
                        </ul>
                      ) : null}
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
