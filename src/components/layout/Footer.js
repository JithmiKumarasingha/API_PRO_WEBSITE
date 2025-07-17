import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-8 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-4 left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                API PRO
              </h3>
            </div>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
              Effortless API Management.
              <span className="block text-blue-400 font-medium">
                Powerful Results.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <h4 className="text-2xl font-semibold mb-4 text-center lg:text-right">
              Connect with us
            </h4>
            <div className="flex space-x-6">
              <a
                href="#"
                className="group flex items-center justify-center w-14 h-14 bg-gray-800/50 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
                  Twitter
                </span>
              </a>
              <a
                href="#"
                className="group flex items-center justify-center w-14 h-14 bg-gray-800/50 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
                  LinkdIn
                </span>
              </a>
              <a
                href="#"
                className="group flex items-center justify-center w-14 h-14 bg-gray-800/50 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
              >
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
                  FB
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm font-light">
            © 2025
            <span className="mx-2 text-blue-400 font-medium">API PRO</span>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
