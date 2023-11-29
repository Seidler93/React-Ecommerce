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
    <form className="form-inline my-2 my-lg-0 d-flex" onSubmit={handleSearch}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
      <button className="btn btn-outline-success my-2 my-sm-0 ms-2" type="submit">Search</button>
    </form>
  );
};