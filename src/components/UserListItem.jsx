import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const UserListItem = ({user, index,showRepo,getUserData}) => {

//  const handleClickRepo = (url) => {
//   showRepo(url)
//  }
 const handleClickUser = (url) => {
  getUserData(url)
 }
  return (
   <tr>
    <th scope="row">{index + 1 }</th>
    <td >
      <img src={user.avatar_url} className='image-table' alt={'image'+index} /> {user.login}
    </td>
    <td> 
       <FontAwesomeIcon icon={faGithub} style={{fontSize: '30px', color:'#000'}}  onClick={() => handleClickUser(user)} />
      
    </td>
   </tr>
  )
}

export default UserListItem