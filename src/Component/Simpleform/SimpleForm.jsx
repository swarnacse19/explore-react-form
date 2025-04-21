import React from 'react';

function SimpleForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name'/>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SimpleForm;