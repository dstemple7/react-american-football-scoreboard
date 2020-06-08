import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [quarterNow, setQuarter] = useState(1)
  const quarterKeeper = () => {
    setQuarter(quarterNow < 4 ? quarterNow +1 : quarterNow -3)
  }

  const [downNow, setDown] = useState(1)
  const downKeeper = () => {
    setDown(downNow < 4 ? downNow +1 : downNow -3)
  }

  const [toGoNow, ballToGo] = useState(10)
  const ballKeeper = () => {
    ballToGo(toGoNow < 31 ? toGoNow +7 : toGoNow -21)
  }

  const [ballOnNow, moveBall] = useState(1)
  const ballPosition = () => {
    moveBall(ballOnNow < 50 ? ballOnNow + 10 : ballOnNow -10)
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{downNow}</div>
        <button onClick={() => downKeeper()}>Advance</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGoNow}</div>
        <button onClick={() => ballKeeper()}>Advance</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOnNow}</div>
        <button onClick={() => ballPosition()}>Advance</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterNow}</div>
        <button onClick={() => quarterKeeper()}>Next</button>
      </div>
    </div>
  );
};

export default BottomRow;


