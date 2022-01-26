import Highscore from "./Highscore";

const Highscores = ({ highscoreArray }) => {
  console.log("Highscores: ", highscoreArray);

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
          <Highscore highscoreArray={highscoreArray} />
        </tbody>
      </table>
    </div>
  );
};

export default Highscores;
