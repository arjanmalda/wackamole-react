import Header from "./Header";
import Game from "./Game";
import React, { useState } from "react";
import Highscores from "./Highscores";
import Gameover from "./Gameover";
// const Datastore = require("nedb");
// const database = new Datastore();
// database.loadDatabase();

// const AUDIO = new Audio("./components/sound-effects/explosionSound.mp3");

const App = () => {
  const [stylingLeft, setStylingLeft] = useState("left");
  const [stylingMiddle, setStylingMiddle] = useState("middle");
  const [stylingRight, setStylingRight] = useState("right");
  const [stylingPopup, setStylingPopup] = useState("pop-up");

  let [score, setScore] = useState(0);
  let [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState("");

  const [highscoreArray, setHighscoreArray] = useState([
    ["Arjan", 100],
    ["Arjan", 4],
    ["Arjan", 3],
    ["Arjan", 2],
    ["Arjan", 1],
    ["Arjan", 0],
    ["Arjan", 0],
    ["Arjan", 0],
    ["Arjan", 0],
    ["Arjan", 0],
  ]);

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
    // AUDIO.play();
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

  const leftClick = () => {
    if (counter === 0) {
      setScore(score + 1);
    } else {
      stop();
    }
  };

  const middleClick = () => {
    if (counter === 1) {
      setScore(score + 1);
    } else {
      stop();
    }
  };

  const rightClick = () => {
    if (counter === 2) {
      setScore(score + 1);
    } else {
      stop();
    }
  };

  const updateHighscoreArray = (name) => {
    if (score >= highscoreArray[0][1]) {
      setHighscoreArray([highscoreArray.unshift([name, score])]);
      setHighscoreArray(highscoreArray.pop());
    } else {
      for (let i = 1; i < highscoreArray.length; i++) {
        if (score >= highscoreArray[i][1]) {
          setHighscoreArray(highscoreArray.splice(i, 0, [name, score]));
          setHighscoreArray(highscoreArray.pop());
          break;
        } else if (score >= highscoreArray[9][1]) {
          setHighscoreArray(highscoreArray.splice(9, 1, [name, score]));
        }
      }
    }
    setHighscoreArray(highscoreArray, ...highscoreArray);
    setStylingPopup("pop-up");

    console.log("App: ", highscoreArray);
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
        stop={stop}
        stylingLeft={stylingLeft}
        stylingMiddle={stylingMiddle}
        stylingRight={stylingRight}
      />
      <Gameover
        stylingPopup={stylingPopup}
        updateHighscoreArray={updateHighscoreArray}
      />
      <Highscores highscoreArray={highscoreArray} />
    </div>
  );
};

export default App;
