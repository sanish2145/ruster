import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="https://via.placeholder.com/400" alt="Profile" className="rounded-full mx-auto" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
Hello it's me sanish Bhandari.
              I'm a passionate web developer with experience in building modern, responsive websites using React, Tailwind CSS, and more.
              I love creating user-friendly interfaces and solving complex problems.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies or working on personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;