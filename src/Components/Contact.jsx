import React from 'react';
import './Contact.css';
import Email from '../Images/email.png';
import LinkedIn from '../Images/linkedin.png';

const Contact = () => {
    return (
        <div className="skills">
            <div className="skills-title">
                <h1>
                    CONTACT
                </h1>
            </div>

            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src={Email} alt="" class="icon contact-icon"/>
                    <p><a href="mailto:muskanzahid.pk@gmail.com">muskanzahid.pk@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src={LinkedIn} alt="" class="icon contact-icon" />
                    <p><a href="https://www.linkedin.com/in/muskan-zahid/">LinkedIn</a></p>
                </div>
            </div>
            <nav>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li><a href="https://www.linkedin.com/in/muskan-zahid/"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/Muskan-Zahid121/"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="https://za.pinterest.com/muskanzahidpk/"><i class="fa-brands fa-pinterest"></i></a></li>
                        <li><a href="https://web.facebook.com/profile.php?id=61564976676875"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/@Muskan_Zahid123"><i class="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </nav>
            <p>Copyright ©: 2024 Muskan Zahid. All rights reserved.</p>
        </div>    
    )
}
export default Contact;