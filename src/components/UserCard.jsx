import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'

function UserCard({user, getFollowers}) {
 const handleClickFollowers = (url) => {
  getFollowers(url)
 }
 const handleClick = (url) => {
  getFollowers(url)
 }
  return (
   <div key={user.id} className=''> 
   <img src={user.avatar_url} width="300" className="rounded-circle mb-3" alt="..." />
   <p className="fs-4 fw-bold mb-0">{user.name}</p>
   <p className="fs-5 text-muted">{user.login}</p>
   
   <div className="d-grid gap-2">
     <button className="btn btn-outline-secondary" type="button">Follow</button> 
   </div>
   <p className="mt-2">{user.bio}</p>
   <div className='follow'>
    <FontAwesomeIcon icon={faUserGroup} />
     <a className='link-dark text-decoration-none' onClick={() => handleClickFollowers(user)}><span className='fw-bold'>{user.followers}</span> <span className='text-muted'>followers</span> </a>
    <a className='link-dark text-decoration-none' onClick={() => handleClick(user)}><span className='fw-bold'> {user.following}</span> <span className='text-muted'>following</span> </a>
   </div>
   
</div>
  )
}

export default UserCard