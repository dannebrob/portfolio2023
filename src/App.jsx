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
                <li>
                  <a href="https://www.danielbroback.se/danielBrob%C3%A4ck2023.pdf">
                    <svg
                      fill="#000000"
                      height="32px"
                      width="32px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 60 60"
                      xml:space="preserve"
                    >
                      <title id="stackoverflow-top-logo">My Resume (pdf)</title>
                      <g>
                        <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z" />
                        <path d="M34.5,37c0.552,0,1-0.447,1-1s-0.448-1-1-1h-17c-0.552,0-1,0.447-1,1s0.448,1,1,1H34.5z" />
                        <path d="M44.5,30h-7c-0.552,0-1,0.447-1,1s0.448,1,1,1h7c0.552,0,1-0.447,1-1S45.052,30,44.5,30z" />
                        <path d="M21.5,31c0,0.553,0.448,1,1,1h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10C21.948,30,21.5,30.447,21.5,31z" />
                        <path
                          d="M16.79,30.29c-0.18,0.189-0.29,0.449-0.29,0.71c0,0.26,0.11,0.52,0.29,0.7c0.18,0.189,0.44,0.3,0.71,0.3
		s0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71c0-0.261-0.11-0.521-0.29-0.71C17.84,29.92,17.15,29.93,16.79,30.29z"
                        />
                        <path
                          d="M38.79,35.29c-0.18,0.189-0.29,0.439-0.29,0.71c0,0.27,0.1,0.52,0.29,0.71C38.98,36.89,39.24,37,39.5,37
		c0.26,0,0.52-0.11,0.71-0.29c0.19-0.19,0.29-0.44,0.29-0.71c0-0.261-0.11-0.521-0.29-0.71C39.83,34.92,39.17,34.92,38.79,35.29z"
                        />
                        <path
                          d="M43.79,35.29c-0.18,0.189-0.29,0.439-0.29,0.71c0,0.27,0.1,0.52,0.29,0.71C43.98,36.89,44.24,37,44.5,37
		c0.26,0,0.52-0.11,0.71-0.3c0.19-0.19,0.29-0.44,0.29-0.7c0-0.261-0.11-0.521-0.29-0.71C44.83,34.92,44.17,34.92,43.79,35.29z"
                        />
                        <path
                          d="M23.025,40.166c-2.19,1.14-2.927,3.321-3.196,5.582c-0.414-0.347-0.828-0.693-1.242-1.04
		c-0.98-0.821-2.402,0.586-1.414,1.415c0.935,0.783,1.871,1.567,2.806,2.351c0.658,0.551,1.676,0.203,1.707-0.707
		c0.073-2.166,0.175-4.742,2.348-5.873C25.177,41.299,24.166,39.572,23.025,40.166z"
                        />
                        <path
                          d="M36.455,44.108c-1.458-0.092-3.592,2.155-4.716,0.153c-0.26-0.464-0.913-0.638-1.368-0.359
		c-1.416,0.869-3.267,2.119-4.756,0.5c-0.873-0.949-2.285,0.468-1.414,1.414c1.87,2.033,4.276,1.415,6.399,0.263
		c0.478,0.535,1.071,0.926,1.837,1.081c0.792,0.16,4.025-1.141,4.2-0.901c0.752,1.029,2.488,0.032,1.727-1.009
		C37.847,44.543,37.371,44.166,36.455,44.108z"
                        />
                        <path
                          d="M28.666,23.963l0.674-0.479l-0.344-0.752c-0.312-0.682-0.813-1.212-1.45-1.532l-2.12-1.082
		c0.975-0.623,1.676-1.561,2.095-2.801c0.684-0.417,1.115-1.158,1.115-1.984v-0.667c0-0.677-0.294-1.308-0.794-1.745
		c-0.357-1.898-1.644-3.951-5.54-3.951c-0.153,0-0.303,0.006-0.451,0.018c-0.523,0.043-1.285,0-1.937-0.438
		c-0.303-0.204-0.458-0.362-0.534-0.459c-0.317-0.403-0.849-0.544-1.324-0.35c-0.474,0.195-0.752,0.669-0.694,1.179
		c0.03,0.257,0.073,0.557,0.138,0.884c0.084,0.42,0.089,0.541,0.086,0.573c-0.008,0.035-0.066,0.159-0.112,0.259
		c-0.07,0.15-0.156,0.335-0.257,0.582c-0.217,0.529-0.375,1.105-0.471,1.719c-0.489,0.438-0.778,1.063-0.778,1.73v0.667
		c0,0.826,0.431,1.567,1.115,1.984c0.417,1.235,1.115,2.171,2.083,2.793l-2.204,1.087c-0.613,0.334-1.091,0.867-1.382,1.541
		l-0.32,0.741l0.656,0.469C17.797,25.291,20.004,26,22.302,26C24.592,26,26.792,25.296,28.666,23.963z M18.016,22.907l2.445-1.204
		c0.519-0.257,0.842-0.776,0.842-1.355v-1.422l-0.604-0.261c-0.912-0.392-1.506-1.151-1.819-2.321l-0.143-0.533l-0.527-0.164
		c-0.116-0.036-0.24-0.149-0.24-0.313v-0.667c0-0.142,0.095-0.242,0.184-0.289l0.469-0.25l0.055-0.529
		c0.062-0.595,0.193-1.14,0.391-1.622c0.086-0.211,0.16-0.368,0.22-0.497c0.155-0.332,0.249-0.578,0.283-0.855
		c0.73,0.305,1.559,0.425,2.44,0.358c0.095-0.008,0.192-0.012,0.291-0.012c2.919,0,3.469,1.334,3.622,2.638l0.061,0.523l0.466,0.245
		c0.089,0.047,0.185,0.147,0.185,0.29v0.667c0,0.164-0.125,0.277-0.24,0.313l-0.527,0.164l-0.143,0.533
		c-0.313,1.17-0.908,1.93-1.819,2.321l-0.604,0.261v1.428c0,0.57,0.315,1.086,0.825,1.347l2.415,1.233
		C23.923,24.343,20.628,24.334,18.016,22.907z"
                        />
                      </g>
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
            <span className="react">React,</span> React Hooks, Redux,
            <span className="ts">Typescript</span>, Node.js, Mongo DB, Web
            Accessibly, API:s,
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
                <li>Node js</li>
                <li>Atro</li>
                <li>Vite</li>
                <li>Redux</li>
                <li>Wordpress</li>
              </ul>
            </div>
            <div className="toolbox">
              <h3>Toolbox</h3>
              <ul role="list">
                <li>Postman</li>
                <li>Gimp</li>
                <li>Figma</li>
                <li>Powerpoint / Keynote</li>
                <li>Slack</li>
              </ul>
            </div>
            <div className="more">
              <h3>More</h3>
              <ul role="list">
                <li>Agile methodology</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="upcoming">
              <h3>Upcoming</h3>
              <ul role="list">
                <li>GraphQL</li>
                <li>React Native</li>
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
