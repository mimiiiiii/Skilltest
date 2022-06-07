import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ label, onClick }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "Label",
  onClick: () => {},
};

export default Button;
