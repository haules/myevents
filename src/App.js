import React, { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/home-page";
import Services from "./pages/services/services";
import AboutUs from "./pages/about_us/about-us";
import Table from "./pages/Table/Table";
import MySideNav from "./components/header/MySideNav";
import Company from "./pages/sub-pages/company/company";
import ContactUs from "./pages/sub-pages/contact-us/contactUs";
import LoginPage from "./pages/login/LoginPage";
import styles from "./components/layout/layout.module.css";

function App() {
  const [token, setToken] = useState(() =>
    JSON.parse(localStorage.getItem("auth") || false)
  );

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(token));
  }, [token]);

  return (
    <Router>
      <Header />

      <div className={styles.mainDiv}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/loginPage" element={<LoginPage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/about-us" element={<AboutUs />} />

          {/* add route for "Company" and "Contact Us" to work | NOT WORKING*/}
          <Route path="/pages/sub-pages/company" element={<Company />} />
          <Route path="/pages/sub-pages/contactUs" element={<ContactUs />} />
        </Routes>
        <MySideNav />
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
