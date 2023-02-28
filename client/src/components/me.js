import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';

function Me({ setCurrentLegend,dataUpdated }) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (value) => {
    navigate('/Single');
    setCurrentLegend(value);
  };

  const username = Auth.getProfile().data.username;

  const { loading, data,refetch } = useQuery(QUERY_USER, {
    variables: { username },
  });
  useEffect(() => {
    refetch();
  }, [dataUpdated, refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  const { user } = data;



  return (
    
    
    <div>
      
      <h2>{user.username}'s Favorites</h2>
      
      {user.favorites.map((favorite) => (
        <div key={favorite.name}>
          <Link to="/Single" onClick={() => handleSearch(favorite.name)}>
            {favorite.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Me;
