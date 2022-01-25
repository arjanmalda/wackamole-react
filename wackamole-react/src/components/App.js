import Header from "./Header";
import Game from "./Game";
import React, { useState } from "react";
import Highscores from "./Highscores";
import Gameover from "./Gameover";

const AUDIO = new Audio("./components/sound-effects/explosionSound.mp3");
let timer;

const App = () => {
  const [stylingLeft, setStylingLeft] = useState("left");
  const [stylingMiddle, setStylingMiddle] = useState("middle");
  const [stylingRight, setStylingRight] = useState("right");
  const [stylingPopup, setStylingPopup] = useState("pop-up");

  // const [playerName, setPlayerName] = useState("");
  // const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  let counter = 0;

  const [highscoreArray, setHighscoreArray] = useState([
    ["a", 0],
    ["a", 0],
    ["a", 0],
    ["a", 0],
    ["a", 0],
    ["a", 0],
    ["a", 0],
    ["a", 0],
    ["a", 0],
    ["a", 0],
  ]);

  const updateHighscoreArray = (name) => {
    setHighscoreArray(highscoreArray.unshift([name, score]));
    setHighscoreArray(highscoreArray.pop());
    console.log(highscoreArray);
  };

  const start = () => {
    counter = Math.floor(Math.random() * 3);

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

  const leftClick = () => {
    if (counter === 0) {
      setScore((prevScore) => prevScore + 1);
    } else {
      stop();
    }
    console.log(counter);
    console.log("score:" + score);
    console.log(stylingLeft);
  };

  const middleClick = () => {
    if (counter === 1) {
      setScore((prevScore) => prevScore + 1);
    } else {
      stop();
    }
    console.log(counter);
    console.log("score:" + score);
    console.log(stylingMiddle);
  };

  const rightClick = () => {
    if (counter === 2) {
      setScore((prevScore) => prevScore + 1);
    } else {
      stop();
    }
    console.log(counter);
    console.log("score:" + score);
    console.log(stylingRight);
  };

  const run = () => {
    timer = setInterval(start, 800);
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

  // const assignScore = () => {
  //   if (score >= highscoreArray[0][1]) {
  //     highscoreArray.unshift([NameContext.Provider.name, score]);
  //     highscoreArray.splice(-1);
  //   }
  //   console.log(highscoreArray);
  // };

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
        score={score}
        updateHighscoreArray={updateHighscoreArray}
      />
      <Highscores />
    </div>
  );
};

export default App;
