import React from 'react';

const ResultMessage = ({ isCorrect }) => {
  return (
    <p>{isCorrect !== null && (isCorrect ? 'Correct!' : 'Incorrect. Try again.')}</p>
  );
};

export default ResultMessage;
