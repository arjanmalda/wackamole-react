import React, { useState } from "react";

const Game = ({
  run,
  pause,
  stylingLeft,
  stylingMiddle,
  stylingRight,
  leftClick,
  middleClick,
  rightClick,
}) => {
  return (
    <>
      <div className="stopButton" onClick={pause}>
        Pause!
      </div>
      <div className="startButton" onClick={run}>
        Start!
      </div>
      <div onMouseDown={leftClick} className={stylingLeft}></div>
      <div onMouseDown={middleClick} className={stylingMiddle}></div>
      <div onMouseDown={rightClick} className={stylingRight}></div>
    </>
  );
};

export default Game;
