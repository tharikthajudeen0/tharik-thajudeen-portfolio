import React from 'react';
import projectPortfolio from '../Image/project-portfolio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

export default function Education() {

    const projectsData = [
        {
            imageUrl: projectPortfolio,
            title: 'Bachelor of Information and Communication Technology (Hons.)',
            university: 'University of Sri Jayewardenepura',
            duration: '(2021-Present)',
            technology: 'Relevant Coursework: Data Structures and Algorithms, Web Development, Human-Computer Interaction'
        },
        {
            imageUrl: projectPortfolio,
            title: 'Diploma in English',
            university: 'Rajarata University of Sri Lanka',
            duration: '(2020-2021)',
            technology: 'Relevant Coursework: Data Structures and Algorithms, Web Development, Human-Computer Interaction'
        },
    ];

    const ProjectItem = ({ project, isLast }) => {
        return (
            <div className={`bg-white bg-opacity-10 py-[20px] flex flex-row ${isLast ? '' : 'mb-0'}`}>
                <div className="w-1/4 flex justify-center items-center">
                    <FontAwesomeIcon icon={faUserGraduate} className="text-5xl" />
                </div>
                <div className="w-3/4 mt-[10px] md:mt-[20px] ">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <p className="text-xl text-custom-gray">{project.university}</p>
                    <p className="text-xl text-custom-gray">{project.duration}</p>
                    {/* <p className="text-sm text-custom-light-Blue mt-2">{project.technology}</p> */}
                </div>
            </div>
        );
    };

    return (
        <section id='education' className="bg-custom-blue text-white px-[20px] py-[50px] md:py-[100px] md:px-[100px]">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-[40px] md:mb-[60px]">Education & Qualification</h1>
            <div className="flex flex-col space-y-2 md:space-y-2">
                {projectsData.map((project, index) => (
                    <ProjectItem key={index} project={project} isLast={index === projectsData.length - 1}  />
                ))}
            </div>
        </section>
    );
}
