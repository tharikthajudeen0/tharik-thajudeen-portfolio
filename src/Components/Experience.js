import React from 'react';

const ExperienceSection = () => {
  return (
    <section id='experience' className="flex items-center justify-center bg-nav-custom-blue text-white px-8 md:px-16 py-8 md:py-16">
      <div className="w-full md:w-3/5 mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold">Experience</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8">
          <div className="bg-white bg-opacity-5 shadow-md p-6 rounded-lg">
            <h3 className="text-2xl md:text-4xl font-semibold mb-4">Media Secretary</h3>
            <div className="flex flex-col justify-between text-xl md:text-2xl mb-4">
              <p>Muslim Majlis - USJ</p>
              <p>March 2023 - February 2024</p>
            </div>
            <p className="text-lg md:text-xl mb-4 text-custom-gray">
              As a media secretary, I handle social media, create tailored content, and optimize strategies for impact.
            </p>
            <p className="text-lg md:text-xl mb-4 text-custom-gray">
              Responsibilities:
            </p>
            <ul className="list-disc text-base md:text-lg pl-6 mt-2 text-custom-gray">
              <li>Social Media Management</li>
              <li>Content Creation</li>
              <li>Strategy Optimization</li>
              {/* Add more responsibilities as needed */}
            </ul>
          </div>
          {/* Add more experience details here */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
