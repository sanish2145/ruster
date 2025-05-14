import React from 'react';

function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-xl mb-6">Web Developer & Designer</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100">Get in Touch</a>
      </div>
    </section>
  );
}

export default Home;