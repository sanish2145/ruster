import React from 'react';

function Skills() {
  const skills = ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Node.js', 'Git', 'Vite'];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;