import React from 'react'
import './Card.css'
function Card({allstatuses}) {
  return (
    <div className='main-card'>
      {allstatuses.map((e)=>{
        return (
          <div key={e.id} className='sub-post'>
            <p>{e.status}</p></div>
        )
})}
    </div>
  )
}

export default Card
