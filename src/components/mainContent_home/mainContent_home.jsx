import React, { useEffect, useState } from "react";
import styles from "../mainContent_home/mainContent_Home.module.css";
import loginData from "../../data/login.json";

const HomePageContent = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  //the useEffect is always executed first, in our case is pulling the data immediatelly after refresh, see console
  //useState - take all API data and put it in the setPost method
  //usestate - the variable "post" is used in the return function inside the div
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10") //change the limit to 1 to retrieve only one object
      .then((response) => response.json()) // converting the data to be readable
      .then((data) => {
        // console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //below is fetch() with POST
  const addPosts = async (title, myBody) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: myBody,
        userId: Math.random().toString(36).slice(2),
      }),
      header: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((myData) => {
        setPosts((posts) => [myData, ...posts]);
        setTitle("");
        setBody("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };
  //delete function
  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.title}>
        HomePage - GET - Fetching data from an API -
        https://jsonplaceholder.typicode.com
      </h1>

      {posts.map((data) => {
        return (
          <div className={styles.dataRetrieved} key={data.id}>
            <h2 className={styles.h2_title}>{data.title}</h2>
            <p className={styles.p_content}>{data.body}</p>
            <div className={styles.myButton}>
              {/* set the "display: inline-block;" for the button width to be as the content */}

              <button
                className={styles.btn}
                onClick={() => deletePost(data.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <h1>Fetch - POST</h1>
      <div className={styles.div_form}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.form_control}
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            name=""
            className={styles.form_control}
            id=""
            cols="10"
            rows="8"
            value={body}
            placeholder="Message"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button type="submit" className={styles.addPostButton}>
            Add Post
          </button>
        </form>
      </div>

      <h1>
        DELETE - this is the delete section that is represented with the above
        button
       
      </h1>
    </div>
  );
};

export default HomePageContent;
