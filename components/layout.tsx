import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
     <main className="main__styles">{children}</main>
      <Footer />
    </>
  );
}
