import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';

const ResultMessage = ({ isCorrect }) => {
  return (
    <p className='result'>
      {isCorrect !== null && (
        <>
          {isCorrect ? (
            <>
            <h3> Good Job! </h3>
              <FontAwesomeIcon icon={faSquareCheck} style={{ fontSize: '6em', color: '#618f66' }} />
            </>
          ) : (
            <>
            <h3> Try Again </h3>
              <FontAwesomeIcon icon={faSquareXmark} style={{ fontSize: '6em', color: '#d26a6a' }} />
            </>
          )}
        </>
      )}
    </p>
  );
};

export default ResultMessage;
