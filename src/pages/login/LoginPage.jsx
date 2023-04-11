import React, { useState } from "react";
import loginData from "../../data/login.json";
import styles from "../login/LoginPage.module.css";
import LoginForm from "./LoginForm";
import HomePageContent from "../../components/mainContent_home/mainContent_home";

function TestLoginPage() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    loginData.forEach((e) => {
      if (details.email === e.email && details.password === e.password) {
        console.log("mysucces");
        setUser({
          name: details.name,
          email: details.email,
        });
      } else {
        setError("Details do not match");
      }
    });
  };

  const Logout = () => {
    console.log("logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      {user.email !== "" ? (
        <div>
          <HomePageContent />
          <button className={styles.logout_btn} onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default TestLoginPage;
