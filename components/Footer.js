import Link from "next/link";
import { Helmet } from "react-helmet";

export default function Footer({ whatsapp }) {
  return (
    // <footer id="footer">
    //   <div className="site-footer">
    //     <div className="container">
    //       {/* <!--Footer Links--> */}
    //       <div className="footer-top">
    //         <div className="row">
    //           <div className="col-12 col-sm-12 col-md-3 col-lg-3">
    //             <h4 className="h4">Quick Link</h4>
    //             <ul>
    //               <li>
    //                 <Link href="/">Home</Link>
    //               </li>
    //               <li>
    //                 <Link href="/about">About Us</Link>
    //               </li>
    //               <li>
    //                 <Link href="/contact">Contact Us</Link>
    //               </li>
    //               <li>
    //                 <Link href="/contact">Car Shop</Link>
    //               </li>
    //               <li>
    //                 <Link href="/blog">Blogs</Link>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="col-12 col-sm-12 col-md-3 col-lg-3">
    //             <h4 className="h4">Services</h4>
    //             <ul>
    //               <li>
    //                 <Link href="/automobile">Car Sales</Link>
    //               </li>
    //               <li>Car Rentals</li>
    //               <li>Car Detailing/ Car Wash</li>
    //               <li>Car Servicing & Repairs</li>
    //             </ul>
    //           </div>

    //           <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
    //             <h4 className="h4">Contact Us</h4>
    //             <ul className="addressFooter">
    //               <li>
    //                 <i className="icon anm anm-map-marker-al"></i>
    //                 <p>
    //                   <b>HEAD OFFICE: </b>
    //                   <em>
    //                     Road 1907, Katampe District, Plot 14, Adjacent jabs
    //                     Luxury Homes, FCT, Abuja
    //                   </em>
    //                 </p>
    //                 <p>
    //                   <b>BRANCH OFFICE: </b>
    //                   <em>
    //                     Plot 556, Katampe Road, Opposite Harmony Court Estate,
    //                     jahi 9000108, Abuja
    //                   </em>
    //                   <br />
    //                   Lagos, Nigeria
    //                 </p>
    //               </li>
    //               <li className="phone">
    //                 <i className="icon anm anm-phone-s"> </i>
    //                 <Link href="tel:234 8139337963">
    //                   <p style={{ cursor: "pointer" }}> 08139337963(head)</p>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <i className="icon anm anm-phone-s"> </i>
    //                 <Link href="tel:234 8136869671">
    //                   <p style={{ cursor: "pointer" }}> 08136869671(head)</p>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <i className="icon anm anm-phone-s"> </i>
    //                 <Link href="tel:234 8035379572">
    //                   <p style={{ cursor: "pointer" }}> 08035379572(branch)</p>
    //                 </Link>
    //               </li>
    //               <li className="email">
    //                 <i className="icon anm anm-envelope-l"> </i>
    //                 <Link href="mailto: taharishautomobileservices@gmail.com">
    //                   <p style={{ cursor: "pointer" }}>
    //                     taharishautomobileservices@gmail.com
    //                   </p>
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!--End Footer Links--> */}
    //       <hr />
    //       <div className="footer-bottom">
    //         <div className="row">
    //           {/* <!--Footer Copyright--> */}
    //           <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left"></div>
    //           {/* <!--End Footer Copyright--> */}
    //           {/* <!--Footer Payment Icon--> */}
    //           <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
    //             <ul className="payment-icons list--inline">
    //               <li>
    //                 <i className="icon fa fa-cc-visa" aria-hidden="true"></i>
    //               </li>
    //               <li>
    //                 <i
    //                   className="icon fa fa-cc-mastercard"
    //                   aria-hidden="true"
    //                 ></i>
    //               </li>
    //               <li>
    //                 <i
    //                   className="icon fa fa-cc-discover"
    //                   aria-hidden="true"
    //                 ></i>
    //               </li>
    //               <li>
    //                 <i className="icon fa fa-cc-paypal" aria-hidden="true"></i>
    //               </li>
    //               <li>
    //                 <i className="icon fa fa-cc-amex" aria-hidden="true"></i>
    //               </li>
    //               <li>
    //                 <i
    //                   className="icon fa fa-credit-card"
    //                   aria-hidden="true"
    //                 ></i>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="text-center" style={{ color: "green" }}>
    //             Powered by BUZZT & mgenius
    //           </div>

    //           {/* <!--End Footer Payment Icon--> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer id="footer">
      <Helmet>
        <style>
          {`
          .site-footer {
            background: #00CA72;
            position: relative;
          }
          .footer-top{
            color: black;
          }
          .footer-top h4, .footer-top .h4{
            color: black;
          }
          #footer a {
            color: black;
          }
          .site-footer ul li {
            margin-bottom: 20px;
          }
          .footer-top p{
            color: black;
          }
          .addressFooter li p {
            padding-left: 0px;
          }
        `}
        </style>
      </Helmet>
      <div className="site-footer">
        {whatsapp && (
          <a
          href="https://wa.me/+2348035379572" 
          target="_blank" 
          rel="noopener noreferrer"
          >
            <img
              src="/images/whatsapp.png"
              alt="whatsapp"
              className="footerwhatsapp"
            />
          </a>
        )}
        <div className="container">
          {/* <!--Footer Links--> */}
          <div className="footer-top">
            <div className="row footer_row">
              <div className="col-12 mb-4 col-sm-12 col-md-3 col-lg-3">
                {/* <h4 className="h4 footer_log">WEB LOGO</h4> */}
                <img
                  src="/images/taharish-automobile.png"
                  alt="logo"
                  className="mb-4"
                />
                <br />
                {/* <ul>
                  <li>
                    <Link href="/automobile">Car Sales</Link>
                  </li>
                  <li>Car Rentals</li>
                  <li>Car Detailing/ Car Wash</li>
                  <li>Car Servicing & Repairs</li>
                </ul> */}
                <p className="footer_text">
                  Umatched Excellence in Car Sales & Repairs “Discover Luxury,
                  Eperience Performance, Uncompromising Quality”
                </p>
                <div className="handles">
                  <img src="/images/face.png" alt="facebook handle" />
                  <img src="/images/twit.png" alt="facebook handle" />
                  <img src="/images/link.png" alt="facebook handle" />
                  <img src="/images/inst.png" alt="facebook handle" />
                </div>
              </div>
              <div className="col-12 mb-4  col-sm-12 col-md-3 col-lg-3">
                <h4 className="h4 poppins">Quick Link</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Car Shop</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blogs</Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 mb-4  col-sm-12 col-md-3 col-lg-3 contact-box">
                <h4 className="h4 mb-1 poppins">
                  <b>Contact Us</b>
                </h4>
                <ul className="addressFooter">
                  <li>
                    {/* <p>
                      <b>HEAD OFFICE: </b>
                      <em>
                        Road 1907, Katampe District, Plot 14, Adjacent jabs Luxury Homes, FCT, Abuja
                      </em>
                      +2348035379572
                      +2348139337963
                    </p> */}
                    <p>
                      BRANCH OFFICE: Plot 556, Katampe Road, Opposite Harmony
                      Court Estate, jahi 9000108, Abuja
                      <br />
                      Lagos, Nigeria
                    </p>
                  </li>
                  <h4 className="h4 poppins mb-1">
                    <b>Phone Number</b>
                  </h4>
                  <li>
                    {/* <p>
                      <b>HEAD OFFICE: </b>
                      <em>
                        Road 1907, Katampe District, Plot 14, Adjacent jabs Luxury Homes, FCT, Abuja
                      </em>
                      +2348035379572
                      +2348139337963
                    </p> */}
                    <p className="poppins">
                      +2348035379572
                      <br />
                      +2348139337963
                    </p>
                  </li>
                  {/* <li className="phone">
                    <i className="icon anm anm-phone-s"> </i>
                    <Link href="tel:234 8139337963">
                      <p style={{ cursor: "pointer" }}> 08139337963(head)</p>
                    </Link>
                  </li>
                  <li>
                    <i className="icon anm anm-phone-s"> </i>
                    <Link href="tel:234 8136869671">
                      <p style={{ cursor: "pointer" }}> 08136869671(head)</p>
                    </Link>
                  </li>
                  <li>
                    <i className="icon anm anm-phone-s"> </i>
                    <Link href="tel:234 8035379572">
                      <p style={{ cursor: "pointer" }}> 08035379572(branch)</p>
                    </Link>
                  </li> */}
                  {/* <li className="email">
                    <i className="icon anm anm-envelope-l"> </i>
                    <Link href="mailto: taharishautomobileservices@gmail.com">
                      <p style={{ cursor: "pointer" }}>
                        taharishautomobileservices@gmail.com
                      </p>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {/* <!--End Footer Links--> */}
          {/* <hr /> */}
          <div className="footer-bottom">
            <div className="row">
              {/* <!--Footer Copyright--> */}
              {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-sm-center text-md-left text-lg-left"></div> */}
              {/* <!--End Footer Copyright--> */}
              {/* <!--Footer Payment Icon--> */}
              {/* <div className="col-12 col-sm-12 col-md-6 col-lg-6 order-0 order-md-1 order-lg-1 order-sm-0 payment-icons text-right text-md-center">
                <ul className="payment-icons list--inline">
                  <li>
                    <i className="icon fa fa-cc-visa" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i
                      className="icon fa fa-cc-mastercard"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i
                      className="icon fa fa-cc-discover"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i className="icon fa fa-cc-paypal" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="icon fa fa-cc-amex" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i
                      className="icon fa fa-credit-card"
                      aria-hidden="true"
                    ></i>
                  </li>
                </ul>
              </div> */}
              <div className="text-center poppins" style={{ color: "black" }}>
                Copyright Taharish Automobile 2023
              </div>

              {/* <!--End Footer Payment Icon--> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
