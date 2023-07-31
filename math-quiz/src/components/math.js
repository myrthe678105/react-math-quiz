import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import '../App.css';

// Import the components we created
import DifficultySelector from './radioButton';
import ExerciseDisplay from './mathQuestion';
import UserInputForm from './userInput';
import ResultMessage from './resultMessage';

const MathExercise = () => {
  const [equation, setEquation] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');

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
    <div className='page'>
      <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
      <ExerciseDisplay equation={equation} />
      <UserInputForm userAnswer={userAnswer} setUserAnswer={setUserAnswer} handleSubmit={handleSubmit} />
      <ResultMessage isCorrect={isCorrect} />
    </div>
  );
};

export default MathExercise;
