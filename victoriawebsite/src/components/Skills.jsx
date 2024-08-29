// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <section id="skills-placeholder" className="placeholder">
      <div className="container flex-wrap border border-2">
        <div className="row flex-grow-1">
          <p className="unselectable">
            <strong>Skills: 2+ yrs of Front-End Developer Experience with a focus on MERN and Back End.</strong><br />
            As of 8/24, I'm working on creating:
            <br /> a RESTful API using ASP.NET Core
            <br /> a WordPress site with PHP.
            <br /> a Ren'Py game
          </p>
          <ul className="list-group list-group-horizontal list-group-flush">
            <li className="list-group-item"><i className="fab fa-html5 fa-2x"></i></li>
            <li className="list-group-item"><i className="fab fa-css3 fa-2x"></i></li>
            <li className="list-group-item"><i className="fab fa-js fa-2x"></i></li>
            <li className="list-group-item"><i className="fab fa-mdb fa-2x"></i></li>
            <li className="list-group-item"><i className="fab fa-bootstrap fa-2x"></i></li>
            <li className="list-group-item"><i className="fab fa-php fa-2x"></i></li>
            <li className="list-group-item"><i className="fab fa-laravel fa-2x"></i></li>
            <li className="list-group-item"><i className="fab fa-node-js fa-2x"></i></li>
            <li className="list-group-item"><i className="fab bi-filetype-sql fa-2x"></i></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
