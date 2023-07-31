import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    success: {
      main: '#ac72af',
    },
  },
});

const UserInputForm = ({ userAnswer, setUserAnswer, handleSubmit }) => {
  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} className='input-form' noValidate>
        <TextField
          type="number"
          step="any"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          focused
        />
        <Button className="btn" type="submit" variant="contained" color="success">
          Check Answer
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default UserInputForm;
