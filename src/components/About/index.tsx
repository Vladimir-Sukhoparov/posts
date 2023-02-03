import React from "react";
import styles from "./index.module.css";

export const About = () => {
  return (
    <div className={styles.about}>
      <div>
      <h2>I am Vladimir Sukhoparov</h2>
      <p>I am a Frontend Developer located in Nadym, YaNAO, Russia. 🙃</p>
      <p>I am currently looking for a job as a remote junior frontend developer.
      </p>
      <p>In my free time, I improve my skills as a Frontend Developer.</p>
      </div>
      <img src={require("../../images/im.webp")} alt="Coder" className={styles.ava}/>
    </div>
  );
};
