'use client';

import { scrollToElement } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-100 to-yellow-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <span className="text-3xl font-bold text-gray-900">
              Trialsource
            </span>
            <p className="text-gray-600 mt-4 text-lg">
              Because Access Can Save Lives
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 md:justify-end items-start">
            <a
              href="#home"
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#find-trial"
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Find a Trial
            </a>
            <a
              href="#"
              onClick={(e) => {
                scrollToElement(e, "how-it-works", 80);
              }}
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              How It Works
            </a>
            <a
              href="#privacy"
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 Trialsource. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
