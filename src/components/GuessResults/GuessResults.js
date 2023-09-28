import React from 'react';
import GuessGrid from '../Guess/GuessGrid';

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      <GuessGrid guesses={guesses} />
    </div>
  );
}

export default GuessResults;
