import React from 'react';

function GuessInput({ handleSubmitGuess, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        value={tentativeGuess}
        onChange={event => setTentativeGuess(event.target.value.toUpperCase())}
        required
        pattern='[a-zA-Z]{5}'
        title='Please enter 5 letters'
        id='guess-input'
        disabled={status != 'running'}
        type='text'
      />
      <p>{tentativeGuess}</p>
    </form>
  );
}

export default GuessInput;
