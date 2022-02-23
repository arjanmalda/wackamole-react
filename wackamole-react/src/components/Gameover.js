import React from "react";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const Gameover = ({ stylingPopup, updateHighscores }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const nameValidation = () => {};

  function handleChange(e) {
    setName(e.target.value);

    const regEx =
      /^(?!\s*$)[\s[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ._-]+$/g;
    console.log(name);
    if (regEx.test(name)) {
      setMessage("Valid name");
    } else {
      setMessage("Name is not valid");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message === "Valid name") {
      setTimeout(() => {
        updateHighscores(name);
        setName("");
      }, 500);
    }
  };

  return (
    <>
      <div className={stylingPopup}>
        <div className="pop-up-content">
          <div className="gameOver">Game over!</div>
          <div className="pop-up-mole"></div>
          <form className="nameInput" action="" onSubmit={handleSubmit}>
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <Input value={name} onChange={handleChange} />
              <div>{message}</div>
              <Button
                value={"Submit"}
                handleClick={handleSubmit}
                onClick={nameValidation}
                // className="submitButton"
                // type={"submit"}
              >
                Submit!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Gameover;
