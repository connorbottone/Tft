import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { legends } from '../data'
import { Link } from 'react-router-dom';
import "../styles/alltraits.css"
import Admin from '../assets/images/admin.png'
import Arsenal from '../assets/images/Arsenal.jpg'
import Anima from '../assets/images/animaSquad.png'
import Aegis from '../assets/images/Aegiss.png'
import Ace from '../assets/images/acee.png'
import Brawler from '../assets/images/brawlerr.png'
import Civilian from '../assets/images/civiliann.png'
import Duelist from '../assets/images/duelist-heart.png'
import Defender from '../assets/images/defenderr.jpg'
import Forecaster from '../assets/images/forecaster.jpg'
import Gadgeteen from '../assets/images/gadgeteen.jpg'
import Hacker from '../assets/images/hacker.png'
import Heart from '../assets/images/heartt.png'
import Lasercorps from '../assets/images/lasercorps.jpg'
import Mascot from '../assets/images/mascot.png'
import Mecha from '../assets/images/mecha_primee.png'
import OxForce from '../assets/images/oxforce.png'
import Prankster from '../assets/images/prankster.png'
import Recon from '../assets/images/recon.png'
import Renagade from '../assets/images/renegade.jpg'
import Supers from '../assets/images/supers.png'
import StarGuardian from '../assets/images/star_guardian.jpg'
import Spellslinger from '../assets/images/spellslinger.png'
import Sureshot from '../assets/images/sureshot.jpg'
import Threat from '../assets/images/threat.png'
import Underground from '../assets/images/underground.png'

import SearchClass from './searchClass';


const traits = [{name:"A.D.M.I.N.",img:Admin},{name:"Arsenal",img:Arsenal},{name:"Anima Squad",img:Anima},{name:"Aegis",img:Aegis},{name:"Ace",img:Ace},{name:"Brawler",img:Brawler},{name:"Civilian",img:Civilian},{name:"Duelist",img:Duelist},{name:"Defender",img:Defender},{name:"Forecaster",img:Forecaster},{name:"Gadgeteen",img:Gadgeteen},{name:"Hacker",img:Hacker},{name:"Heart",img:Heart},{name:"Laser Corps",img:Lasercorps},{name:"Mascot",img:Mascot},{name:"Mecha Prime",img:Mecha},{name:"Ox Force",img:OxForce},{name:"Prankster",img:Prankster},{name:"Recon",img:Recon},{name:"Renagade",img:Renagade},{name:"Supers",img:Supers},{name:"Star Guardian",img:StarGuardian},{name:"Spellslinger",img:Spellslinger},{name:"Sureshot",img:Sureshot},{nsme:"Threat",img:Threat}, {name:"Underground",img:Underground},]

function AllTraits({setCurrentClass}) {
    const navigate = useNavigate();
    const single =(value) => {
        navigate('/SingleClass');
        setCurrentClass(value);
    };
  return (
  <div>
     <SearchClass setCurrentClass={setCurrentClass}/> 
   <div className='traitContainter'>

{traits.map((traits) => (
    <div className="project-card" style={{ backgroundImage: `url(${traits.img})`, backgroundSize: 'cover', backgroundPosition: 'center',  height: '10%' }}>
<Link id="link" to="/SingleClass" onClick={() => single(traits.name)}>
            {traits.name}
          </Link>
</div>
))}

    </div></div>
  )
}


export default AllTraits