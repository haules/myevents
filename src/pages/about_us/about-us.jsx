import React, { useState, useEffect } from "react";
import styles from "../about_us/about_us.module.css";
import data from "../../data/data.json";

const AboutUs = () => {
  const [myData, setMyData] = useState();

  const fetchJson = () => {
    fetch(data)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMyData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div className={styles.mainDiv_parent}>
      <div className={styles.firstSection}>
        <div className={styles.website}>
          <h2>
            Website:
            <a href="url"> {data.website}</a>
          </h2>
        </div>
        <h2>import ...</h2>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.email}>{data.email}</div>
        <div className={styles.country}>
          {data.country.map((country) => {
            return (
              <div className={styles.listResults}>
                <h3>
                  {country.id} - Country: {country.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={styles.website}>
          <h2>
            Website: <a href="url">{data?.website}</a>
          </h2>
        </div>
        <h2>fetch()</h2>
        <div className={styles.name}>{data?.name}</div>
        <div className={styles.name}>{data?.email}</div>
        <div className={styles.country}>
          {data?.country?.map((country) => {
            return (
              <div className={styles.listResults}>
                <h3>
                  {country.id} -  Country: {country.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
