import PropTypes from "prop-types";

function TableHeader({
  backgroundColor = "rgb(4,170,109)",
  color = "white",
  fontFamily = "Arial, Helvetica, sans-serif",
  padding = "0.5rem",
  fontSize = "1rem",
  border = "black solid 2px",
  display = "flex",
  flexDiretion = "row",
  alignItems = "center",
}) {
  const style = {
    backgroundColor,
    color,
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
      <thead style={style}>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Highscore</th>
        </tr>
      </thead>
    </table>
  );
}

TableHeader.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default TableHeader;
