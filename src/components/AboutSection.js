import React from 'react'
import './AboutSection.css'
import aboutImage from '../Images/theskyspace_about.png'

export default function AboutSection() {
  return (
    <section className='AboutSection-content' id="AboutSection-content">
      <h2><span>01.</span> About Me</h2>
      <div className="inner">
        <div className="content">
          <p>Luarem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Luarem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p>Luarem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p>Luarem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p>Luarem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul className="skill-list">
            <li>Django Rest Framework</li>
            <li>Flutter</li>
            <li>PostgreSQL</li>
            <li>AWS</li>
            <li>Flask</li>
            <li>React</li>
            <li>NestJs</li>
          </ul>
          
        </div>
        <div className="image">
          <div className="placeholder">
            <img src={aboutImage} alt="placeholder" />
          </div>
        </div>
      </div>
    </section>
  )
}
