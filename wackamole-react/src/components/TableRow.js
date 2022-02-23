import PropTypes from "prop-types";

function TableRow({
  backgroundColor = "white",
  size = "lg",
  fontFamily = "Arial, Helvetica, sans-serif",
  padding = "0.5rem",
  fontSize = "1rem",
  border = "black solid 2px",
  display = "flex",
  flexDiretion = "row",
  alignItems = "center",
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    size,
    fontSize,
    padding,
    border,
    fontFamily,
    display,
    flexDiretion,
    alignItems,
  };
  return (
    <table>
      <tbody style={style}>
        <tr>
          <td>Table Row</td>
        </tr>
      </tbody>
    </table>
  );
}

TableRow.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default TableRow;
