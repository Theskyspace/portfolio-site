import { useState , useRef , useEffect} from 'react';
import './experience.css';

export default function Experience() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTabSwitch = (index) => {
        setToggleState(index);
    }

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
        <section className="ExperienceSection Section-content" id='ExperienceSection' ref={sectionRef}>
            <h2 className='Section-heading'><span>02.</span> Where I've played</h2>
            <div className="inner inner-worked">
                <div className="tab-content">
                    <div className={toggleState === 1 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTabSwitch(1)}>SayF</div>
                    <div className={toggleState === 2 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTabSwitch(2)}>Smart India Hackathon</div>
                    <div className={toggleState === 3 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTabSwitch(3)}>UNESCO India Africa</div>
                </div>
                <div className="content-worked">
                    <div className={toggleState === 1 ? "experience-content active-content fadedown-enter-done" : "experience-content"}>
                        <h3 className='xp-heading'>Founding Enginner <span className='highlights'>@ SayF</span></h3>
                        <p className='xp-duration'>Oct 2021 - Present</p>
                        <ul>
                            <li className="xp-content">
                                Developed the backend API infrastructure from scratch, using Django & NestJs
                                framework enabling efficient and scalable operations for a fintech startup at its
                                inception
                            </li>
                            <li className="xp-content">
                                Successfully scaled the infrastructure to support 1.2 lac users, ensuring high
                                availability and optimal performance.
                            </li>
                            <li className="xp-content">
                                Implemented and configured CI/CD pipelines leveraging tools to automate the
                                build, testing, and deployment processes, ensuring rapid and efficient delivery of
                                code changes.
                            </li>
                            <li className="xp-content">
                                Streamlined graphic designing and marketing operations by leveraging
                                programming to automate repetitive tasks, resulting in a remarkable 90%
                                reduction in human intervention.
                            </li>
                        </ul>
                    </div>

                    <div className={toggleState === 2 ? "experience-content active-content fadedown-enter-done" : "experience-content"}>
                        <h3 className='xp-heading'>Smart India Hackathon <span className='highlights'>As TeamLead</span></h3>
                        <p className='xp-duration'>Oct 2021 - Present</p>
                        <ul>
                            <li className="xp-content">
                                Developed the backend API infrastructure from scratch, using Django & NestJs
                                framework enabling efficient and scalable operations for a fintech startup at its
                                inception
                            </li>
                            <li className="xp-content">
                                Successfully scaled the infrastructure to support 1.2 lac users, ensuring high
                                availability and optimal performance.
                            </li>
                            <li className="xp-content">
                                Implemented and configured CI/CD pipelines leveraging tools to automate the
                                build, testing, and deployment processes, ensuring rapid and efficient delivery of
                                code changes.
                            </li>
                            <li className="xp-content">
                                Streamlined graphic designing and marketing operations by leveraging
                                programming to automate repetitive tasks, resulting in a remarkable 90%
                                reduction in human intervention.
                            </li>
                        </ul>
                    </div>

                    <div className={toggleState === 3 ? "experience-content active-content fadedown-enter-done" : "experience-content"}>
                        <h3 className='xp-heading'>UNESCO India Africa Hackathon <span className='highlights'>As TeamLead.</span></h3>
                        <p className='xp-duration'>Oct 2021 - Present</p>
                        <ul>
                            <li className="xp-content">
                                Developed the backend API infrastructure from scratch, using Django & NestJs
                                framework enabling efficient and scalable operations for a fintech startup at its
                                inception
                            </li>
                            <li className="xp-content">
                                Successfully scaled the infrastructure to support 1.2 lac users, ensuring high
                                availability and optimal performance.
                            </li>
                            <li className="xp-content">
                                Implemented and configured CI/CD pipelines leveraging tools to automate the
                                build, testing, and deployment processes, ensuring rapid and efficient delivery of
                                code changes.
                            </li>
                            <li className="xp-content">
                                Streamlined graphic designing and marketing operations by leveraging
                                programming to automate repetitive tasks, resulting in a remarkable 90%
                                reduction in human intervention.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
