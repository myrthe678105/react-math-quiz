import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const MathExercise = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [equation, setEquation] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [difficulty, setDifficulty] = useState('easy'); // 'easy' or 'difficult'

  useEffect(() => {
    generateExercise();
  }, [difficulty]);

  const generateRandomNumbers = () => {
    setA(_.random(1, 10));
    setB(_.random(1, 10));
  };

  const generateRandomOperator = () => {
    const operators = ['+', '-', '*', '/'];
    return _.sample(operators);
  };

  const generateSingleEquation = () => {
    let operator;
    do { //this loop makes sure that the math question can never be '0/0'
      generateRandomNumbers();
      operator = generateRandomOperator();
    } while (operator === '/' && b === 0); 
    setEquation(`${a} ${operator} ${b}`);
  };

  const generateDifficultEquation = () => {
    const numOperands = _.random(2, 5); // number of operations
    const operands = Array.from({ length: numOperands }, () => _.random(1, 10)); // Random operands array
    const equation = operands.reduce((acc, operand, index) => {
      const randomOperator = generateRandomOperator();
      const separator = index === 0 ? '' : ' ' + randomOperator + ' ';
      return acc + separator + operand;
    }, '');

    setEquation(equation);
  };

  const generateExercise = () => {
    if (difficulty === 'easy') {
      generateSingleEquation();
    } else if (difficulty === 'difficult') {
      generateDifficultEquation();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const evaluatedResult = eval(equation);
    const userParsedAnswer = parseFloat(userAnswer);
  
    let expectedResult;
    if (evaluatedResult % 1 !== 0) { // if answer has dec places, change expected result to 2 dec places
      expectedResult = evaluatedResult.toFixed(2);
    }
    console.log(expectedResult);
  
    if (userParsedAnswer === parseFloat(expectedResult)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  

  return (
    <div>
      <h1>Math Exercise</h1>
      <div>
        <label>
          <input
            type="radio"
            value="easy"
            checked={difficulty === 'easy'}
            onChange={() => setDifficulty('easy')}
          />
          Easy
        </label>
        <label>
          <input
            type="radio"
            value="difficult"
            checked={difficulty === 'difficult'}
            onChange={() => setDifficulty('difficult')}
          />
          Difficult
        </label>
      </div>
      <p>
        Solve the following exercise: {equation}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Correct!' : 'Incorrect. Try again.'}</p>
      )}
    </div>
  );
};

export default MathExercise;
