import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  
  const increaseNumber = () => {
    setNumber(number +1);
    //setNumber (prevNumber => prevNumber + 1) 이렇게 해도 됨
  };

  const decreaseNumber = () => {
    setNumber(number -1);
    //setNmber (prevNumber => prevNumber -1) 역시 이렇게도 가능
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increaseNumber}>+1</button>&nbsp;
      <button onClick={decreaseNumber}>-1</button>
    </div>
  );
};

export default App;