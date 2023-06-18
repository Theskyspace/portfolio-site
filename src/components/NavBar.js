import React, { useState, useEffect } from 'react';
import './NavBar.css'
import { Link } from 'react-scroll'


export default function NavBar() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;
            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    
    return (
        <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <ul>01. <Link to="AboutSection-content" spy={true} smooth={true} offset={50} duration={500} >About</Link> </ul>
            <ul>02. <a href="http://">Experience</a> </ul>
            <ul>03. <a href="http://">Work</a></ul>
            <ul>04. <a href="http://">Contact</a></ul>
            <ul><a href=''><span className='Resume-button'>Resume</span></a></ul>
        </div>
    )
}
