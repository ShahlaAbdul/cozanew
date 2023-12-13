import React from 'react'
import './style.scss'

function HomeCard1({ h2text, ptext, URL }) {
  return (
    <div className='homecardcontainer'>
      <div className="homecard" style={{
        backgroundImage: "url(" + URL + ")", backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: " center center"
      }}>
        <div className='homecardcontent'>
          
          <div className='card1Text'>
            <h2>
              {h2text}
            </h2>
            <p>{ptext}</p>
          </div>
           <span className='shopnow'>Shop Now</span>
        
        </div>
      </div>
    </div>
  )
}

export default HomeCard1