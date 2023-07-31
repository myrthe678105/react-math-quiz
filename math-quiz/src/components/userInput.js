import React from 'react';

const UserInputForm = ({ userAnswer, setUserAnswer, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInputForm;
