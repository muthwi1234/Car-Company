import React, { useState } from 'react';

function SignUp() {
  const [firstName, setFirstName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <>
      <input 
        type='text' 
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder='First Name'
      />
    </>
  );
}

export default SignUp;
