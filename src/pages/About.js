import React, { useEffect, useState } from 'react';
import { apiService } from '../services/api';
import Loader from '../components/ui/Loader';

const About = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-8">
          We Empower Developers to Build The Future. In today's digital world, APIs are the backbone of innovation. Yet, managing them has become increasingly complex. API PRO was founded on a simple principle: to give developers and businesses the tools they need to build, manage, and scale their APIs without the headache.
        </p>

        <h2 className="text-2xl font-semibold mb-6">The Team Behind API PRO</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div key={user.id} className="border p-4 rounded-lg shadow">
                <h3 className="text-xl font-medium">{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Website: {user.website}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default About;