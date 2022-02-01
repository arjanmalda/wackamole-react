import Header from "./Header";
import Game from "./Game";
import React, { useEffect, useState } from "react";
import Highscores from "./Highscores";
import Gameover from "./Gameover";
import sound from "./sound-effects/explosionSound.mp3";

const App = () => {
  const [stylingLeft, setStylingLeft] = useState("left");
  const [stylingMiddle, setStylingMiddle] = useState("middle");
  const [stylingRight, setStylingRight] = useState("right");
  const [stylingPopup, setStylingPopup] = useState("pop-up");

  let [score, setScore] = useState(0);
  let [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState("");

  const [highscores, setHighscores] = useState(null);

  const getHighscores = () => {
    fetch("http://localhost:5000/highscores")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setHighscores(data);
      });
  };
  useEffect(() => {
    getHighscores();
  }, []);

  const start = () => {
    setCounter((counter = Math.floor(Math.random() * 3)));

    if (counter === 0) {
      setStylingLeft("left-active");
      setStylingMiddle("middle");
      setStylingRight("right");
    }

    if (counter === 1) {
      setStylingMiddle("middle-active");
      setStylingLeft("left");
      setStylingRight("right");
    }

    if (counter === 2) {
      setStylingRight("right-active");
      setStylingMiddle("middle");
      setStylingLeft("left");
    }
  };

  const run = () => {
    setScore((score = 0));
    setTimer(
      setInterval(() => {
        start();
      }, 800)
    );
  };

  const pause = () => {
    clearInterval(timer);
  };

  const stop = () => {
    clearInterval(timer);

    if (counter === 1 || counter === 2) {
      setStylingLeft("left-game-over");
      setStylingMiddle("middle");
      setStylingRight("right");
      setStylingPopup("pop-up-active");
    } else if (counter === 0 || counter === 2) {
      setStylingMiddle("middle-game-over");
      setStylingLeft("left");
      setStylingRight("right");
      setStylingPopup("pop-up-active");
    } else if (counter === 0 || counter === 1) {
      setStylingRight("right-game-over");
      setStylingMiddle("middle");
      setStylingLeft("left");
      setStylingPopup("pop-up-active");
    }
  };

  const playAudio = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const leftClick = () => {
    if (counter === 0) {
      setScore(score + 1);
    } else {
      stop();
      playAudio();
    }
  };

  const middleClick = () => {
    if (counter === 1) {
      setScore(score + 1);
    } else {
      stop();
      playAudio();
    }
  };

  const rightClick = () => {
    if (counter === 2) {
      setScore(score + 1);
    } else {
      stop();
      playAudio();
    }
  };

  const replaceHighscoreData = (i, name, score) => {
    fetch(`http://localhost:5000/highscores/${i}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: i + 1,
        name: name,
        score: score,
      }),
    }).then(() => {});
    console.log(`highscores replaced`, highscores);
  };

  const updateHighscores = (name) => {
    const newHighscores = highscores;

    if (score >= newHighscores[0].score) {
      newHighscores.unshift({ id: 1, name: name, score: score });
      newHighscores.pop();
    } else {
      for (let i = 1; i < newHighscores.length; i++) {
        if (score >= newHighscores[i].score) {
          newHighscores.splice(i, 0, {
            id: i + 1,
            name: name,
            score: score,
          });
          newHighscores.pop();
          break;
        } else if (score >= newHighscores[9].score) {
          newHighscores.splice(9, 1, { id: 10, name: name, score: score });
        }
      }
    }
    // re-arrange id's
    for (let i = 0; i < newHighscores.length; i++) {
      newHighscores[i].id = i + 1;
      replaceHighscoreData(
        i + 1,
        newHighscores[i].name,
        newHighscores[i].score
      );
    }
    setHighscores(highscores, newHighscores);

    setStylingPopup("pop-up");
    setStylingMiddle("middle");
    setStylingLeft("left");
    setStylingRight("right");
  };

  return (
    <div className="container">
      <Header score={score} />
      <Game
        leftClick={leftClick}
        middleClick={middleClick}
        rightClick={rightClick}
        run={run}
        pause={pause}
        stylingLeft={stylingLeft}
        stylingMiddle={stylingMiddle}
        stylingRight={stylingRight}
      />
      <Gameover
        stylingPopup={stylingPopup}
        updateHighscores={updateHighscores}
      />
      {highscores && <Highscores highscores={highscores} />}
    </div>
  );
};

// };

export default App;
