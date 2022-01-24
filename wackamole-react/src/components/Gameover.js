import React from "react";
import { useState } from "react";
import { NameContext } from "./App";

const Gameover = ({ stylingPopup, updateHighscores, score }) => {
  const [name, setName] = useState("");

  const updateHighscoreArray = (e) => {
    e.preventDefault();

    updateHighscores({ name, score });
    // setName("");
  };

  return (
    <>
      <div className={stylingPopup}>
        <div className="pop-up-content">
          <div className="gameOver">Game over!</div>
          <div className="pop-up-mole"></div>
          <form className="nameInput" action="" onSubmit={updateHighscoreArray}>
            <input
              className="playerNameInput"
              type="text"
              placeholder="Name"
              value={""}
              onChange={(e) => setName(e.target.name)}
            />
            <input
              value={"Submit"}
              className="submitButton"
              type="submit"
              // onClick={updateHighscoreArray}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Gameover;
