import React from 'react'
import './footer.css';
import instagram from '../assets/images/footer-image-instagram.png';
import email from '../assets/images/footer-image-email.png';
import github from '../assets/images/footer-image-github.png';

function footer() {
    return (
        <div className='footer'>
            <div className="cantainer">
                <div className="footer-wrap">
                    <h1 className="footer-title">Front-End Developer</h1>
                    <p className="footer-subtitle">This is my portfolio website, which gives a brief introduction about me and what programs I can work with. I created this portfolio to gain experience in this field and learn how to create some small websites as a freelancer.</p>
                    <div className="footer-icons">
                        <a href="https://www.instagram.com/shahriyor.023/">
                            <img src={instagram} alt="instagram-image" />
                        </a>
                        <a href="https://www.ubabaniyozov@gmail.com">
                            <img src={email} alt="email-image" />
                        </a>
                        <a href="https://github.com/sheyh77">
                            <img src={github} alt="github-image" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer