import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const UserInputForm = ({ userAnswer, setUserAnswer, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='input-form' noValidate>
      <TextField type="number" step="any" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} color="secondary" focused/>
      <Button type="submit" variant="contained">Check Answer</Button>
    </form>
  );
};

export default UserInputForm;
