import PropTypes from "prop-types";
import { useState } from "react";

function Input({
  backgroundColor = "black",
  size = "lg",
  label = "Submit!",
  color = "white",
  fontFamily = "Arial, Helvetica, sans-serif",
  padding = "0.5rem",
  fontSize = "1rem",
  onChange,
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    color,
    label,
    size,
    fontSize,
    padding,
    borderRadius: "10px",
    border: "1px",
    // cursor: "text",
    alignSelf: "center",
    fontFamily,
  };

  return (
    <>
      <input
        onChange={onChange}
        style={style}
        type="text"
        placeholder="Name..."
      />
      <div></div>
    </>
  );
}

Input.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Input;

// label: PropTypes.string,
// backgroundColor: PropTypes.string,
// size: PropTypes.oneOf(["sm", "md", "lg"]),
// handleClick: PropTypes.func,
