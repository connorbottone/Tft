import React from 'react';
import { Link } from 'react-router-dom';
import tft from '../assets/images/tft.jpeg'
import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <header className="bg-primary headeracount text-light mb-4 py-3">
  <div className="header">
    
    <Link to="/">
      <img id="headerimg" src={tft} alt="Logo" />
      
    </Link>

    {Auth.loggedIn() ? (
      <>
        <div className="username"></div>
         <Link className="headeracount" to="/me">
          {Auth.getProfile().data.username}
        </Link>
        <button className="headeracount logout-login" onClick={logout}>
          Logout
        </button>
      </>
    ) : (
      <>
        <Link className="headeracount username" to="/login">
          Login
        </Link>
        <Link className="headeracount logout-login" to="/signup">
          Signup
        </Link>
      </>
    )}
  </div>
</header>

  );
};

export default Header;
