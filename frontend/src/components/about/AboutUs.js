import "./about.css"

import React from 'react'
import images from "../../images/HomePage-background.jpg"


function AboutUs() {
  return (
    <div className="forms" style={{backgroundImage:`url(${images})`,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSiz:"100%",opacity:0.7}}><h3>AboutUs</h3>
    
   
    </div>
  )
}

export default AboutUs;