import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop,faCircle, faStar } from '@fortawesome/free-solid-svg-icons'

function RepoContent({repo, colorLanguage, isCard}) {
  return (
   <div className='d-flex flex-column justify-content-between' style={{height: '82px'}}>
    <div>
     {
      isCard && (
       <FontAwesomeIcon icon={faDesktop} style={{color:'#6c757d'}} />
      )
     }
    
      <a href="#" className="card-link mx-2 text-decoration-none">{repo.name}</a><span className="badge text-bg-light border rounded-pill">{repo.visibility}</span> 
      
      {
        isCard &&  repo.description ? (<p className="card-subtitle my-2  text-truncate" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-title={repo.description} style={{maxWidth: '350px'}}>{repo.description}</p>) : (<p>{repo.description}</p>)
      } 
    </div>
    <div>
      {
        repo.language && (<span className='mb-0 text-muted me-2 mt-auto' style={{fontSize: '12px'}}><FontAwesomeIcon icon={faCircle} style={{color:colorLanguage[repo.language]}} /> {repo.language}</span>)
      }
      { 
        repo.stargazers_count > 0 && (<span className='mb-0 text-muted mt-auto' style={{fontSize: '12px'}}><FontAwesomeIcon icon={faStar} style={{color:'#3572A5'}} /> {repo.stargazers_count}</span>)
      }
     </div>  
 
   </div>
  )
}

export default RepoContent