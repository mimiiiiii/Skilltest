import PropTypes from "prop-types";
import styles from "./Info.module.scss";
import Wrapper from "../Wrapper/Wrapper";
const Info = ({ type, label, labelBefore }) => {
  return (
    <Wrapper type={type}>
      <div className={styles.container}>
        {label}
        <span className={styles.labelBefore}>{labelBefore}</span>
      </div>
    </Wrapper>
  );
};

Info.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  label: PropTypes.string,
  labelBefore: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Info.defaultProps = {
  type: "primary",
  label: "",
  labelBefore: "",
};
export default Info;
