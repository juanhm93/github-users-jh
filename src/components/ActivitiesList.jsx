import React from 'react'
import ActivitiesItem from './ActivitiesItem'

const ActivitiesList = ({events, showMoreActivity, maxEvents, eventsLength}) => {
 const handleClick = () => {
  showMoreActivity()
 }
  return (
    <div className='mb-3'>
         {
           events.length > 0 && events.map((event) => (
             <ActivitiesItem key={event.id} activity={event} />
           ))
         }
      
         {
          eventsLength > maxEvents &&  (<div className="d-grid gap-2">
              <button className="btn btn-outline-primary" type="button" onClick={() => handleClick()}>show more activity</button> 
            </div>)
         }
    </div>
  )
}

export default ActivitiesList