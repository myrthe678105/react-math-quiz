import React, { useState, useEffect } from 'react';
import _ from 'lodash';

const MathExercise = () => {
  const [equation, setEquation] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [difficulty, setDifficulty] = useState('easy'); // 'easy' or 'difficult'

  useEffect(() => {
    generateExercise();
  }, [difficulty]);

  const generateRandomNumbers = (min, max) => {
    return _.random(min, max);
  };

  const generateRandomOperator = () => {
    const operators = ['+', '-', '*', '/'];
    return _.sample(operators);
  };
  const generateSingleEquation = () => {
    let operator;
    operator = generateRandomOperator();
    setEquation(`${generateRandomNumbers(1, 10)} ${operator} ${generateRandomNumbers(1, 10)}`);
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
    } else{
        expectedResult = evaluatedResult.toString();
    }
    console.log(expectedResult);
  
    if (userParsedAnswer === parseFloat(expectedResult)) { //check for correct answer, if correct, new question after 3 seconds
        setIsCorrect(true);
        setTimeout(() => {
            setUserAnswer('');
          generateExercise(); 
          setIsCorrect(null);
        }, 2000);
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
