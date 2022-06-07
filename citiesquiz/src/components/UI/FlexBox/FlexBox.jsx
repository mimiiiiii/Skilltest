import PropTypes from "prop-types";

const FlexBox = ({
  flexDirection,
  alignItems,
  justifyContent,
  alignSelf,
  className,
  children,
}) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: flexDirection,
        alignItems: alignItems,
        justifyContent: justifyContent,
        alignSelf: alignSelf,
      }}
    >
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  className: PropTypes.string,
  flexDirection: PropTypes.oneOf(["column", "row"]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "baseline",
  ]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-around",
    "space-between",
    "space-evenly",
  ]),
  alignSelf: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "stretch",
    "space-around",
    "space-between",
  ]),
};

FlexBox.defaultProps = {
  className: "",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

export default FlexBox;
