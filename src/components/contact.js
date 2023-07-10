import React from 'react'
import './contact.css'

export default function contact() {
   
    return (
        <section className='ContactSection fadein' id='ContactSection'>
            <div className="contact-content">
                <h3>04. What's next?</h3>
                <h1>Get In Touch</h1>
                <p className='contact-p'>I'm eagerly seeking opportunities that provide challenges and foster personal growth. If you have an exciting opportunity, feel free to reach out to me on LinkedIn. Let's connect and explore the possibilities!</p>
                <div className='Contact_Button'>
                    <a href="https://www.linkedin.com/in/akash-joshi-47a92b195/" target="_blank" rel="noopener noreferrer">Say Hello</a>
                </div>
            </div>
            <footer className='Contact_Footer'>
                <p>Redesigned & Built by Akash</p>
                <p>Inspired by brittanychiang.com</p>
            </footer>
        </section>
    )
}
