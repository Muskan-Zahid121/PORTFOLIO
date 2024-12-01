import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
const Home = () => {
    return (
        <div className="container text-center py-5">
            <h1 className="display-4 fw-bold mt-5" style={{color: 'white'}}>
                <span
                    style={{
                        background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    I'  m Muskan Zahid, 
                </span>
                <br />

                a Frontend Web Developer
            </h1>
            <p className="lead my-4 mx-auto" style={{ fontSize: "25px" , maxWidth: "600px" , color: "white"}}>
                Aspiring Frontend Developer with a strong foundation in HTML, CSS, and JavaScript.  A quick learner with a passion for web development.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <a 
                    href="https://www.linkedin.com/in/muskan-zahid/" 
                    className="btn btn-gradient text-white px-4 py-2 rounded-pill" 
                    style={{
                        background: "linear-gradient(270deg, #DF8908 10%, #B415FF 100%)",
                        border: "none",
                    }}
                >
                    Connect With Me
                </a>
                <a 
                    href="Muskan's Resume.pdf"
                    download="Muskan's Resume.pdf" 
                    className="btn btn-outline-light px-4 py-2 rounded-pill" 
                    style={{
                        border: "2px solid #fff",
                    }}
                >
                    View Resume
                </a>
            </div>
            <section id="projects"><Project /></section>
            <section id="skills"><Skills /></section>
            <section id="experience"><Experience /></section>
            <section id="contact"><Contact /></section>
        </div>

    );
};

export default Home;
