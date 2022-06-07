import React from "react";
import styles from "./Wrapper.module.scss";

const Wrapper = ({ type, children }) => {
  return (
    <div className={styles.wrapper} data-type={type}>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Wrapper;
