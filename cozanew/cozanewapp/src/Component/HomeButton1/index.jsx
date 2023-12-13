import React from 'react'
import './style.scss'

function HomeButon({text, bgcolor, hovercolor}) {
  return (
    <div>
        <div className='quickStart' >
          <p>{text}</p>
        </div>
    </div>
  )
}

export default HomeButon