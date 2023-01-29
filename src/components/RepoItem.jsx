import React from 'react'
import RepoContent from './RepoContent'

function RepoItem({repo, colorLanguage}) {
  return (
    <div className='pb-3 mb-3 border-bottom'>
     <RepoContent repo={repo} colorLanguage={colorLanguage} isCard={false} />
    </div>
  )
}

export default RepoItem