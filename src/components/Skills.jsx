import React from 'react';

const Skills = () => {
  return (
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
  );
};

export default Skills;
