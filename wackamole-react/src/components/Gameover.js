import React from "react";
import { useState } from "react";
import Button from "./Button";

const Gameover = ({ stylingPopup, updateHighscores }) => {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");

    updateHighscores(name);
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
            <Button
              value={"Submit"}
              // className="submitButton"
              type="submit"
              onChange={handleChange}
            >
              Submit!
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Gameover;
