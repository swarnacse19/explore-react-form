import React, { useState } from "react";

function ControlledField() {

    const [password, setPassword] = useState('');

    const handlePasswordOnChange = e => {
      console.log(e.target.value);
      setPassword(e.target.value);

      // if (password.length < 6) {
      //     setError('Password must be 6 characters or longer.')
      // }
      // else{
      //     setError('');
      // }
  }

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControlledField;
