import PropTypes from "prop-types";

const Highscores = ({ highscores }) => {
  return (
    <div className="highscoreContainer">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Highscore</th>
          </tr>
        </thead>
        <tbody>
          {highscores &&
            highscores.map((highscore) => {
              return (
                <tr key={highscore.id}>
                  <td>{highscore.id}</td>
                  <td>{highscore.name}</td>
                  <td>{highscore.score}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

Highscores.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Highscores;
