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

export default Highscores;
