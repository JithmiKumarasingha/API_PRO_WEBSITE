import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';

import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const users = await apiService.fetchUsers();
        // Transform users into team members with roles
        const team = users.slice(0, 6).map((user, index) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          role: ['CEO & Founder', 'CTO', 'Lead Developer', 'Product Manager', 'UI/UX Designer', 'DevOps Engineer'][index],
          bio: `${user.name} brings extensive experience in API development and management to the team.`,
          company: user.company.name
        }));
        setTeamMembers(team);
      } catch (err) {
        setError('Failed to load team members');
        console.error('Error fetching team:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const stats = [
    { number: '10M+', label: 'API Calls Processed' },
    { number: '500+', label: 'Companies Trust Us' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We continuously push the boundaries of what\'s possible in API management, leveraging cutting-edge AI and machine learning.',
      icon: '🚀'
    },
    {
      title: 'Developer-Centric',
      description: 'Every feature we build is designed with developers in mind, ensuring the best possible experience for our users.',
      icon: '💻'
    },
    {
      title: 'Security by Design',
      description: 'Security isn\'t an afterthought—it\'s built into every layer of our platform from the ground up.',
      icon: '🔒'
    },
    {
      title: 'Transparency',
      description: 'We believe in clear communication, honest pricing, and open dialogue with our community.',
      icon: '🌟'
    }
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-300">API PRO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            We're on a mission to simplify API management for developers worldwide, 
            making powerful tools accessible to everyone.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2023, API PRO was born from the frustration of dealing with 
                complex API management tools that were either too expensive or too 
                complicated for modern development teams.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founders, experienced engineers from top tech companies, recognized 
                that the future of software development depends on seamless API integration. 
                They set out to create a platform that would make API management as simple 
                as it should be.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, API PRO serves thousands of developers and hundreds of companies 
                worldwide, processing millions of API calls every day with industry-leading 
                performance and reliability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at API PRO
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind API PRO
            </p>
          </div>
          
          {error ? (
            <div className="text-center py-8">
              <p className="text-red-600 mb-4">{error}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                   <p className="text-blue-600 font-medium mb-2">
                    {member.email}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {member.bio}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Previously at {member.company}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

   
    </div>
  );
};

export default About;