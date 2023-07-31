import React from 'react';

const ExerciseDisplay = ({ equation }) => {
  const formattedEquation = equation.replace(/\//g, '÷').replace(/\*/g, 'x');
  return (
    <div className='math-question'>
      <span className='small-text'>Solve the following exercise:</span> <br /> {formattedEquation}
    </div>
  );
};

export default ExerciseDisplay;
