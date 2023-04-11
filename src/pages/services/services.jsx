import React, { useState, useEffect } from "react";
import styles from "../services/services.module.css";

const Services = () => {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const AccessKey = "your unsplash access key";

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${AccessKey}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const Submit = () => {
    fetchRequest();
    setImg("");
  };

  return (
    <div className={styles.mainDiv_services}>
      <h1>Retrieving photos from usplash with API</h1>
      <div className={styles.input_field}>
        <input
          className={styles.textBox_field}
          type="text"
          placeholder="Search Anything..."
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit" onClick={Submit} className={styles.submit_button}>
          Search
        </button>
      </div>

      <div className={styles.mainDiv_image}>
        {res.map((value) => {
            return (
              <>
              <div className={styles.card}>
                <img
                  key={value.id}
                  className={styles.image_field}
                  src={value.urls.small}
                  alt="val.alt_description"
                />
                </div>
              </>
            );
          }
          )}
      </div>
    </div>
  );
};

export default Services;
