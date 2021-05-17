import React,{useEffect}  from "react";
import * as styles from "./Skillset.module.scss";
import Vector from "../../assets/Vector.svg";
import AOS from 'aos';
import "aos/dist/aos.css";

const Skillset=()=>{
    useEffect(() => {
        AOS.init({
        duration:'500'
        });
        // AOS.refresh();
      }, []);

    return(
    <div className={styles.skillSet}  data-aos="fade">
         <div className={styles.skillSetSummary} >
            <img className={styles.backgroundImage} src={Vector}></img>
            <h2>About</h2>
            <span>
            I originally hail from a little place called Kerala in India,  and for the last few years, I’ve been in Canada. 
            Before Bell, I did Master of Engineering degree in Inter-networking at Dalhousie University (Dal), Halifax. 
            Besides my studies at Dal, I also worked as a Python Lab assistant, helping students with Python language, Flask framework, and Git version control. 
            </span>
            <br></br>
            <span>
            I have  4+ years of experience in front-end development, where I specialize in translating UX mockups into responsive interfaces that work seamlessly across any device. 
            I also occasionally design user experiences to high-fidelity prototypes.
            My interest in web development started in  last years of my bachelor’s degree in Computer Science Engineering. 
            Soon after graduation I started my career at Tata Consultancy Services (TCS), India  as a front-end developer and worked on web applications using AngularJS, Angular, HTML5 CSS3, JavaScript. 
            </span>
            <span>Apart from UI/UX, I have an interest in full-stack development, in particular, I enjoy coding in Python.</span>
            <br></br>
            <span>In my off time, you will find me cooking, working out, or watching adorable animal videos( especially  🐶 🐱 🐰 ).</span>
            <h3>Skills :</h3>
            
            <div className={styles.lineVerical}></div>
          
            <ul className={styles.skillSetList} >
                <li>JavaScript (ES6+)</li>
                <li>Modern (S)CSS</li>
                <li>HTML5</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Angular</li>
                <li>UI/UX Design</li>
                <li>Python</li>
                <li>Contentful</li>
                <li>WordPress</li>
                <li>Strapi</li>
            </ul>
        </div>
    </div> )

}

export default Skillset;