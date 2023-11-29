import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';

export default function Searchbar () {
  
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    // Update input state with the new value
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (      
    <div>
      <form action="" onSubmit={handleSearch}>
        <input 
          type="text" 
          name="searchbar" 
          placeholder="Search..."
          value={input} 
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};