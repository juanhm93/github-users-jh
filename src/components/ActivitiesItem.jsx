import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktopAlt, } from '@fortawesome/free-solid-svg-icons'
import {formatDistanceToNow} from 'date-fns'

const ActivitiesItem = ({activity}) => {
  return (
   <div key={activity.id}>
      <div className='d-flex align-items-center'>
      <FontAwesomeIcon icon={faDesktopAlt} className="me-2 text-muted" />
      <span>{activity.payload.action}</span>
      <span>({activity.type})</span>
      </div>
      <div className='d-flex'>
        <div className="vr ms-2"></div>
        <ul style={{listStyle: 'none'}}>
          {
            Object.keys(activity.payload).includes('pull_request') && (
              <li>
              <span className="">{activity.payload.pull_request.title}</span>           
              </li>
            )
          }
          <li>
          <FontAwesomeIcon icon={faDesktopAlt} className="me-2 text-muted" />  <span className="link-primary">   {activity.repo.name}</span>           
          </li>
          <li>
            <span >{formatDistanceToNow(new Date(activity.created_at), {addSuffix: true}) }</span>           
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ActivitiesItem