import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', logo: 'path-to-your-image/react-logo.png' },
    { name: 'JavaScript', logo: 'path-to-your-image/js-logo.png' },
    { name: 'HTML', logo: 'path-to-your-image/html-logo.png' },
    { name: 'CSS', logo: 'path-to-your-image/css-logo.png' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className="absolute w-24 h-24 flex flex-col items-center justify-center skill-item"
            style={{ 
              transform: `
                rotate(${(360 / skills.length) * index}deg) 
                translateX(200px) 
                rotate(${-((360 / skills.length) * index)}deg)
              `
            }}
          >
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="w-16 h-16 object-contain"
            />
            <span className="mt-2 text-sm text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;