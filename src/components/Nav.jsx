import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faRotateLeft, faDesktop } from '@fortawesome/free-solid-svg-icons'

function Nav({showView,quantityRepos, handleView}) {
 const handleClick = (view) => {
  handleView(view)
 }
  return (
   <ul className="nav nav-pills mb-3">
     <li className="nav-item">        
       <a className={ `nav-link ${showView === 'user' ? 'active' : '' }` }  aria-current="page" href="#" onClick={() => handleClick('user')} >
         <FontAwesomeIcon icon={faBookOpen} className="me-2" />
         Overview
       </a>
     </li>
     <li className="nav-item">
       <a className={ `nav-link ${showView === 'repo' ? 'active' : '' }` } href="#" onClick={() => handleClick('repo')} >
       <FontAwesomeIcon icon={faDesktop} className="me-2" /> 
         Repositories 
         <span className="badge rounded-pill text-bg-light ms-2">{quantityRepos}</span>
       </a>
     </li>
     <li className="nav-item">
       <a className="nav-link"  onClick={() => handleClick('listUsers')}>
         <FontAwesomeIcon icon={faRotateLeft} className="me-2" /> 
         Go Back List Users
       </a>
     </li>
   </ul>
  )
}

export default Nav