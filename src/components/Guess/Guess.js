import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : `cell`;

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className='guess'>
      {range(5).map(num => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;

// {range(5).map(num => (
//   <span
//     key={num}
//     className={`cell ${result ? result[num].status : undefined}`}
//   >
//     {result ? result[num].letter : undefined}
//   </span>
// ))}
