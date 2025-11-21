"use client";
import React from "react";
import "./global.css";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const hideNavbarOnPaths = ["/login", "/register"];

  return (
    <html lang="en">
      <body>
        {!hideNavbarOnPaths.includes(pathname) && <Navbar />}
        <main>{children}</main>
        {!hideNavbarOnPaths.includes(pathname) && <Footer />}
      </body>
    </html>
  );
};

export default Layout;
