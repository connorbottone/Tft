import React, { useState } from 'react';
import { legends } from '../data';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { useMutation, } from '@apollo/client';
import { ADD_FAV } from '../utils/mutations';
import Auth from '../utils/auth';
import loggedIn from '../utils/auth';
function S({ currentLegend, setCurrentPage, setDataUpdated }) {
  const [mutateAddFavorite] = useMutation(ADD_FAV);
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();
  const GB = () => {
    navigate('/');
  }
  // Use Array.prototype.filter() to create a new array that only contains the
  // legend objects whose name property matches the currentLegend prop
  const filteredLegends = legends.filter((legend) =>
    legend.name.toLowerCase().includes(currentLegend.toLowerCase())
  );

  const handleAddFavorite = (name) => {
    const username = Auth.getProfile().data.username;
    if (loggedIn)
      mutateAddFavorite({
        variables: {
          username: username,
          name: name,
        },
      }).then((res) => {
        setDataUpdated(true);
        setNotification('Added to favorites!');
      });
  };

  return (
    <div className="portfolio">

      <div className="project-list">
        {filteredLegends.map((project) => (
        <div className="project-card" style={{ backgroundImage: `url(${project.mainImg})`, backgroundSize: 'cover', backgroundPosition: 'center',  height: '100%' }}>
            <h2>{project.name}</h2>
            {project.trait[0] && <h2>{project.trait[0]}</h2>}
            {project.trait[1] && <h2>{project.trait[1]}</h2>}
            {project.trait[2] && <h2>{project.trait[2]}</h2>}
            <div className="project-image-container">
              {/* <img id="img" src={project.image}></img> */}
              <img src={project.itm0img}></img>
              <ul>{project.itm[0]}</ul>

              <li>{project.bldItm0[0]}</li>
              <li>{project.bldItm0[1]}</li>
              <img src={project.itm1img}></img>
              <ul>{project.itm[1]}</ul>
              <li>{project.bldItm1[0]}</li>
              <li>{project.bldItm1[1]}</li>
              <img src={project.itm2img}></img>
              <ul>{project.itm[2]}</ul>
              <li>{project.bldItm2[0]}</li>
              <li>{project.bldItm2[1]}</li>
            </div>
            {/* <div className="project-description">
                    <h3>{project.descripton}</h3>
                    <a href={project.webpagelink}>Webpage link</a>
                    <a href={project.githublink}>Repo link</a>
                </div> */}
            <button id='bckbutton' onClick={() => handleAddFavorite(project.name)}>Add favorite</button>
            <h1>{notification}</h1>
          </div>

        ))}
      </div>
      <div id="bckbutton">
        <h1 onClick={GB}>Back</h1>
      </div>
    </div>
  )
}

export default S