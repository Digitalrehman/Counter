import React, { useState } from "react";
import "./App.css";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { GrPowerReset } from "react-icons/gr";
const App = () => {
  let  [value,setValue] = useState(0)

  const incrementHandler = ()=>{
    setValue(value + 1)
  }
  const decrementHandler = ()=>{
    setValue(value -1)

    if(value == 0){
     setValue (value = 0)
    }

  }
  const resetHandler = ()=>{
    setValue(value * 0  )
  }

  return (
    <>
      <div className="container">
        <h1>Couter App </h1>
        <div className="couter">
          <div className="top">{value}</div>
          <div className="bottom">
            <button onClick={incrementHandler}>
              <FaPlus  />
            </button>
            <button onClick={decrementHandler}>
            <TiMinus />
            </button>
            <button onClick={resetHandler}>
              <GrPowerReset/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
