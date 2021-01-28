import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Spiner.module.css";
const Spiner = () => (
  <div className={styles}>
    <Loader
      type="ThreeDots"
      color="#f47e12"
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);

export default Spiner;
