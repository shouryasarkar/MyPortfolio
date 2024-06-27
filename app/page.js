"use client";
import { useState } from "react";
// import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const [messages, setMessages] = useState([
    {
        role: 'system',
        content: 'How can I help you learn more about Shourya and his Resume?'
    }
  ]);

  const submitForm = async(e) =>{
    e.preventDefault();
    let newMessages = [...messages, {role: 'usser', content: messageInput}]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
        '/api',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({messages: newMessages})
        }
    ).then(res => res.json());
    setMessages([...newMessages, {role: 'system', content: apiMessage.message}]);
  }

  const toggleMobileMenu = () =>{
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
            <div className="logo">S</div>
            <div className="logo-text">My Portfolio</div>
        </a>
        <nav>
            <ul id="menu" className={menuOpen ? "active" : ""}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="mailto: shouryasarkar2003@gmail.com" className="button">Contact Me</a>
                </li>
            </ul>
            <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
                </svg>                  
            </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
            <div className="hero-blue">
                <div>
                    <h1><small>Hello I'm</small>
                      Shourya Sarkar 
                    </h1>
                    <p>
                        Electronics and Instrumentation Engineer based in India, currently specializing in Python backend development.<span>I possess a strong curiosity for exploring the unknown. As an AI/ML enthusiast, I am actively seeking to broaden my expertise in Robotics.</span>
                    </p>
                    <div className="call-to-action">
                        <a href="Resume/Sample Resume.pdf" className="button black">
                            View Resume
                        </a>
                        <a href="mailto: shouryasarkar2003@gmail.com" className="button white">
                            Contact Me
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/shouryasarkar">
                            <img src="images/github.png" alt="GitHub" width="48"/>
                        </a>
                        <a href="https://www.linkedin.com/in/shourya-sarkar-479684219/">
                            <img src="images/linkedin.png" alt="linkedin" width="48"/>
                        </a>
                        <a href="https://www.instagram.com/the.soul.walker/">
                            <img src="images/ig.png" alt="instagram" width="48"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-yellow">
                <img src="images/hero.png" alt="Shourya Sarkar" width="75%"/>
            </div>
        </section>
        <section className="logos container">
            <div className="marquee">
                <div className="track">
                    <img src="images/html.png" alt="HTML" width="128"/>
                    <img src="images/css.png" alt="CSS" width="128"/>
                    <img src="images/javascript.png" alt="JS" width="128"/>
                    <img src="images/python.png" alt="Python" width="128"/>
                    <img src="images/react.png" alt="React" width="128"/>
                    <img src="images/nextjs.png" alt="Nextjs" width="128"/>
                    <img src="images/vscode.png" alt="VSCode" width="128"/>
                    <img src="images/C-removebg-preview.png" alt="C" width="128"/>
                    <img src="images/flaskbg.png" alt="Flask" width="140"/>
                    <img src="images/arduinobg.png" alt="Arduino" width="128"/>
                    <img src="images/mysqlbg.png" alt="SQL" width="128"/>
                    <img src="images/postmanbg.png" alt="Postman" width="128"/>
                    <img src="images/linuxbg.png" alt="Linux" width="128"/>
                    <img src="images/androidbg.png" alt="Android" width="128"/>
                    <img src="images/nodejs.png" alt="NodeJs" width="150"/>
                    <img src="images/sass.png" alt="Saas" width="128"/>
                    <img src="images/html.png" alt="HTML" width="128"/>
                    <img src="images/css.png" alt="CSS" width="128"/>
                    <img src="images/javascript.png" alt="JS" width="128"/>
                    <img src="images/python.png" alt="Python" width="128"/>
                    <img src="images/react.png" alt="React" width="128"/>
                    <img src="images/nextjs.png" alt="Nextjs" width="128"/>
                    <img src="images/vscode.png" alt="VSCode" width="128"/>
                    <img src="images/C-removebg-preview.png" alt="C" width="128"/>
                    <img src="images/flaskbg.png" alt="Flask" width="140"/>
                    <img src="images/arduinobg.png" alt="Arduino" width="128"/>
                    <img src="images/mysqlbg.png" alt="SQL" width="128"/>
                    <img src="images/postmanbg.png" alt="Postman" width="128"/>
                    <img src="images/linuxbg.png" alt="Linux" width="128"/>
                    <img src="images/androidbg.png" alt="Android" width="128"/>
                    <img src="images/nodejs.png" alt="NodeJs" width="150"/>
                    <img src="images/sass.png" alt="Saas" width="128"/>
                </div>
            </div>
        </section>
        <section id="skills" className="skills container">
            <h2>
                <small>About Me</small>
                Skills
            </h2>
            <div className="holder-blue">
                <div className="left-column">
                    <h3>Frontend</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Python</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3>A bit about me</h3>
                    <p/>
                        Hello, I'm Shourya, a final-year engineering student at Heritage Institute of Technology.<br/>
                        <br/>
                        I am passionate about coding, music, photography, singing, and enjoying life in general.<br/>
                        <br/>
                        Over the past few years, I have been involved in developing IoT-based systems and backend development.<br/>
                        <br/>
                        I have a strong interest in exploring the unknown. Currently, I am learning Machine Learning. I am organized and reliable, adept at managing multiple priorities with a positive attitude. I am willing to take on additional responsibilities to help achieve team goals.
                    <p/>
                </div>
              </div>
        </section>
        <section className="work-experience container">
            <h2>
                <small>Recent</small>
                Work Experience
            </h2>
            <div className="jobs">
                <article>
                    <figure>
                        <div>
                            <img src="images/internship1.png" alt="internship 1" width="80%"/>
                            <figcaption>Internship - 1</figcaption>
                        </div>
                    </figure>
                    <h3>Python Backend Developer</h3>
                    <div>1st June 2024 - 30th June 2024</div>
                    <p>I have extensive experience in Python backend development projects, having successfully created and deployed websites.</p>
                    <a href="Offer Letter/CodSoft Offer Letter.pdf" className="button black">
                        Offer Letter
                    </a>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="images/internship2.jpg" alt="internship 2" width="50%"/>
                            <figcaption>Internship - 2</figcaption>
                        </div>
                    </figure>
                    <h3>Frontend Developer</h3>
                    <div>3rd June 2024 - 1st July 2024</div>
                    <p>I have extensive experience in web development as a frontend web developer, having successfully created and deployed numerous frontend websites.</p>
                    <a href="Offer Letter/CipherByte Offer Letter.pdf" className="button black">
                        Offer Letter
                    </a>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="images/internship3.png" alt="internship 3" width="80%"/>
                            <figcaption>Internship - 3</figcaption>
                        </div>
                    </figure>
                    <h3>Python Backend Developer</h3>
                    <div>12th June 2024 - 15th July 2024</div>
                    <p>I have extensive experience in Python backend development projects, having successfully created and deployed websites.</p>
                    <a href="Offer Letter/Oasis InfoByte Offer Letter.pdf" className="button black">
                        Offer Letter
                    </a>
                </article>
                <article>
                    <figure>
                        <div>
                            <img src="images/internship4.jpg" alt="Club Member" width="50%"/>
                            <figcaption>Student Member</figcaption>
                        </div>
                    </figure>
                    <h3>Student Member</h3>
                    <div>June 2022 - June 2024</div>
                    <p>Here I worked on various projects on backend as well as frontend and participated in various workshops.</p>
                </article>
            </div>
        </section>
        <section id="projects" className="bento container">
            <h2>
                <small>
                    Previous
                </small>
                Completed Projects
            </h2>
            <div className="bento-grid">
                <a href="#" className="bento-item">
                    <img src="images/amazon.png" alt="amazon clone" width="100%"/>
                </a>
                <a href="#" className="bento-item">
                    <img src="images/movein.png" alt="movein website" width="100%"/>
                </a>
                <a href="#" className="bento-item">
                    <img src="images/weather.png" alt="WeatherVue" width="100%"/>
                </a>
                <a href="#" className="bento-item">
                    <img src="images/pharmacy.png" alt="Pharmacy Management System" width="100%"/>
                </a>
                <a href="#" className="bento-item">
                    <img src="images/chatbot.jpg" alt="Chatbot" width="100%"/>
                </a>
            </div>
        </section>
        <section className="chatbot container">
            <h2>
                <small>
                    Talk to me 
                </small>
                ChatBot
            </h2>
            <div className="chatbot-blue">
                <div className="chat-info">
                    <h3>Azure AI ChatBot</h3>
                    <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
                    <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
                    <a href="Resume/Sample Resume.pdf" className="button black">Download Resume</a>
                </div>
                <div className="chat-box">
                    <div className="scroll-area">
                        <ul id="chat-log">
                            {messages.map((message,index) => (
                                <li key={index} className={`${message.role}`}>
                                    <span className={`avatar`}>
                                        {message.role == 'user' ? 'You' : 'AI'}
                                    </span>
                                    <div className="message">{message.content}</div>
                                </li>
                            ))}
                      </ul>
                    </div>
                    <form onSubmit={submitForm} className="chat-message">
                        <input type="text" placeholder="Hey Shourya, what skills are you best at?" value={messageInput} onChange={e =>
                            setMessageInput(e.target.value)}/>
                        <button className="button black">Send</button>
                    </form>
                </div>
            </div>
        </section>
        <div className="bottom-container">
          <p className="footer">© 2024 Shourya Sarkar. All rights reserved.</p>
        </div>
      </main>
    </>
  );
}