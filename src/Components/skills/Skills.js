import React from 'react';
import "./Skills.css";
import "./Backend.js";
import "./Frontend.js";
import Frontend from './Frontend.js';
import Backend from './Backend.js';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
          <h2 className="section_title">Skills</h2>
          <span className='section_subtitle'>My Technical Level</span>

          <div className="skills_container container grid">
            <Frontend/>
            <Backend/>
          </div>
    </section>
  )
}

export default Skills
