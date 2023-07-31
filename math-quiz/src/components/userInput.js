import React from 'react';
import Button from '@mui/material/Button';

const UserInputForm = ({ userAnswer, setUserAnswer, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      {/* <button type="submit">Submit</button> */}
      <Button type="submit" variant="contained">Check Answer</Button>
    </form>
  );
};

export default UserInputForm;
