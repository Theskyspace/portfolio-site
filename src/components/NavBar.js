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
                <ul>01. <Link to="AboutSection-content" spy={true} smooth={true} offset={50} duration={500} >About</Link> </ul>
                <ul>02. <a href="http://">Experience</a> </ul>
                <ul>03. <a href="http://">Work</a></ul>
                <ul>04. <a href="http://">Contact</a></ul>
                <ul><a href=''><span className='Resume-button'>Resume</span></a></ul>
            </div>
            <div className='mobile' onClick={handleClick}>
            </div>
        </div>
    )
}
