import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import CV from '../PDF/Tharik_Thajudeen_Resume.pdf'

export default function Footer() {
    return (
        <section id='footer' className="bg-custom-blue text-white px-[50px] py-[50px] md:py-[100px] md:px-[100px]">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <div className="flex items-center text-custom-gray mb-2">
                        <FontAwesomeIcon icon={faPhone} className="text-xl mr-2" />
                        <span>+94 72 328 4001</span>
                    </div>
                    <div className="flex items-center text-custom-gray mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-xl mr-2" />
                        <span>tharikthajudeenOO@gmail.com</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                    <div className="flex items-center text-custom-gray mb-2">
                        <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
                        <a href="https://github.com/tharikthajudeen0" target="_blank" rel="noopener noreferrer" className=" hover:underline">tharikthajudeenO</a>
                    </div>
                    <div className="flex items-center text-custom-gray mb-2">
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl mr-2" />
                        <a href="https://www.linkedin.com/in/tharik-thajudeen-b58344226/" target="_blank" rel="noopener noreferrer" className="text-custom-gray hover:underline">tharik-thajudeen-b58344226</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Download</h2>
                    <div className="flex items-center mb-2">
                        <a href={CV} download="Tharik_Thajudeen_Resume.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
