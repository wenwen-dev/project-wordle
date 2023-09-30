import React from 'react';

function GameResultBanner({ status, numOfGuesses, answer }) {
  console.log(status);
  if (status == 'won')
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  else if (status == 'lost')
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
}

export default GameResultBanner;
