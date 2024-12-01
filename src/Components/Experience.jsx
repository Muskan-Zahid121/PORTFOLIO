import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience">
            <div className="experience-title">
                <h1>Professional Experience</h1>
            </div>
            <div className="exp-card">
                <h2 className="exp-title">Frontend Developer (June 2024 - August 2024)</h2>
                <h2 className="exp-company">BurjSoft Pvt Ltd</h2>
                <p className="exp-description">
                    Strengthened skills in HTML, CSS, JavaScript, and Bootstrap.
                    Learned Angular, expanding expertise in modern web development frameworks.
                    Assisted in troubleshooting and optimizing existing code for improved performance.
                </p>
                <div className="exp-skills">
                    <span className="exp-skill" title="HTML5"><i className="fa-brands fa-html5"></i></span>
                    <span className="exp-skill" title="CSS3"><i className="fa-brands fa-css3-alt"></i></span>
                    <span className="exp-skill" title="JavaScript"><i className="fa-brands fa-js"></i></span>
                    <span className="exp-skill" title="Bootstrap"><i className="fa-brands fa-bootstrap"></i></span>
                    <span className="exp-skill" title="Angular"><i className="fa-brands fa-angular"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Experience;
