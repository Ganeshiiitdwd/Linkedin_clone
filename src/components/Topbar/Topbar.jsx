import React from 'react'
import './Topbar.css'
import logo from './linked.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers , faBriefcase, faMagnifyingGlass, faMessage,faBell,faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
function Topbar() {
  const navigate=useNavigate();
  //route is user define it can be anything
  const linkning=(route)=>{
       navigate(route);
       console.log("done")
  }
  return (
    <div className='topbar-main'>
     <img src={logo} alt='..' className='logo1'></img>
     <div className='logos'>
     <FontAwesomeIcon icon={faMagnifyingGlass} className='logo' />  
     <FontAwesomeIcon icon={faHouse} className='logo'onClick={()=>{linkning('/home')}} />
     <FontAwesomeIcon icon={faUsers} className='logo'  />
     <FontAwesomeIcon icon={faBriefcase} className='logo' />
     <FontAwesomeIcon icon={faMessage} className='logo' />
     <FontAwesomeIcon icon={faBell} className='logo' />
    <FontAwesomeIcon icon={faUser} className='logo adjust' onClick={()=>{linkning('/profile')}}/>
     </div>
     
    </div>
  )
}

export default Topbar
