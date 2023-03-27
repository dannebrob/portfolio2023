import { useState } from 'react';
import profilePicture from './assets/images/profilePicture.png';
import logo from './assets/images/logo.png';
import './App.css';
import Featured from './components/Featured';
import Blogposts from './components/Blogposts';

function App() {
  return (
    <div className="App">
      <header>
        <section id="hero" className="hero">
          <div className="hero-image">
            <img alt="logo" src={logo} />
          </div>
          <div className="hero-info">
            <div className="name-info">
              <img
                className="hero-picture"
                src={profilePicture}
                alt="Profile picture"
              />
              <div>
                <h2 id="my-name">Daniel Brobäck</h2>
                <h1 id="title">Frontend developer</h1>
                <h3 id="also">+ Firefighter</h3>
              </div>
            </div>
            <p className="hero-text" id="hero-text">
              I'm a frontend developer with a strong interest in web development
              and education. As a former firefighter and teacher, believe in
              collaboration and problem solutions. I'm also quite excited about
              the tech industry, where you frequently collaborate with others to
              find answers. My ultimate objective is to become fullstack, and I
              won't give up until I achieve it.
            </p>
            <div className="socials-links">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/danielbroback">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      role="img"
                    >
                      <title id="linkedin-top-logo">
                        Link to LinkedIn profile
                      </title>
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dannebrob">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      role="img"
                    >
                      <title id="github-top-logo">Link to Github profile</title>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/users/20089481/dannebrobb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      role="img"
                    >
                      <title id="stackoverflow-top-logo">
                        Link to Stackoverflow profile
                      </title>
                      <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/daniel_broback">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      role="img"
                    >
                      <title id="twitter-top-logo">
                        Link to Twitter profile
                      </title>
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="scroll-down">
            <a href="#tech">
              <svg
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="m5.214 14.522s4.505 4.502 6.259 6.255c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 6.249-6.244 6.249-6.244.144-.144.216-.334.217-.523 0-.193-.074-.386-.221-.534-.293-.293-.766-.294-1.057-.004l-4.968 4.968v-14.692c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.692l-4.979-4.978c-.289-.289-.761-.287-1.054.006-.148.148-.222.341-.221.534 0 .189.071.377.215.52z"
                  fillRule="nonzero"
                />
              </svg>
              <p>Let's scroll</p>
            </a>
          </div>
        </section>
      </header>
      <main>
        <section id="tech" className="tech">
          <h2 className="heading">Tech</h2>
          <p>
            HTML, CSS, Flexbox, <span className="js">JavaScript,</span> ES6,
            JSX,
            <span className="react">React,</span> React Hooks, Redux, Node.js,
            Mongo DB, Web Accessibly, API:s,{' '}
            <span className="mob">mob-programming,</span>
            pair-programming, Github.
          </p>
        </section>
        <Featured />
        <Blogposts />
        <section className="skills">
          <h2 className="heading">Skills</h2>
          <div className="skill-block">
            <div className="code">
              <h3>Code</h3>
              <ul role="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>Styled Components</li>
                <li>Github</li>
              </ul>
            </div>
            <div className="toolbox">
              <h3>Toolbox</h3>
              <ul role="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>Styled Components</li>
                <li>Github</li>
              </ul>
            </div>
            <div className="more">
              <h3>More</h3>
              <ul role="list">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="upcoming">
              <h3>Upcoming</h3>
              <ul role="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>Styled Components</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <h2 className="heading">Time to talk</h2>
        <div className="footer-info">
          <div className="name-info">
            <img
              className="footer-picture"
              src={profilePicture}
              alt="Profile picture"
            />
            <div>
              <h2>Daniel Brobäck</h2>
              <h1>Frontend developer</h1>
              <h3>+ digital designer</h3>
            </div>
          </div>
          <div className="contact-info">
            <p>+46(0)763 12 33 45</p>
            <a href="#">hej@danielbroback.se</a>
          </div>
        </div>
        <div className="socials-links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/danielbroback">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title id="linkedin-footer-logo">
                    Link to LinkedIn profile
                  </title>
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/dannebrob">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title id="github-footer-logo">Link to Github profile</title>
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/20089481/dannebrobb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title id="stackoverflow-footer-logo">
                    Link to Stackoverflow profile
                  </title>
                  <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/daniel_broback">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title id="twitter-footer-logo">
                    Link to Twitter profile
                  </title>
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </li>
          </ul>
          <p>Made with React, Built with Vite, Powered by ☕</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
