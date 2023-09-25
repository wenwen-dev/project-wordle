import React from 'react';

function GuessInput({ handleSubmit }) {
  const [word, setWord] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ word });
    setWord('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        value={word}
        onChange={event => setWord(event.target.value.toUpperCase())}
        required
        pattern='[a-zA-Z]{5}'
        title='Please enter 5 letters'
        id='guess-input'
        type='text'
      />
      <p>{word}</p>
    </form>
  );
}

export default GuessInput;
