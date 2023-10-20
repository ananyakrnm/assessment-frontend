import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const generateGreeting = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={Greeting}> Greeting</button>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
