import React from 'react'
import UserListItem from './UserListItem'

const UserList = ({users, showRepo, getUserData}) => {
  return (
    <div>
      <table className="table table-light table-striped">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">User</th>
           <th scope="col">Profile</th>
         </tr>
       </thead>
       <tbody>
         {
           users.length > 0 && users.map((user, index) => (
             <UserListItem 
               key={user.id} 
               user={user} 
               index={index} 
               showRepo={showRepo}
               getUserData={getUserData}
              />
           ))
         }
       </tbody>
     </table>
    </div>
  )
}

export default UserList