import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const DifficultySelector = ({ difficulty, setDifficulty }) => {
  const difficultyChange = () => {
    setDifficulty((prevDifficulty) =>
      prevDifficulty === 'easy' ? 'difficult' : 'easy'
    );
  };

  return (
    <div className="radioBtn-container">
      <FormControlLabel
        control={
          <Switch
            checked={difficulty === 'difficult'}
            onChange={difficultyChange}
            color="primary"
          />
        }
        label={difficulty === 'difficult' ? 'Difficult' : 'Easy'} style={{ color: 'white' }}
      />
    </div>
  );
};

export default DifficultySelector;
