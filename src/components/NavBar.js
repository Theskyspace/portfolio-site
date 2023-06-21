import React, { useState, useEffect} from 'react';
import './NavBar.css'
import { Link } from 'react-scroll'


export default function NavBar() {

    // To make Hambuger menu work
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked); 
    };

    // For Navibar to hide when scrolling down and show when scrolling up
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos;
            setClicked(false)
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
            <div className={clicked && visible ? "navbar-list navbar-active" : "navbar-list"}>
                <ul style={{animationDelay : "0ms"}} className='fadedown-enter-done'>01. <Link to="AboutSection-content" spy={true} smooth={true} offset={50} duration={500} >About</Link> </ul>
                <ul style={{animationDelay : "100ms"}} className='fadedown-enter-done'>02. <Link to="ExperienceSection" spy={true} smooth={true} offset={50} duration={500} >Experience</Link> </ul>
                <ul style={{animationDelay : "200ms"}} className='fadedown-enter-done'>03. <Link to="Work-section" spy={true} smooth={true} offset={50} duration={500} >Work</Link></ul>
                <ul style={{animationDelay : "300ms"}} className='fadedown-enter-done'>04.  <Link to="ContactSection" spy={true} smooth={true} offset={50} duration={500} >Contact</Link></ul>
                <ul style={{animationDelay : "400ms"}} className='fadedown-enter-done'><a href='https://'><span className='Resume-button'>Resume</span></a></ul>
            </div>
            <div className='mobile' onClick={handleClick}>
            </div>
        </div>
    )
}
