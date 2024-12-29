import { useContext } from 'react';
import { styles } from '../styles';
import { context } from '../App';
import { comp, linkedin, github, gmail } from '../assets';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
    const { isLight } = useContext(context);

    return (
        <div className={`z-0 ${isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark"} bg-cover bg-no-repeat bg-center`}>
            {/* Adjust the gradient overlay height */}
            <div className={`absolute inset-0 bg-gradient-to-b from-transparent ${isLight ? "to-white" : "to-black"} h-[90%]`}></div>

            {/* Section height */}
            <section className={`relative shrink-0 w-full h-[85vh] mx-auto ${styles.paddingX} pt-[100px] max-w-7xl flex items-start justify-between`}>
                <div className="flex flex-col md:flex-row justify-between items-center mt-3 gap-3">
                    <div className="flex flex-col gap-3 md:gap-5">
                        <h1 className={`${styles.heroHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>
                            Hi, I am <span className="gradient-text">Airaj</span>
                        </h1>
                        <div className="flex gap-5 md:gap-7 justify-start items-center">
                            <a href="https://linkedin.com/in/syedairajhussain6" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin" className="w-7 md:w-10 hover:scale-105" />
                            </a>
                            <a href="https://github.com/AirajHussain" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="github" className={`${isLight ? "" : "invert"} w-7 md:w-10 hover:scale-105`} />
                            </a>
                            <a href="mailto:syedahussain631@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={gmail} alt="gmail" className="w-7 md:w-10 hover:scale-105" />
                            </a>
                        </div>
                        <p className={`${styles.heroSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-1`}>
                            I am a{" "}
                            <span style={{color:"#2D7C42"}}>
                                <Typewriter
                                    words={[
                                        " Full Stack Developer.",
                                        " IoT Systems Innovator.",
                                        " Software Engineer.",
                                        " Data Analyst.",
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={90}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </span>
                        </p>
                    </div>

                    {/* Floating image with animation */}
                    <img src={comp} alt="Working Man" className="comp-img pointer-events-none" />
                </div>
            </section>
        </div>
    );
};

export default Hero;
