import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Robo from '../Image/robo.png';

// Navigation component
function Navigation({ toggleMenu }) {
    return (
        <nav className='hidden fixed md:block w-full bg-nav-custom-blue hover:text-custom-gray' >
            <ul className="flex justify-center items-center">
                <NavItem href="/">Home</NavItem>
                <NavItem href="#about">About</NavItem>
                <NavItem href="#education">Education</NavItem>
                <NavItem href="#skill">Skills</NavItem>
                <NavItem href="#project">Projects</NavItem>
                <NavItem href="#experience">Experience</NavItem>
                <NavItem href="#footer">Resume</NavItem>
            </ul>
        </nav>
    );
}

// Mobile navigation component
function MobileNavigation({ toggleMenu }) {
    return (
        toggleMenu && 
        <nav className='block md:hidden left-0 top-12 w-full h-auto bg-nav-custom-blue hover:text-custom-gray' >
            <ul className="flex flex-col md:flex-row ">
                <NavItem href="/">Home</NavItem>
                <NavItem href="#about">About</NavItem>
                <NavItem href="#education">Education</NavItem>
                <NavItem href="#skill">Skills</NavItem>
                <NavItem href="#project">Projects</NavItem>
                <NavItem href="#experience">Experience</NavItem>
                <NavItem href="#footer">Resume</NavItem>
            </ul>
        </nav>
    );
}

// Toggle button component
function ToggleButton({ toggleMenu, setToggleMenu }) {
    return (
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden px-3 py-3 ml-3'>
            <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
        </button>
    );
}

// Navigation item component
function NavItem ({href, children}) {
    return (
        <li className="px-6 py-3 text-xl hover:bg-custom-blue text-white transition-colors duration-300 group">
            <a href={href} className="relative">
                {children}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
        </li>
    );
}

// Home component
function Home() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const paragraphContent = "Enthusiastic beginner in MERN stack development, with React.js as the primary focus. Eager to learn and contribute to crafting dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Excited to build innovative solutions with these technologies.";
    const position = "Undergraduate";

    return (
        <section id='/' className='flex flex-col'>
            <div className="flex items-start justify-end font-serif text-lg text-custom-gray bg-nav-custom-blue">
                <Navigation />
                <MobileNavigation toggleMenu={toggleMenu} />
                <ToggleButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
            </div>
            
            {/* Content section */}
            <div className='flex flex-col md:flex-row bg-custom-blue text-white items-center md:h-screen px-[5px] py-[50px] md:px-[80px] md:py-[20px] '>
                {/* <img src={Robo} alt="Robo" className="w-2/5 object-contain" onError={(e) => e.target.style.display = 'none'} />  */}
                <div className='flex flex-col w-full px-5 py-5 text-center '>
                    <h1 className='font-bold font-serif text-4xl md:text-6xl '>Hello there! I'm <span className='text-custom-light-Blue'>Tharik Thajudeen</span></h1>
                    {/* <h2 className='font-bold text-gray-100 text-2xl mt-[10px] mb-[20px]'>{position}</h2> */}
                    <p className='font-sans text-xl md:text-2xl text-custom-gray py-[10px] md:py-[20px]'>{paragraphContent}</p>
                </div>
            </div>
        </section>  
    );
}

export default Home;
