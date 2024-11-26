import React from 'react'
import "./About.css"
import Profile from "./Profile/Profile"
import Rushikesh from "./Developer_Images/Rushikesh.jpg"
import Shailesh from "./Developer_Images/Shailesh.jpg"
import Suyash from "./Developer_Images/Suyash.jpg"
import Koustubh from "./Developer_Images/Koustubh.jpg"
import NavbarEg from '../Homeeg/NavbarEg'
import bgVdo from '../Contact/bg_vdo3.mp4'

export default function About() {
  return (
    <div className='about-wrapper'>
      
      <video autoPlay loop muted className="background-video-abt">
        <source src={bgVdo} type="video/mp4" />
      </video>

      <NavbarEg />
        <h1 className='aboutHeading' >Developers</h1>
        
      <div className='profiles'>
    
        <Profile image={Rushikesh} 
        heading="Sanchit Sen" 
        
        />

        <Profile image={Shailesh} 
        heading="Tanishq Gupta" 
        
        />

        <Profile image={Suyash} 
        heading="Himanshu Singh" 
        
        />

        <Profile image={Koustubh} 
        heading="Gaurav Rao" 
        
        />
      </div>

      <div className="abt-footer">
          Copyright © Group 8 | 2023 All Rights Reserved.
        </div>
    </div>
  )
}
