import React, { useState } from 'react';
import S from './S';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/h.css'

function SearchClass({ setCurrentClass }) {
  const [searchValueClass, setSearchValueClass] = useState('');
  const navigate = useNavigate();
  const handleSearchClass = (event) => {
    event.preventDefault();
    navigate('/SingleClass');
    setCurrentClass(searchValueClass);
    console.log(searchValueClass)
  };

  const handleInputChangeClass = (event) => {
    setSearchValueClass(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
      <form onSubmit={handleSearchClass}>
        <div className="form-outline">
          <input
            placeholder="Search by class name"
            type="search"
            className="form-control"
            value={searchValueClass}
            onChange={handleInputChangeClass}
          />
          <button type="submit" className="search-button">Search
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div></div>
  );
}

export default SearchClass;
