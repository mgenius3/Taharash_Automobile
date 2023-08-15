import Head from "next/head";
import { ToastContainer } from "react-toastify";
import MainNav from "./mainNav/Nav";
import Footer from "./Footer";
import { Fragment } from "react";
export default function Layout({ whatsapp, title, children }) {
  return (
    <Fragment>
      <Head>
        <title>
          {title ? title + " - TaharishAutoMoile" : "Taharish Automobile"}
        </title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/tahicon.png" />
      </Head>
      <ToastContainer position="bottom-center" />
      {/* {title == "Login" ? null : title == "Register" ? null : title?.includes(
          "Landing"
        ) ? (
        <MainNav />
      ) : title?.includes("Market") ? (
        <MarketNav />
      ) : (
        <Nav />
      )} */}
      {title == "Login" ? null : title == "Register" ? null : <MainNav />}
      <div className="pageWrapper">{children}</div>
      {title == "Login" ? null : title == "Register" ? null : <Footer whatsapp={whatsapp} />}
    </Fragment>
  );
}
