import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";
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
  const [win, setWin] = useState(false);
  const [rollCounter, setRollCounter] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    const firstNumber = randomNumbers[0].number;
    const checkWin = randomNumbers.every((die) => {
      return die.selected && die.number === firstNumber;
    });
    if (checkWin) {
      setWin(true);
    }
  }, [randomNumbers]);

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
    if (win) {
      setRandomNumbers(createNumbers());
      setWin(false);
      if (highestScore === 0) {
        setHighestScore(rollCounter);
      } else {
        if (highestScore > rollCounter) {
          setHighestScore(rollCounter);
        }
      }
      setRollCounter(0);
    } else {
      setRollCounter((prevState) => {
        return prevState + 1;
      });
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
    }
  };

  const style = {
    backgroundColor: win ? "#C45DF8" : "#20a3f4",
  };
  return (
    <main>
      {win && <Confetti />}
      <h1>Tenzies</h1>
      <h4 className="description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </h4>
      <div className="dice-container">{dice}</div>
      <button style={style} className="roll-button" onClick={rollHandler}>
        {win ? "Start New Game" : "ROLL"}
      </button>
      <h5>
        Roll Count: {rollCounter} / Fastest Game: {highestScore}
      </h5>
    </main>
  );
};

export default App;
