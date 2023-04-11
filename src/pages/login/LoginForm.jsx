import React, { useState } from "react";
import styles from "../login/LoginPage.module.css";

const TstLog = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHanlder = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div className={styles.loginForm_mainDiv}>
      <form onSubmit={submitHanlder}>
        <div className={styles.form_title}>
          <h2>Login</h2>
          <div className={styles.error}>{error !== "" ? <div>{error}</div> : ""}</div>
          <div className={styles.name}>
            <input
              type="text"
              name="name"
              placeholder="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
        </div>
        <div className={styles.email}>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className={styles.password}>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="passworn"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div className={styles.submit_btn}>
          <input type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default TstLog;
