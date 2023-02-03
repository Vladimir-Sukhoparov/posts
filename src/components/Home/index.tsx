import React from "react";
import styles from "./index.module.css";

export const Home = () => {
  return (
    <div  className={styles.home}>
      <h3>This application is created using:</h3>
    <input
      type={"text"}
      value={"npx create-react-app my-app --template typescript"}
      readOnly
      disabled
    />
    </div>
  );
};
