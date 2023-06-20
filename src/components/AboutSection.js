import React , {useRef , useEffect} from 'react'
import './AboutSection.css'
import aboutImage from '../Images/theskyspace_about.png'

export default function AboutSection() {
  const sectionRef = useRef(null);

    const fadeInElement = () => {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
    
        if (sectionTop < windowHeight) {
          sectionRef.current.classList.add('fadein');
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', fadeInElement);
        return () => {
          window.removeEventListener('scroll', fadeInElement);
        };
      }, []);

  return (
    <section className='AboutSection-content Section-content' ref={sectionRef}  id="AboutSection-content">
      <h2><span>01.</span> About Me</h2>
      <div className="inner">
        <div className="about-content">
          <p>Throughout my journey, I've been privileged to engage in a wide range of projects, encompassing both startup ventures and participation in numerous <span className='highlights'>National</span> and <span className='highlights'>International hackathons</span>. These experiences have served as invaluable opportunities to contribute to the creation of products that truly make a difference in people's lives..</p>
          <p>At present, my primary focus revolves around the development of accessible and inclusive products, coupled with the crafting of captivating digital experiences. This mission holds utmost importance to me, and I am dedicated to pursuing it not only within the innovative ecosystem of  <span className='highlights'>SayF</span> but also through a diverse array of personal pet projects. By prioritizing inclusivity and fostering a collaborative atmosphere, I aim to leave a positive impact on the world of technology and beyond.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
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
