import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Donor from '../Image/donor.jpeg';
import Portfolio from '../Image/portfolio.jpeg';
import Mart from '../Image/mern-mart.png';


export default function Projects() {
    // Project data
    const projectsData = [
        {
            image: Donor,
            title: 'DONOR : Blood Donation Mobile App',
            description: 'Directed integration of Express.js, Node.js, MongoDB in a Blood Donation Mobile App project, complemented by React Native. Successfully met tight project deadlines despite initial unfamiliarity.',
            frontend: 'React Native, Expo ',
            backend: 'Express.js, Node.js, MongoDB ',
            githubLink: 'https://github.com/tharikthajudeen0/BloodDonorApp-ReactNative',
            projectLink: 'https://www.example.com/task-manager'
        },
        {
            image: Portfolio,
            title: 'Portfolio Website + Admin Panel',
            description: ' Constructed a fundamental portfolio website using HTML, CSS, JavaScript, PHP and MySQL, gaining insight into both frontend and backend intricacies.',
            frontend: 'HTML, CSS, JavaScript',
            backend: 'PHP, MySQL',
            githubLink: 'https://github.com/tharikthajudeen0/Portfolio-AdminPanel',
            projectLink: 'https://www.example.com/portfolio'
        },
        {
            image: Mart,
            title: 'MERN Mart : E-Commerce Webbsite',
            description: 'Introducing MERN Mart It is a very simple e-commerce website developed using the MERN stack. Covering all the basic e-commerce concepts briefly, it offers a straightforward solution for your online shopping needs.',
            frontend: 'React.js',
            backend: 'Express.js, Node.js, MongoDB',
            githubLink: 'https://github.com/tharikthajudeen0/MERN-Mart-E-commerce',
            projectLink: 'https://www.example.com/e-commerce-app'
        },
    ];

    // State for controlling current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto slide change effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % projectsData.length);
        }, 5000); // Change the interval time as needed
        return () => clearInterval(interval);
    }, [projectsData.length]);

    // Render project items
    const renderProjectItems = () => {
        return projectsData.map((project, index) => (
            <div key={index} className="flex items-center justify-center"> {/* Centering each project */}
                <div className="bg-white bg-opacity-5 text-white rounded-xl shadow-xl p-8 w-full md:max-w-full"> {/* Adjusting the width of the project container */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center"> {/* Centering content in each project */}
                        <div className="md:w-1/3 md:mr-8 mb-6 md:mb-0 flex justify-center"> {/* Centering image */}
                            <img src={project.image} alt={project.title} className=" w-full h-auto max-h-96" /> {/* Adjusting max-height of image */}
                        </div>
                        <div className="md:w-2/3 flex flex-col md:items-start justify-center"> {/* Centering and aligning content */}
                            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">{project.title}</h2> {/* Centering title on mobile */}
                            <p className="text-lg mb-6 text-center md:text-left text-custom-gray">{project.description}</p>
                            <p className="text-xl mb-6 text-custom-gray">Frontend : {project.frontend}</p>
                            <p className="text-xl mb-6 text-custom-gray">Backend : {project.backend}</p>
                            <div className="flex md:justify-start "> {/* Centering links */}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mr-6 text-blue-400 hover:underline">GitHub</a>
                                {/* <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">View Project</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic slideshow
        autoplaySpeed: 5000, // Set the interval time between slides (in milliseconds)
        initialSlide: currentSlide,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <section id='project' className="bg-custom-blue text-white px-[50px] py-[50px] md:py-[100px] md:px-[100px] flex flex-col items-center justify-center"> {/* Centering the main container */}
            <h1 className="text-center text-4xl md:text-6xl font-bold mb-[50px]">Featured Projects</h1>
            <div className="w-full mx-auto">
                <Slider {...settings}>
                    {renderProjectItems()}
                </Slider>
            </div>
        </section>
    );
}
