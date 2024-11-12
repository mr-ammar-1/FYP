import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-violet-100 text-violet-800 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600">LOGO</h3>
            <p className="mt-4 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600">Social Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">Twitter</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">Upload Video</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">Register</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-violet-800">Login</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-violet-600">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">info@xyz.com</li>
              <li className="text-gray-600">+92300000000</li>
              <li className="text-gray-600">Lahore, Punjab, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-violet-200 pt-6 text-center">
          <p className="text-gray-600">
            &copy; 2024 name: All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
