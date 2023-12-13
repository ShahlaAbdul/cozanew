import React, { useState } from 'react';
import './style.scss'
import { Carousel } from 'react-carousel-minimal';
import HomeButon from '../HomeButton1';

function HomePageSlider() {

    const data = [
      {
        image: "https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp",
      },
      {
        image: "https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp",
      },
      {
        image: "https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp",
      },
    ];

    
  return (
    <div className="App">
      <div style={{ textAlign: "center", }}>
      <div className='homebtn'>
         <HomeButon text={"QUICK START"} bgcolor={"blue"}></HomeButon>
         </div>
      
        <div style={{
        
        }}>
          <Carousel 
            data={data}
            time={2000}
            width="100%"
            height="800px"    
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
      
              maxHeight: "500px",

            }}
            
          />
        
        </div>
        
      </div>
    </div>
  );
}

export default HomePageSlider;



