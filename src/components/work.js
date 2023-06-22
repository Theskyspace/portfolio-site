import React from 'react'
import './work.css'
import project1Image from '../Images/project.jpg'

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
                <p>EA minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
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
              <img src={project1Image} alt="" />

            </div>
          </div>
        </li>
        <li className='featured-tile'>
          <div className="project-content">
            <div>
              <p className='featured-title'>Featured Projects</p>
              <h3 className="project-title">NeoEdu</h3>
              <div className="project-decs">
                <p>EA minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
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
              <img src={project1Image} alt="" />

            </div>
          </div>
        </li>
        <li className='featured-tile'>
          <div className="project-content">
            <div>
              <p className='featured-title'>Featured Projects</p>
              <h3 className="project-title">NeoEdu</h3>
              <div className="project-decs">
                <p>EA minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
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
              <img src={project1Image} alt="" />

            </div>
          </div>
        </li>

        
      </ul>
    </section>

  )
}
