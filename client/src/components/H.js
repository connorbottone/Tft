import React, { useState } from 'react';
import S from './S';
import { useNavigate } from 'react-router-dom';
import '../styles/h.css'
import { Link } from 'react-router-dom';
function H({ setCurrentLegend, setCurrentClass }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchValueClass, setSearchValueClass] = useState('');
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    navigate('/Single');
    setCurrentLegend(searchValue);
  };
  const handleSearchClass = (event) => {
    event.preventDefault();
    navigate('/SingleClass');
    setCurrentClass(searchValueClass);
    console.log(searchValueClass);
  };
  const handleInputChangeClass = (event) => {
    setSearchValueClass(event.target.value);
  };
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
    
     <div className="search-container">
     
      <form onSubmit={handleSearch}>
        <div className="form-outline">
          
          <input
            placeholder="Search by Legend name"
            type="search"
            className="form-control"
            value={searchValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-button">Search
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
     <Link className="switchSearch" to="/AllTraits">View all Traits</Link>
    </div> 
   </div>
  );
}

export default H;
