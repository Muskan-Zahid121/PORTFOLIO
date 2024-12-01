import React from 'react';
import './Skills.css';
import html from '../Images/html.png';
import css from '../Images/css.png'
import javascript from '../Images/javascript.png';
import nodejs from '../Images/node.png';
import angular from '../Images/anular.png';
import reactJs from '../Images/reactjs.png';

const Skills = () => {
    const skills = [
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "JavaScript", image: javascript },
        { name: "NodeJS", image: nodejs },
        { name: "Angular", image: angular },
        { name: "ReactJS", image: reactJs }
    ];

    return (
        <div className="skills">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="skill-container-wrapper">
                {skills.map((skill, index) => (
                    <div className="skill-image-wrapper" key={index}>
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
