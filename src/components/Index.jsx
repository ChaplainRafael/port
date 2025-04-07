import { useState } from "react";
import { projects } from "./constants";
import { FaLink, FaGithub,FaLinkedin,FaReact, FaHtml5, FaCss3, FaJs, FaPython,FaDownload } from "react-icons/fa";
import { SiDjango, SiTailwindcss,SiMysql, SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import { Typewriter } from 'react-simple-typewriter'
import { DiNodejs } from "react-icons/di";



const Home = () =>{
    const [page,setPage]= useState("home");
    const [ProjectPage,setProjectPage]=useState(0);                
    const projectsPerPage =3 ;

    const totalPages= Math.ceil(projects.length/projectsPerPage);
    const displayedProjects= projects.slice(
        ProjectPage*projectsPerPage,
        (ProjectPage+1)*projectsPerPage
    );
    const nextPage = ()=>{
        if(ProjectPage < totalPages - 1){
            setProjectPage(ProjectPage + 1);
        }
    };
    const prevPage = ()=>{
        if(ProjectPage > 0){
            setProjectPage(ProjectPage - 1);
        }
    };
    
    
    const renderPageButtons = ()=>{
            return (
                <div className="page-btns"> {/* buttons */}
                        <div className="logo">
                            <img src="src/assets/skull.png" alt="logo" />
                        </div>
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['From the moment I understood the weakness of my flesh,', 'it disgusted me.', 'I craved the strength and certainty of steel.', 'I aspired to the purity of the blessed machine!','There is no truth in flesh,','only betrayal.','There is no strength in flesh,','only weakness.','There is no constancy in flesh,','only decay.','Blessed is who that guides this blessed machine .','Sing praise to the god of all machines','Sing praise to the blessed Omnissiah']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={90}
                                deleteSpeed={90}
                                delaySpeed={1000}
                            /></span>
                        <button onClick={() =>setPage("home")} className="back-btn">Back</button>
                    </div>
            )
    }

    {/*Start of pages*/}
    const renderHomePage = ()=>{
        return(
            <div className="home">
                
                <div className="home-btns"> {/* buttons */}
                    <div className="title">NAVIGATION</div>
                    <button onClick={() =>setPage("bio")}>Bio</button>
                    <button onClick={() =>setPage("projects")}>Projects</button>
                    <button onClick={() =>setPage("contact")}>Contact</button>
                    
                    <a href="/cv.pdf" download="Rafael_CV.pdf" className="download-btn">
                                    <FaDownload className="icon" /> Download CV
                                </a>
                </div>
                <div className="home-main">{/* main home page content */}
                    <div className="home-body">
                    <div className="title">++ HELLO THERE! ++</div>
                    <div className="intro">
                        <div className="text">
                            
                            <div className="name">⚙️I&apos;m <span className="name-decor">Rafael</span>⚙️</div>
                            <div className="whoami"> Web Developer🌐 | React Enjoyer💻🗿 | Gamer🎮</div> 
                            <p>
                            &quot;🔧 Welcome, honored initiate, to the sacred repository of knowledge and craft.
                             Herein lies the sanctum of Rafael, Artisan of the Web, and Acolyte of the Omnissiah ⚙️.
                              Let your gaze fall upon the illuminated nodes of navigation 🔮, for they are the conduits to understanding.
                             Engage the blessed mechanisms—each button a rite of discovery—and witness the Machine Spirit&apos;s will made manifest.(click the buttons) ✨&quot; 
                            </p>
                        </div>
                        <div className="tech-priest">
                            <img src="src/assets/tech-boy.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        )
    }

    const renderBioPage = ()=> {
        return(
            <div className="page">
                
                {renderPageButtons()}
                <div className="page-content">
                    <div className="page-main">{/* Page content */}
                        <div className="bio-container">
                            <div className="name-title">
                                <div className="name">⚙️I&apos;m <span className="name-decor">Rafael</span>⚙️</div>
                                <div className="whoami"> Web Developer🌐 | React Enjoyer💻🗿 | Gamer🎮</div> 
                            </div>
                            <div className="brief-bio">
                                <p>
                                &quot;I&apos;m a passionate web developer specializing in React, Django, and JavaScript.
                                 with my high adaptability, I&apos;ve honed my skills as a freelancer and translator, thriving in collaborative and dynamic environments.
                                 Outside of coding, I&apos;m a gaming enthusiast. For inquiries, check the contact section!&quot;
                                </p>
                            </div>
                        <div className="skills-n-hobby">
                                <div className="tech">
                                <div className="snh-title">SKILLS</div>
                                    <div className="tech-stack-frame">
                                        <FaHtml5 className="tech-icon" color="#e34c26" />
                                        <FaCss3 className="tech-icon" color="#1572b6" />
                                        <FaJs className="tech-icon" color="#f7df1e" />
                                        <FaPython className="tech-icon" color="#3776ab" />
                                        <FaReact className="tech-icon" color="#61dafb" />
                                        <SiDjango className="tech-icon" color="#092E20" />
                                        <SiTailwindcss className="tech-icon" color="#38B2AC" />
                                        <SiMysql className="tech-icon" color="#4479A1" />    
                                        <SiRedux className="tech-icon" color="#764ABC" />    
                                        <SiMongodb className="tech-icon" color="#47A248" />  
                                        <DiNodejs className="tech-icon" color="#339933" />   
                                        <SiExpress className="tech-icon" color="#ffffff" />  
                                    </div>
                                </div>
                                
                                <div className="motto">&quot;if you can think it i can make it&quot;</div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const RenderProjectPage = ()=> {
        

        return (
            <div className="page">
                
                
                {renderPageButtons()}
                <div className="page-content">
                    <div className="page-title"> {'>'} {'>'} {'>'} Projects {'<'} {'<'} {'<'} </div>
                    <div className="page-main">{/* Page content */}
                        <div className="projects">
                            {displayedProjects.map((projects,index)=>(
                                
                                <div key={index} className="project-card">

                                        
                                        <div className="panel">
                                            <div className="details">
                                                <div className="p-d-name">+ + + {projects.name} + + +</div>
                                                <div> {'-> '} {projects.info}  </div>
                                                <div className="project-tech">
                                                    {projects.tech.map((item) => (
                                                        <span key={item.id} className="icon">{item.icon}</span> 
                                                    ))}
                                                    </div>
                                            </div>

                                            <div className="btns">
                                                <a href={projects.url} target="_blank" rel="noopener noreferrer"><FaLink/></a>
                                                <a href={projects.github} target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                                            </div>
                                        </div>
                                        
                                        
                                </div>
                            ))}
                        </div>
                        {/* Pagination Controls */}
                        <div className="pagination-controls">
                            <button onClick={prevPage} disabled={ProjectPage === 0}> {'<'}
                            </button>
                            <span> Page {ProjectPage + 1} of {totalPages} </span>
                            <button onClick={nextPage} disabled={ProjectPage === totalPages - 1}>{'>'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const renderContacts = ()=>{
        return (
            <div className="page">
                
                
                {renderPageButtons()}
                <div className="page-content">
                    <div className="page-title">=== Contact Page ===</div>
                    <div className="page-main">{/* Page content */}
                        <form className="form" action="https://formspree.io/f/xpwqdezo" method="POST">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />

                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Your Email" required />

                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Your message" rows={5} required></textarea>

                            <button type="submit">Send Message</button>

                        </form>
                        <div className="contact-info">

                            <p>- - - Or email me directly : chaplainrafael357@gmail.com - - -</p>
                            <div className="social-links">
                                <a href="https://github.com/ChaplainRafael" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                                <a href="https://linkedin.com/in/reza-eydi-429433350" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    {/*End of pages*/}


    let content = ()=>{
        if (page==='home') {
            return renderHomePage();
        }
        else if (page==='bio'){
            return renderBioPage();
        }
        else if (page==='projects'){
            return RenderProjectPage();
        }
        else if (page==='contact'){
            return renderContacts();
        };
        
    }
    
    return(
    <div className="tablet">
        {content()}
        
    </div>
    )
}

export default Home;