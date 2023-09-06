import React from 'react'
import BannerImage from "../assets/1beef.jpg"


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
      
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatem consequatur temporibus quo fugit corrupti error modi veniam? Debitis, quis perferendis. Quidem sunt rem commodi voluptatibus quas ipsum aspernatur nisi.</p>
        </div>
    </div>
  )
}

export default About