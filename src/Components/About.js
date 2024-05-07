import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    const [currentSection, setCurrentSection] = useState(0);

    const sections = [
        {
            title: "Introduction",
            content: "👋 Hello, I'm Tharik Thajudeen, a Bachelor of Information Communication Technology undergraduate with a passion for technology and a knack for creative design. My journey in the tech world has been diverse, and I'm excited to share my skills and aspirations with you."
        },
        {
            title: "Interest in Data Analysis",
            content: "📊 Data analysis is where my heart truly lies. I'm self-driven in honing my skills in this domain, constantly seeking new challenges and opportunities to apply my analytical prowess."
        },
        {
            title: "Graphic Design Skills",
            content: "🎨 In addition to my technical skills, I'm also proficient in graphic design, with experience in tools like Photoshop, Lightroom, After Effects, Illustrator, and Canva. This creative side of mine allows me to approach problem-solving with a unique perspective."
        },
        {
            title: "Beyond Tech",
            content: "🏏 Beyond the tech world, I am a dedicated softball cricketer, demonstrating my commitment to teamwork and perseverance. This experience has taught me valuable lessons in collaboration, strategy, and discipline, which I bring to every aspect of my life."
        },
        {
            title: "Conclusion",
            content: "Let's connect and explore how we can create meaningful tech solutions together. Feel free to reach out if you share my interests or if you'd like to collaborate on innovative projects. I look forward to connecting with you!"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSection(currentSection === sections.length - 1 ? 0 : currentSection + 1);
        }, 5000); // Change section every 5 seconds

        return () => clearInterval(interval);
    }, [currentSection, sections.length]);

    const nextSection = () => {
        setCurrentSection(currentSection === sections.length - 1 ? 0 : currentSection + 1);
    };

    const previousSection = () => {
        setCurrentSection(currentSection === 0 ? sections.length - 1 : currentSection - 1);
    };

    return (
        <section id='about' className="flex bg-nav-custom-blue text-white items-center  justify-center px-[50px] py-[50px] md:py-[100px] md:px-[100px]">
            <div className="max-w-4xl mx-auto">
                <h1 className=" text-4xl md:text-6xl font-bold mb-[40px] md:mb-[60px] text-center">About Me</h1>
                <div className="about-section hover:bg-opacity-20 bg-white bg-opacity-10 rounded-lg shadow-xl p-6 mb-4 md:mb-0 md:mr-4">
                    <h2 className=" text-2xl md:text-4xl font-bold mb-4">{sections[currentSection].title}</h2>
                    <p className=" text-xl md:text-2xl mb-4 text-custom-gray">{sections[currentSection].content}</p>
                    <div className="flex justify-between">
                        <button onClick={previousSection} className="bg-white bg-opacity-10 p-2 rounded-lg">
                            <FontAwesomeIcon icon={faChevronLeft} /> Previous
                        </button>
                        <button onClick={nextSection} className="bg-white bg-opacity-10 p-2 rounded-lg">
                            Next <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
