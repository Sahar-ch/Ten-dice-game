import React, { useState } from "react";
import Die from "./components/Die";

const App = () => {
  const createNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.ceil(Math.random() * 6));
    }
    return numbers;
  };

  const [randomNumbers, setRandomNumbers] = useState(createNumbers());

  const dice = randomNumbers.map((number) => {
    return <Die value={number} />;
  });

  const rollHandler = () => {
    setRandomNumbers(createNumbers());
  };
  return (
    <main>
      <div className="dice-container">{dice}</div>
      <button className="roll-button" onClick={rollHandler}>
        ROLL
      </button>
    </main>
  );
};

export default App;
