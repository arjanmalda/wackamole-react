import PropTypes from "prop-types";

function Button({
  label = "Submit!",
  backgroundColor = "#04AA6D",
  size = "lg",
  handleClick,
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    fontSize: "1rem",
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    margin: "35px",
    alignSelf: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  // fontFamily: PropTypes.font,
};

export default Button;

// label: PropTypes.string,
// backgroundColor: PropTypes.string,
// size: PropTypes.oneOf(["sm", "md", "lg"]),
// handleClick: PropTypes.func,
