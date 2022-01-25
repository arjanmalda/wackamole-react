import React from "react";
import { useState } from "react";
import { NameContext } from "./App";

const Gameover = ({ stylingPopup, score, updateHighscoreArray }) => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("score = " + score + ", name = " + name);

    updateHighscoreArray(name);
  };

  return (
    <>
      <div className={stylingPopup}>
        <div className="pop-up-content">
          <div className="gameOver">Game over!</div>
          <div className="pop-up-mole"></div>
          <form className="nameInput" action="" onSubmit={handleSubmit}>
            <input
              className="playerNameInput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
            <input
              value={"Submit"}
              className="submitButton"
              type="submit"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Gameover;
