import React from 'react'
import RepoContent from './RepoContent'

function RepoCard({repo,colorLanguage}) {
  
  return (
   <div  className="card mb-2" style={{ minHeight: '122px'}}>
   <div className="card-body">
    <RepoContent repo={repo} colorLanguage={colorLanguage} isCard={true} />
   </div>
 
 </div>
  )
}

export default RepoCard