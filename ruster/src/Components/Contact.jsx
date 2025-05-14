import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border rounded-lg"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={() => alert('Form submission not implemented')}
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;