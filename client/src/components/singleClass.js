import React from 'react';
import { legends } from '../data';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';


function SingleClass({ currentClass,setCurrentLegend,setDataUpdated }) {
    const handleSearch = (value) => {
        
        navigate('/Single');
        setCurrentLegend(value);
        console.log(value)
      };
  
   
  const navigate = useNavigate();
  const GB = () => {
    navigate('/');
}
  // Use Array.prototype.filter() to create a new array that only contains the
  // legend objects whose name property matches the currentLegend prop
  const filteredLegends = legends.filter((legend) =>
  legend.trait && legend.trait.includes(currentClass)
);
  
console.log(currentClass)
console.log(filteredLegends)
  return (
    <div className="portfolio"> 
            
    <div className="project-list">
        {filteredLegends.map((project) => (
             <div className="project-card" style={{ backgroundImage: `url(${project.mainImg})`, backgroundSize: 'cover', backgroundPosition: 'center',  height: '100%' }}>
                <Link to="/Single" onClick={() => handleSearch(project.name)}>
          <h2>  {project.name}</h2>
          </Link>
          {project.trait[0]  &&<h2> {project.trait[0]}</h2>}
          {project.trait[1]   &&<h2> {project.trait[1]}</h2>}
          {project.trait[2]  &&<h2> {project.trait[2]}</h2>}
                
                {/* <div className="project-description">
                    <h3>{project.descripton}</h3>
                    <a href={project.webpagelink}>Webpage link</a>
                    <a href={project.githublink}>Repo link</a>
                </div> */}
                
                
            </div>
            
        ))}
    </div>
    <div id="bckbutton">
    <h1 onClick={GB}>back</h1>
    </div>
</div>
)}

export default SingleClass