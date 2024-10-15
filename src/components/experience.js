import { useState, useRef, useEffect } from 'react';
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
                    <div className={toggleState === 1 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTabSwitch(1)}>Yelow Payments</div>
                    <div className={toggleState === 2 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTabSwitch(2)}>SayF</div>
                    <div className={toggleState === 3 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTabSwitch(3)}>Smart India Hackathon</div>
                    <div className={toggleState === 4 ? "tabs tabs-active" : "tabs"} onClick={() => toggleTabSwitch(4)}>UNESCO India Africa</div>
                </div>
                <div className="content-worked">
                <div className={toggleState === 1 ? "experience-content active-content fadedown-enter-done" : "experience-content"}>
                        <h3 className='xp-heading'>SDE <span className='highlights'>@ Yelow Payments</span></h3>
                        <p className='xp-duration'>May 2024 - Present</p>
                        <ul>
                            <li className="xp-content">
                                Engineer a business rule engine to evaluate user creditworthiness, automating the calculation of ROI, loan amounts, and other financial parameters, facilitating the disbursement of ₹2 crore in loans within 10 days of launch.
                            </li>
                            <li className="xp-content">
                                Design and implement the flagship lending gateway, enabling seamless frontend interactions through just three APIs. This modular approach supports multiple workflows, enhancing system flexibility and scalability.
                            </li>
                            <li className="xp-content">
                                Develop a command-line interface (CLI) that streamlines the development process, enhancing code usability and reducing feature delivery time by 45%.
                            </li>
                            <li className="xp-content">
                                Automate the pipeline for sanction letter generation and loan agreement generation, ensuring fast and accurate processing, which improves the overall loan approval workflow.
                            </li>
                        </ul>
                    </div>
                    <div className={toggleState === 2 ? "experience-content active-content fadedown-enter-done" : "experience-content"}>
                        <h3 className='xp-heading'>Founding Enginner <span className='highlights'>@ SayF</span></h3>
                        <p className='xp-duration'>Oct 2021 - Present</p>
                        <ul>
                            <li className="xp-content">
                                Developed the backend API infrastructure from scratch using Django and NestJS, enabling efficient and scalable operations for a fintech startup at its inception, supporting both B2B and B2C verticals.
                            </li>
                            <li className="xp-content">
                                Scaled the backend infrastructure to support 1.2 lakh users, leveraging AWS services such as ECS, S3, and RDS, and managed PostgreSQL databases to ensure high availability, optimal performance, and data integrity, directly contributing to a total transaction value of ₹101+ crore.
                            </li>
                            <li className="xp-content">
                                Implemented and configured CI/CD pipelines using Jenkins, writing Makefiles and Docker configurations to automate build, testing, and deployment processes. Leveraged AWS ECS, S3, and PostgreSQL databases, resulting in faster feature releases and improved deployment efficiency.
                            </li>
                            <li className="xp-content">
                                Automated repetitive tasks for graphic design and marketing teams, achieving a 90% reduction in human intervention, significantly improving operational efficiency and saving time.
                            </li>
                        </ul>
                    </div>
                    <div className={toggleState === 3 ? "experience-content active-content fadedown-enter-done" : "experience-content"}>
                        <h3 className='xp-heading'>Smart India Hackathon <span className='highlights'>As TeamLead</span></h3>
                        <p className='xp-duration'>Aug 2022</p>
                        <ul>
                            <li className="xp-content">
                                Participating in the Smart India Hackathon event was an exhilarating roller coaster ride, involving selecting a problem statement from over 400+ options and strategically developing a product with multiple unique selling points to compete fiercely with other participants. The experience tested our problem-solving skills and allowed us to showcase our competitive edge.
                            </li>
                            <li className="xp-content">
                                Developed a personalized speed reading app with tailored goals and content, providing an interactive gaming experience. Emphasized consistency and progress tracking to enhance user engagement and learning.
                            </li>
                            <li className="xp-content">
                                Created the app using the Flutter framework, incorporating REST APIs developed with Django, and leveraging the Postgresql database. Demonstrated proficiency in Flutter, Django, and database integration, resulting in a robust and efficient app.
                            </li>

                        </ul>
                    </div>
                    <div className={toggleState === 4 ? "experience-content active-content fadedown-enter-done" : "experience-content"}>
                        <h3 className='xp-heading'>UNESCO India Africa Hackathon <span className='highlights'>As TeamLead.</span></h3>
                        <p className='xp-duration'>Oct 2021 - Present</p>
                        <ul>
                            <li className="xp-content">
                                Seized an international opportunity to collaborate with African students, working together to tackle cross-country challenges and develop software solutions. Showcased cross-cultural collaboration, problem-solving abilities, and software development skills in a global context.
                            </li>
                            <li className="xp-content">
                                Designed an innovative product that encourages users to adopt sustainable energy sources, providing incentives for their usage. Implemented strategies to promote sustainable electricity and transportation, fostering positive environmental impact.
                            </li>
                            <li className="xp-content">
                                Remotely contributed to the development of the product, actively participating in its creation and advancement from a remote location. Demonstrated the ability to work in a remote environment, leveraging technology to collaborate effectively.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
