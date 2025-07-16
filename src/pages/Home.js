import React from 'react';
import Button from '../components/ui/Button';

const Home = () => {
  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Go beyond basic metrics. Understand your API usage with intelligent, real-time insights and predictive analytics to stay ahead of demand."
    },
    {
      title: "Bank-Grade Security",
      description: "Protect your endpoints with OAuth 2.0, API key management, and automated threat detection. Your data's integrity is our top priority."
    },
    {
      title: "Superior Developer Experience",
      description: "With auto-generated documentation and a seamless CLI, we make building and integrating APIs a joy, not a chore. Cut your development time in half."
    }
  ];

  const companies = [
    "InnovateCorp",
    "QuantumLeap Tech",
    "DataWeave Solutions",
    "NextGen Systems",
    "Apex Digital"
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Effortless API Management.<br />
            <span className="text-blue-300">Powerful Results.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trusted by the World's Most Innovative Companies
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-gray-700 p-4 border-2 border-gray-200 rounded-lg">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;