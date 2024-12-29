import { backend, cp, docker,frontend,login,redis, wildfire, table,listings,playback} from '../assets';
import { python,sql,c, java, django, css, git, html, javascript, mongodb, nodejs, reactjs, tailwind, typescript, } from '../assets';

export const resumeLink = "";



export const aboutMe = "Hello, I'm Airaj, a passionate Full Stack Developer with a knack for building innovative solutions. My journey in software engineering has been marked by hands-on experience in diverse projects, such as IoT-driven wildfire prediction systems, password managers, and content-based image retrieval tools, each pushing me to expand my technical expertise.\nWith a strong foundation in problem-solving, I thrive on challenges, exemplified by my dedication to coding, algorithm optimization, and developing robust software systems. My academic and personal projects, like a Mini Linux Terminal and equity index management tools, showcase my curiosity and ability to bridge technology with real-world problems.\nI’m always eager to embrace new technologies, like React.js, Node.js, and Python, and translate them into impactful applications. Let’s connect and collaborate on projects that make a difference!"
export const projtitle= "These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories";

export const skills = [
    {title: "Competitive Programmer", icon: cp}, 
    {title: "FrontEnd Developer", icon: frontend}, 
    {title: "Backend Developer", icon: backend}, 
    // {title: "AWS Solutions Architect", icon: aws}
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false }, 
    {title: 'Node.js', icon: nodejs, invert: true }, 
    {title: 'Tailwind', icon: tailwind, invert: false }, 
    {title: 'Django', icon: django, invert: true }, 
    {title: 'Git', icon: git, invert: false },
    {title: 'Docker', icon: docker, invert: false }, 
 
    // {title: 'Spring Boot', icon: springboot, invert: false }, 
]

export const languages = [
    {title: 'Python', icon: python, invert: false }, 
    // {title: 'C++', icon: cpp, invert: false }, 
    {title: 'C', icon: c, invert: false }, 
    {title: 'Java', icon: java, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'TypeScript', icon: typescript, invert: false }, 
    {title: 'SQL', icon: sql, invert: true }, 
    {title: 'MongoDB', icon: mongodb, invert: false },

];

export const websites = [
    {
        title: 'VIT Grievance Portal', 
        description: 'A website designed to give students a platform to raise their concerns, problems and doubts to the college administration and authorities. This includes separate pages for students, teachers and admins.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb, redis],
        
    },
    {
        title: 'Crypto Trend', 
        description: 'A Cryptocurrency tracking website integrated with a price drop alert system and real-time data. It also enhances the visualisation of price trends with the help of real-time graphical trends. Some of the features include data persistency, price drop/rise alert system and watchlist tracking.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb],

    },
    {
        title: 'Flip Game', 
        description: 'A Memory based Game made up of fliped tiles which has some image on their rear side. One has to match cards bearing identical images with least amount of flips to win the game. Also integrated with a real-time leaderboard.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb],
   
    },
    {
  
    },
    {
        title: 'Sudoku', 
        description: 'A Sudoku Website which can generate all levels of unfilled sudokus to play with alongwith the ability to complete any possible unfilled sudoku. It also helps the player along the way by highlighting possible conflicts while cell filling.', 
        stack: [reactjs, tailwind, typescript],
        link: 'https://sudoku.aayush65.com',
        source: "https://github.com/Aayush65/sudoku"
    },
    {
        title: 'Portfolio', 
        description: 'My humble portfolio website', 
        stack: [reactjs, tailwind, typescript],
        link: 'https://aayush65.com',
        source: "https://github.com/Aayush65/Portfolio"
    },
]

export const projects = [
    {
        title: "WildFire Prediction System",
        description: "Wildfire Prediction System is a comprehensive IoT-based solution designed to predict fire-prone conditions using environmental data and advanced algorithms. The primary goal of this project is to provide accurate and efficient detection and prediction of wildfire risks. Key components include sensor integration, a fire risk index algorithm, real-time data analysis, and a centralized monitoring dashboard.",
        stack: [java,reactjs,python,mongodb],
        source: "https://github.com/AirajHussain/WildFire-Prediction-System",
        media: wildfire
    },
    {
        title: "Media-Play-Back-System",
        description: "Media Playback System is a distributed application designed for centralized control of audio playback across multiple devices. The primary goal of this project is to enable seamless media management with real-time device switching, playback control, and multi-room audio capabilities. Key features include a multithreaded server, RMI-based communication, and a user-friendly React.js interface.",
        stack: [java,reactjs,python,mongodb],
        source: "https://github.com/AirajHussain/Media-Play-Back-System",
        media: playback
    },
    {
        title: "MyPlace",
        description: "MyPlace is a mobile application designed to simplify property management by providing a practical platform for users to buy, sell, or rent real estate. Built with Android Studio and programmed in Java, the app offers an intuitive interface and reliable backend powered by SQLite.",
        stack: [java],
        source: "https://github.com/AirajHussain/MyPlace",
        media: listings
    },
    {
        title: "Content Based Image Retrieval",
        description: "Content-Based Image Retrieval (CBIR) is a Python-based application designed to identify and retrieve images based on visual content. The primary goal of this project is to provide accurate image similarity matching using advanced algorithms. Key features include edge detection, histogram analysis, and efficient barcode recognition for identifying boundaries within images.",
        stack: [python],
        source: "https://github.com/AirajHussain/Content-Based-Image-Retrieval",
        media: table
    },
    {
        title: "PassGuard",
        description: "PassGuard is a secure password management application built with React and Node.js to store and manage sensitive user information. The primary goal of this project is to ensure robust data protection using SHA-256 encryption and advanced password filtration techniques. Key features include secure data storage with MySQL, a user-friendly React interface, and Redux-based state management for seamless functionality.",
        stack: [reactjs,nodejs,javascript],
        source: "https://github.com/AirajHussain/PassGuard",
        media: login
    },
    

    

]