import React from 'react';
import "./Projects.css";
import Project1 from '../Images/Project-1.jpg';
import Project2 from '../Images/Project-2.png';
import Project3 from '../Images/Project-3.png';
import Project4 from '../Images/Project-4.png';
import Project5 from '../Images/Project-5.png';
import Project6 from '..//Images/Project-6.jpg';

const Project = () => {
    return (
        <div className="project">
            <div className="project-title">
                <h1>Projects</h1>
            </div>
            <div class="card-container-wrapper">
                <div className="card-container">
                    <div className="card">
                        <img src={Project1} className="card-img-top" alt="" />
                        <div className='card-content'>
                            <h3 className='card-title'>NETFLIX WEBSITE CLONE</h3>
                            <p className='card-text'>
                                A Netflix Website Clone is a project that replicates the user interface (UI) 
                                and basic functionality of the popular Netflix streaming platform.
                            </p>
                            <a href="https://www.linkedin.com/posts/muskan-zahid_a-project-of-top-4-netflix-series-from-scratch-activity-7181241359763165184-q4eI?utm_source=share&utm_medium=member_desktop" className="btn">
                              View On Github
                            </a>
                        </div>
                    </div>
                </div>


                <div className="card-container">
                    <div className="card">
                        <img src={Project2} className="card-img-top" alt="" />
                        <div className='card-content'>
                            <h3 className='card-title'>LANDING PAGE</h3>
                            <p className='card-text'>
                                A Landing Page is a focused, standalone webpage designed with a single 
                                objective: to encourage visitors.
                            </p>
                            <a href="https://github.com/Muskan-Zahid121/Landing-Page.git" className="btn">View On Github</a>
                        </div>
                    </div>
                </div>


                <div className="card-container">
                    <div className="card">
                        <img src={Project3} className="card-img-top" alt="" />
                        <div className='card-content'>
                            <h3 className='card-title'>CALCULATOR</h3>
                            <p className='card-text'>
                                A Calculator is a digital tool or device designed to perform mathematical operations,
                                such as arithmetic operations.
                            </p>
                            <a href="https://github.com/Muskan-Zahid121/Caluclator.git" className="btn">View On Github</a>
                        </div>
                    </div>
                </div>


                <div className="card-container">
                    <div className="card">
                        <img src={Project4} className="card-img-top" alt="" />
                        <div className='card-content'>
                            <h3 className='card-title'>WEATHER APP</h3>
                            <p className='card-text'>The Weather App is a user-friendly application that provides 
                                real-time weather updates for any location.
                            </p>
                            <a href="" className="btn">View On Github</a>
                        </div>
                    </div>
                </div>


                <div className="card-container">
                    <div className="card">
                        <img src={Project5} className="card-img-top" alt="" />
                        <div className='card-content'>
                            <h3 className='card-title'>E-COMMERCE WEBSITE</h3>
                            <p className='card-text'>
                                An E-commerce App is a mobile application designed to enable users to buy 
                                and sell products or services online.
                            </p>
                            <a href="https://www.linkedin.com/posts/muskan-zahid_e-commerce-website-i-created-an-e-commerce-activity-7202993881116749824-80gs?utm_source=share&utm_medium=member_desktop" className="btn">View On Github</a>
                        </div>
                    </div>
                </div>


                <div className="card-container">
                    <div className="card">
                        <img src={Project6} className="card-img-top" alt="" />
                        <div className='card-content'>
                            <h3 className='card-title'>GOOGLE KEEP CLONE</h3>
                            <p className='card-text'>Google Keep is a note-taking and task management app 
                                developed by Google. It allows users to quickly capture.
                            </p>    
                            <a href="https://www.linkedin.com/posts/muskan-zahid_a-clone-of-google-keep-app-reactjs-activity-7187365597565890561-gyES?utm_source=share&utm_medium=member_desktop" className="btn">View On Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
