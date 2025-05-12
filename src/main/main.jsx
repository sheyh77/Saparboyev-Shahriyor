import React from 'react'
import './main.css';
import image from '../assets/images/main-img.png';
import img2 from '../assets/images/about-image(2).jpg';
import img3 from '../assets/images/about-image(3).png';
import serviceimg from '../assets/images/services-image(1).png';
import serviceimg2 from '../assets/images/services-device-img.jpg';
import serviceimg3 from '../assets/images/about-image(4).jpg';
import portfolioimg1 from '../assets/images/portfolio-image(1).jpg';

function main() {
    return (
        <div className='main'>
            {/* banner start */}
            <div className='banner'>
                <div className="cantainer">
                    <div className="banner-wrap">
                        <div className="banner-left">
                            <h1 className="banner-title">I'm Front-End <br /> Developer S.Shahriyor</h1>
                            <p className="banner-subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quidem voluptates minus, animi natus a laudantium maiores rem. Magni perspiciatis, quasi odio eaque repudiandae dolorem amet dolore soluta. Voluptas, error.</p>
                            <button className='banner-btn'>Learn More</button>
                        </div>
                        <div className="banner-right">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* banner stop */}

            {/* about start */}
            <div className='about'>
                <div className="cantainer">
                    <div className="about-wrap">
                        <div className="about-left">
                            <h1 className="about-title">About</h1>
                            <p className="about-subtitle">I'm Shahriyor, a passionate front-end developer dedicated to crafting user-friendly and responsive web applications. I specialize in JavaScript, React, and modern web technologies to build interactive and efficient user experiences.</p>
                        </div>
                        <div className="about-right">
                            <div className="about-right-cards">
                                <div className="about-right-item">
                                    <img src={img2} alt="js-image" />
                                    <p>JavaScript</p>
                                </div>
                                <div className="about-right-item">
                                    <img src={img3} alt="react-image" />
                                    <p>React</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about stop */}

            {/* services start */}
            <section className="services">
                <div className="cantainer">
                    <div className="services-wrap">
                        <h1 className="services-title">My Services</h1>
                        <div className="service-cards">
                            <div className="service-cards-item">
                                <img src={serviceimg} alt="service-image" />
                                <p className="cards-title">Web Development</p>
                                <p className="cards-desc">Building modern and responsive websites.</p>
                            </div>
                            <div className="service-cards-item">
                                <img src={serviceimg2} alt="service-image" />
                                <p className="cards-title">Mobile Friendly Design</p>
                                <p className="cards-desc">Ensuring optimal user experience on all device.</p>
                            </div>
                            <div className="service-cards-item">
                                <img src={serviceimg3} alt="service-image" />
                                <p className="cards-title">React.js projects</p>
                                <p className="cards-desc">Developing intultive and engaging user interface.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services stop */}

            {/* portfolio start */}
            <section className="portfolio">
                <div className="cantainer">
                    <div className="portfolio-wrap">
                        <h1 className="portfolio-title">My portfolio</h1>
                        <div className="portfolio-cards">
                            <div className="portfolio-cards-item">
                                <div className="portfolio-cards-item-img">
                                    <img src={portfolioimg1} alt="portfolio-image" />
                                </div>
                                <div className="portfolio-item-text">
                                    <h1 className="portfolio-item-title">Website</h1>
                                    <p className="portfolio-desc">A responsive knited <br /> website.</p>
                                    <a href="https://shimmering-praline-50c2cc.netlify.app/">
                                        <button className='portfolio-item-btn'>Viev project</button>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-cards-item">
                                <div className="portfolio-cards-item-img">
                                    {/* <img src={portfolioimg1} alt="portfolio-image" /> */}
                                </div>
                                <div className="portfolio-item-text">
                                    <h1 className="portfolio-item-title">...</h1>
                                    <p className="portfolio-desc">Here you can feature your personal website or software project.</p>
                                    <a href="#">
                                        <button className='portfolio-item-btn'>Viev project</button>
                                    </a>
                                </div>
                            </div>
                            <div className="portfolio-cards-item">
                                <div className="portfolio-cards-item-img">
                                    {/* <img src={portfolioimg1} alt="portfolio-image" /> */}
                                </div>
                                <div className="portfolio-item-text">
                                    <h1 className="portfolio-item-title">...</h1>
                                    <p className="portfolio-desc">Here you can feature your personal website or software project.</p>
                                    <a href="#">
                                        <button className='portfolio-item-btn'>Viev project</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* portfolio stop */}
        </div>
    )
}

export default main