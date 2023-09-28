import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guesses }) {
  const displayedGuesses = guesses.slice(0, NUM_OF_GUESSES_ALLOWED);

  const gridRange = range(0, NUM_OF_GUESSES_ALLOWED);

  return (
    <>
      {gridRange.map(row => (
        <p className='guess' key={row}>
          {displayedGuesses[row]
            ? displayedGuesses[row].split('').map((letter, index) => (
                <span className='cell' key={index}>
                  {letter}
                </span>
              ))
            : range(0, 5).map(col => (
                <span className='cell' key={col}>
                  {' '}
                </span>
              ))}{' '}
        </p>
      ))}
    </>
  );
}

export default Guess;
