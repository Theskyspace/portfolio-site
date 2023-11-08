import React from 'react'
import './work.css'
import NdaNaAbhyasImage from '../Images/NDA.png'
import NeoEdu from "../Images/NeoEdu.png"
import FinMom from "../Images/finmom.png"

export default function Work() {
  return (
    <section className='Work-section Section-content fadein' id='Work-section'>
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
            <div>

              <a href="https://github.com/DreamBig-in">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#ffffff" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>

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
            <div>
              <a href="https://github.com/Theskyspace/FinMom-X-Setu">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="#ffffff" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
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
                <li>Firebase</li>
                <li>Python</li>
                <li>Java</li>
                <li>Android Studio</li>
              </ul>
            </div>
            <div>

              <a href="https://play.google.com/store/apps/details?id=theskyspace.ndanaabhyas">
                <svg role="img" viewBox="0 0 24 24" width="25" fill='#ffffff' xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" /></svg>
              </a>

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
