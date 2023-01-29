import React from 'react'
import RepoCard from './RepoCard'
import RepoItem from './RepoItem'

function RepoList({repos, type}) {
 const colorLanguage = {'JavaScript': '#f1e05a','HTML': '#e34c26','TypeScript': '#3178c6','Python': '#3572A5', 'CSS': '#563d7c', 'PHP': '#4F5D95', 'Java': '#b07219', 'C': '#555555' }
  return (
   <div className='row'>
     {
        type === 'card' && repos.length > 0 && repos.map((repo) => (
         <div key={repo.id} className='col-6'>
           <RepoCard repo={repo} colorLanguage={colorLanguage} />
         </div>
       ))  
     }
     {
        type === 'list' && repos.length > 0 && repos.map((repo) => (
         <div key={repo.id} className='col-12'>
           <RepoItem repo={repo} colorLanguage={colorLanguage} />
         </div>
       ))  
     }
    </div>
  )
}

export default RepoList