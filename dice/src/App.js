import React, { useState } from "react";
import Die from "./components/Die";

const App = () => {
  const createNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push({
        id: i,
        selected: false,
        number: Math.ceil(Math.random() * 6),
      });
    }
    return numbers;
  };

  const [randomNumbers, setRandomNumbers] = useState(createNumbers());

  const selectHandler = (id) => {
    setRandomNumbers((prevState) => {
      return prevState.map((die) => {
        return die.id === id ? { ...die, selected: !die.selected } : die;
      });
    });
  };

  const dice = randomNumbers.map((obj) => {
    return (
      <Die
        value={obj.number}
        isSelected={obj.selected}
        key={obj.id}
        id={obj.id}
        onSelectHandler={selectHandler}
      />
    );
  });

  const rollHandler = () => {
    setRandomNumbers((prevState) => {
      return prevState.map((die) => {
        // let result;
        // if (die.selected) {
        //   result = die;
        // } else {
        //   result = {
        //     ...die,
        //     number: Math.ceil(Math.random() * 6),
        //   };
        // }
        // return result;

        return die.selected
          ? die
          : {
              ...die,
              number: Math.ceil(Math.random() * 6),
            };
      });
    });
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
