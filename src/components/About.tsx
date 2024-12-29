import { useContext } from 'react';
import { styles } from "../styles";
import { context } from "../App";
import { aboutMe} from '../constants';





const About = () => {
    const { isLight } = useContext(context);

    return (
        <div id="about" className={`mt-10 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } mt-10 font-semibold`}>About Me</p>
            <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-200" : "text-white-100" } mb-10`}>Introduction.</h2>
            <div className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-[17px] max-w-5xl leading-[30px] md:ml-3`}>
                {aboutMe.split('\n').map((para, index) => (
                    <p key={index}>&nbsp;&nbsp;&nbsp;{para}</p>
                ))}
            </div>
            <p className={`mt-20 mb-5 sm:mb-0 invisible ${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-[17px] max-w-3xl leading-[30px] md:ml-3 italic`}>(Tilt your phone to see some magic)</p>
  
        </div>
    )
}

export default About;