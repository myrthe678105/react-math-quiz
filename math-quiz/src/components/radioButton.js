import React from 'react';

const DifficultySelector = ({ difficulty, setDifficulty }) => {
  return (
    <div className="component-container">
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
  );
};

export default DifficultySelector;
