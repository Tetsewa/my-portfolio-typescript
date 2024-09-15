import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8 font-sans leading-relaxed bg-gray-50 flex flex-col md:flex-row items-center md:items-start">
      {/* Image Section */}
      <div className="mb-4 md:mb-0 md:mr-8 flex-shrink-0">
        <img 
          src="/Ama-2.jpg" 
          alt="Ama Williams" 
          className="w-60 h-60 md:w-64 md:h-64 object-cover shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="text-section md:flex-grow">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hi! I'm <strong>Ama Williams</strong>, a passionate web developer dedicated to creating seamless, responsive, and visually stunning web experiences. 
          With a strong foundation in HTML, CSS, JavaScript, and frameworks like <strong>[MERN stack and JavaScript]</strong>, I specialize in crafting websites and web applications 
          that prioritize both functionality and user experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I thrive on solving problems through code and am constantly learning and adapting to the ever-evolving web development landscape. 
          My portfolio reflects my journey in building projects that range from games and management applications to dynamic web applications and e-commerce platforms.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          When I'm not coding, I enjoy <strong>[listening to music, singing, and baking]</strong>, which keeps me creative and inspired.
        </p>
        <p className="text-lg text-gray-700">
          Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work!
        </p>
      </div>
    </div>
  );
}

export default About;
