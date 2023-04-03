import React from 'react';

function Featured() {
  const projects = [
    {
      id: 1,
      name: 'Movie Time',
      text: 'A web-app that helps the user to find popular movies, using the API from themoviedb.org as its backend. This was a pair-programming project, built with React',
      tech: ['React', 'CSS', 'API', 'Pair Programming'],
      githubUrl: 'https://github.com/dannebrob/project-movies',
      liveLink: 'https://heartfelt-torrone-e608c2.netlify.app/',
      cardImgUrl:
        'https://res.cloudinary.com/dqnpivjb6/image/upload/v1680439278/technigo-movie_ykzfjd.jpg'
    },
    {
      id: 2,
      name: 'Interactive credit card payment',
      text: 'On this project I had to be on my toes with the CSS. To get the text on the right places on the credit cards was a bit tricky. Also, I had to learn about forms in React and how to validate the inputs.',
      tech: ['React', 'TailwindCSS', 'Forms'],
      githubUrl: 'https://github.com/dannebrob/interactive-card-details',
      liveLink: 'https://interactivecreditcard.netlify.app/',
      cardImgUrl:
        'https://res.cloudinary.com/dqnpivjb6/image/upload/v1680440046/My_project-1_lihebq.jpg'
    },
    {
      id: 3,
      name: 'Coffee ordering app',
      text: 'This was the final big project in the React course, by Folkuniverisitetet and ZooCom. It summed up most of the course syllabus. The project was a great hands-on project with React, Redux, React Router and API calls. A lot of focus was also on problem-solving and decision-making, since the rules of the project were not predefined. After the project, I feel that lots of the concepts of React and Redux were solidified and tested my ability to find my own solutions.',
      tech: ['React', 'Redux', 'React Router', 'API'],
      githubUrl: 'https://github.com/dannebrob/7-Slutexaminationen-React-YH/',
      cardImgUrl:
        'https://user-images.githubusercontent.com/65211641/227802140-e5f3c6e8-0cb1-4053-9b5a-9755f8c5e74f.jpg'
    },
    {
      id: 4,
      name: 'Elins Glada Ekologiska Kor',
      text: 'A big project, built closely with the business owner. First, I made a mockup in Figma and after feedback from the client, we found a design that was appealing and easy to use for the end-user. A big challenge for me to make a WordPress theme from scratch that would work with all possible plugins and other add-ons that could be used in the future. To organize the input from my client and upcoming tasks I used a Trello board, a great tool for visualization.',
      tech: [
        'Wordpress',
        'HTML5',
        'CSS',
        'PHP',
        'Mobile-first',
        'Image Optimizing'
      ],
      githubUrl: 'https://github.com/dannebrob/elins2.0-wordpress-theme',
      liveLink: 'https://www.elinsgladaekologiskakor.se/',
      cardImgUrl:
        'https://res.cloudinary.com/dqnpivjb6/image/upload/v1680439278/Elins-glada-kor_j3wkrr.jpg'
    },
    {
      id: 5,
      name: 'Happy Thoughts - A Micro-blogging service',
      text: 'A happy twitter-like wall for all you thoughts. Share what you are thinking about right now!',
      tech: ['React', 'HTML5', 'CSS', 'API'],
      githubUrl: 'https://github.com/dannebrob/project-happy-thoughts',
      liveLink: 'https://technigo-happy-thoughts-app.netlify.app/',
      cardImgUrl:
        'https://res.cloudinary.com/dqnpivjb6/image/upload/v1680439278/technigo-happy_m5in5y.jpg'
    }
  ];
  return (
    <section id="feat-project" className="feat-project">
      <h2 className="heading">Feature Projects</h2>
      <div className="card-container">
        {projects.map((project) => {
          return (
            <div className="card card-one" key={project.id}>
              <img src={project.cardImgUrl} alt={project.name} />
              <div>
                <h2>{project.name}</h2>
                <p>{project.text}</p>
                <ul>
                  {project.tech.map((techType) => {
                    // console.log(techType);
                    return <li key={techType}>{techType}</li>;
                  })}
                </ul>
                <div className="button-container">
                  {project?.githubUrl && (
                    <div className="button github-button">
                      <a href={project.githubUrl}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          role="img"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <p>View the code</p>
                      </a>
                    </div>
                  )}

                  {project?.liveLink && (
                    <div className="button demo-button">
                      <a href={project.liveLink}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          role="img"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                        </svg>
                        <p>Live Demo</p>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Featured;
