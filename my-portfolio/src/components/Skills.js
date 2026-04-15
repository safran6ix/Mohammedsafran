import React from "react";

const skills = ['HTML5', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'];

function Skills() {
    return (
        <section id="skills" className="skills">
            <h2>Technical Skills</h2>
            <div className="skills-list">
               {skills.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
               ))}
            </div>
        </section>
    );
}

export default Skills;