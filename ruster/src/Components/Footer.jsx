import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 [Your Name]. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-blue-200">LinkedIn</a>
          <a href="#" className="hover:text-blue-200">GitHub</a>
          <a href="#" className="hover:text-blue-200">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;