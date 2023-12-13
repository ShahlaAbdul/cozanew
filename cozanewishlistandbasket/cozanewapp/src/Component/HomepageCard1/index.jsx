import React from 'react'
import './style.scss'

function HomeCard1({ h2text, ptext, URL }) {
  return (
    <div className='cardcontainer'>
      <div className="homeCard1Container" style={{
        backgroundImage: "url(" + URL + ")", backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: " center center"
      }}>
        <div className='Card1Content'>
          
          <div className='card1Text'>
            <h2>
              {h2text}
            </h2>
            <p>{ptext}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard1