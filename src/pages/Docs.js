import React from 'react';

const Docs = () => (
  <div className="flex">
    <aside className="w-64 bg-gray-100 p-6">
      <h2 className="font-bold mb-4">GETTING STARTED</h2>
      <ul className="space-y-2 text-blue-600">
        <li className="font-medium">Authentication</li>
      </ul>
      <h2 className="font-bold mt-6 mb-4">CORE RESOURCES</h2>
      <ul className="space-y-2">
        <li className="text-blue-600 font-bold">GET /users</li>
        <li>POST /users</li>
        <li>GET /analytics</li>
        <li>GET /logs</li>
      </ul>
    </aside>
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">GET /v1/users</h1>
      <p className="mb-4">Retrieves a list of all users associated with your project.</p>
      <h2 className="text-lg font-semibold">Example Request</h2>
      <pre className="bg-gray-100 p-4 rounded mb-6">
{`fetch('https://api.example.com/v1/users', {
  headers: {
    Authorization: 'Bearer YOUR_API_KEY'
  }
}).then(res => res.json()).then(data => console.log(data));`}
      </pre>
      <h2 className="text-lg font-semibold">Example Response (200 OK)</h2>
      <pre className="bg-gray-100 p-4 rounded">
{`[
  {
    "id": 1,
    "name": "Jane Doe",
    "email": "jane@example.com"
  },
  ...
]`}
      </pre>
    </main>
  </div>
);

export default Docs;