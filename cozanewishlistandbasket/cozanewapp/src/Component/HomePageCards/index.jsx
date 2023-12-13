import React from 'react'
import './style.scss'
import HomeCard1 from '../HomepageCard1'

function HomeCards() {
  return (
    <div>
       <div className="homecardsContainer">
       <HomeCard1 h2text={"women"} ptext={"spring 2018"} URL={"https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg"} ></HomeCard1>
        <HomeCard1 h2text={"men"} ptext={"spring 2018"} URL={"https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg"} ></HomeCard1>
        <HomeCard1 h2text={"accessories"} ptext={"new trend"} URL={"https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg"} ></HomeCard1>
       </div>
    </div>
  )
}

export default HomeCards