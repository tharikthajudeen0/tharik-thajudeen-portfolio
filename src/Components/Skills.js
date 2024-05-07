import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// Import images for Frontend technologies
import Reactjs from '../Image/skill-react.png';
import ReactNative from '../Image/skill-react-native.png';
import Html from '../Image/skill-html.png';
import TailwindCss from '../Image/skill-tailwind-css.png';
import Css from '../Image/skill-css.png';
import Figma from '../Image/skill-figma.png';

// Import images for Backend technologies
import Node from '../Image/skill-node.png';
import Express from '../Image/skill-express.png';

// Import images for Database technologies
import MongoDB from '../Image/skill-mongodb.png';
import Mysql from '../Image/skill-mysql.png';

export default function Skills() {
    const [expandedSection, setExpandedSection] = useState(null);

    const handleSectionHover = (section) => {
        setExpandedSection(section);
    };

    const isSectionExpanded = (section) => expandedSection === section;

    // Store images and text in objects based on their categories
    const technologyImages = {
        Frontend: { React: Reactjs, 'React Native': ReactNative, HTML: Html, 'Tailwind CSS': TailwindCss, CSS: Css, Figma: Figma },
        Backend: { 'Node.js': Node, Express: Express },
        Database: { MongoDB: MongoDB, MySQL: Mysql },
    };

    return (
        <section id='skill' className="flex flex-col items-center bg-nav-custom-blue text-white px-[50px] py-[50px] md:py-[100px] md:px-[100px]">
            <h1 className="text-4xl md:text-6xl font-bold mb-[40px] md:mb-[60px]">Skills</h1>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 md:gap-10 w-full max-w-screen-lg">
                {Object.entries(technologyImages).map(([category, technologies]) => (
                    <div
                        key={category}
                        className={`border-b border-white rounded-md shadow-2xl p-4 cursor-pointer transition duration-300 ease-in-out ${
                            isSectionExpanded(category) ? 'bg-gray-500' : ''
                        }`}
                        onMouseEnter={() => handleSectionHover(category)}
                        onMouseLeave={() => setExpandedSection(null)}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className=" text-xl md:text-2xl mb-2">{category.toUpperCase()}</h2>
                            <FontAwesomeIcon
                                icon={isSectionExpanded(category) ? faCaretUp : faCaretDown}
                                className="ml-[10px] text-md"
                            />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {isSectionExpanded(category) &&
                                Object.entries(technologies).map(([tech, image], index) => (
                                    <div
                                        key={index}
                                        className="w-full p-4 opacity-100 transform scale-100 transition-all duration-300"
                                    >
                                        <img src={image} alt={tech} className="object-contain w-full h-8 md:h-16" />
                                        <p className="text-center mt-2">{tech}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
