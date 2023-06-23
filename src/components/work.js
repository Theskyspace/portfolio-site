import React from 'react'
import './work.css'
import NdaNaAbhyasImage from '../Images/NDA.png'
import NeoEdu from "../Images/NeoEdu.png"
import FinMom from "../Images/finmom.png"

export default function Work() {
  return (
    <section className='Work-section Section-content' id='Work-section'>
      <h2 className='Section-heading'><span>03.</span> Some Things I’ve Built</h2>
      <ul className="featured-projects">
        <li className='featured-tile'>
          <div className="project-content">
            <div>
              <p className='featured-title'>Featured Projects</p>
              <h3 className="project-title">NeoEdu</h3>
              <div className="project-decs">
                <p>Built a dynamic learning product in a <span className='highlights'>36-hour hackathon</span>, prioritizing personalized syllabi and accessibility. Integrated 24x7 doubt assistance using <span className='highlights'>generative AI</span> for real-time support. Created a seamless learning environment with tailored guidance and prompt answers to user queries.</p>
              </div>
              <ul className="project-tech-list">
                <li>LLM(AI)</li>
                <li>Python</li>
                <li>Django</li>
                <li>Flutter</li>
              </ul>
            </div>
          </div>
          <div className="project-image">
            <div className="image-wrapper">
              <img src={NeoEdu} alt="" />

            </div>
          </div>
        </li>
        <li className='featured-tile'>
          <div className="project-content">
            <div>
              <p className='featured-title'>Featured Projects</p>
              <h3 className="project-title">FinMom X Setu</h3>
              <div className="project-decs">
                <p>Ranked among the <span className='highlights'>top 14 finalists in Setu's Hackathon</span> (Acquired by Pine Labs), my project provided users with a <span className='highlights'>holistic overview of their finances</span>. Developed rapidly with Django, HTML/CSS, and integrated REST APIs from Setu's infrastructure. Enabled seamless integration and enhanced user experience in managing personal finances.</p>
              </div>
              <ul className="project-tech-list">
                <li>REST APIs</li>
                <li>Django</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
          </div>
          <div className="project-image">
            <div className="image-wrapper">
              <img src={FinMom} alt="" />

            </div>
          </div>
        </li>
        <li className='featured-tile'>
          <div className="project-content">
            <div>
              <p className='featured-title'>Featured Projects</p>
              <h3 className="project-title">NDA NA ABHYAS</h3>
              <div className="project-decs">
                <p>Developed an app for 1k+ NDA aspirants, focusing on exceptional UI/UX and engineering practices for an optimal user experience. Built with <span className='highlights'>Java on Android Studio IDE</span>, it integrated Firebase's real-time database for seamless data management using JSON packets. Implemented offline exam functionality, enabling students to take exams without internet access and evaluate results.</p>
              </div>
              <ul className="project-tech-list">
                <li>VSCode</li>
                <li>Python</li>
                <li>VSCode</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
          <div className="project-image">
            <div className="image-wrapper">
              <img src={NdaNaAbhyasImage} alt="" />

            </div>
          </div>
        </li>

        
      </ul>
    </section>

  )
}
