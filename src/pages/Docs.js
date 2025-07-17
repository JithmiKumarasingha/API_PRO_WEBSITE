import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const tabs = [
    { id: 'getting-started', label: 'Getting Started', icon: '🚀' },
    { id: 'authentication', label: 'Authentication', icon: '🔐' },
    { id: 'api-reference', label: 'API Reference', icon: '📚' },
    { id: 'sdks', label: 'SDKs', icon: '📦' },
   { id: 'examples', label: 'Examples', icon: '💡' }
  ];

  const codeExamples = {
    javascript: {
      authentication: `// Initialize API PRO client
const ApiPro = require('api-pro-sdk');

const client = new ApiPro({
  apiKey: 'your-api-key-here',
  baseUrl: 'https://api.apipro.com/v1'
});

// Make authenticated request
const response = await client.get('/users');
console.log(response.data);`,
      
      basicRequest: `// Basic API request
const response = await fetch('https://api.apipro.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`,

      createUser: `// Create a new user
const newUser = await client.post('/users', {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'developer'
});

console.log('Created user:', newUser.data);`,

     
    },
    
    python: {
      authentication: `# Initialize API PRO client
import apipro

client = apipro.Client(
    api_key='your-api-key-here',
    base_url='https://api.apipro.com/v1'
)

# Make authenticated request
response = client.get('/users')
print(response.json())`,
      
      basicRequest: `# Basic API request
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.apipro.com/v1/users', headers=headers)
data = response.json()
print(data)`,

      createUser: `# Create a new user
new_user = client.post('/users', {
    'name': 'John Doe',
    'email': 'john@example.com',
    'role': 'developer'
})

print('Created user:', new_user.json())`,

     
    },
    
    curl: {
      authentication: `# Authentication with API key
curl -X GET "https://api.apipro.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      
      basicRequest: `# Basic GET request
curl -X GET "https://api.apipro.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,

      createUser: `# Create a new user
curl -X POST "https://api.apipro.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "role": "developer"
  }'`,

     
    }
  };

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/users',
      description: 'Retrieve all users',
      response: '{ "users": [...], "total": 100, "page": 1 }'
    },
    {
      method: 'POST',
      endpoint: '/users',
      description: 'Create a new user',
      response: '{ "id": "123", "name": "John Doe", "email": "john@example.com" }'
    },
    {
      method: 'GET',
      endpoint: '/users/{id}',
      description: 'Get user by ID',
      response: '{ "id": "123", "name": "John Doe", "email": "john@example.com" }'
    },
    {
      method: 'PUT',
      endpoint: '/users/{id}',
      description: 'Update user by ID',
      response: '{ "id": "123", "name": "Jane Doe", "email": "jane@example.com" }'
    },
    {
      method: 'DELETE',
      endpoint: '/users/{id}',
      description: 'Delete user by ID',
      response: '{ "message": "User deleted successfully" }'
    }
  ];

  const sdkLanguages = [
    { name: 'JavaScript/Node.js', install: 'npm install api-pro-sdk', docs: 'https://docs.apipro.com/sdk/javascript' },
    { name: 'Python', install: 'pip install api-pro-python', docs: 'https://docs.apipro.com/sdk/python' },
    { name: 'Ruby', install: 'gem install api-pro-ruby', docs: 'https://docs.apipro.com/sdk/ruby' },
    { name: 'PHP', install: 'composer require apipro/php-sdk', docs: 'https://docs.apipro.com/sdk/php' },
    { name: 'Go', install: 'go get github.com/apipro/go-sdk', docs: 'https://docs.apipro.com/sdk/go' },
    { name: 'Java', install: 'Maven/Gradle available', docs: 'https://docs.apipro.com/sdk/java' }
  ];

  const CodeBlock = ({ code, language }) => (
    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{language}</span>
        <button 
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-gray-400 hover:text-white text-sm"
        >
          Copy
        </button>
      </div>
      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started with API PRO</h2>
              <p className="text-gray-600 mb-6">
                Welcome to API PRO! This guide will help you get up and running with our API management platform in minutes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Get Your API Key</h3>
              <p className="text-gray-600 mb-4">
                First, you'll need to sign up for an API PRO account and get your API key from the dashboard.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 text-sm">
                  📝 Your API key can be found in your dashboard under Settings → API Keys
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Make Your First Request</h3>
              <div className="space-y-4">
                <div className="flex space-x-2 mb-4">
                  {['javascript', 'python', 'curl'].map(lang => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-3 py-1 rounded text-sm ${
                        selectedLanguage === lang 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>
                <CodeBlock 
                  code={codeExamples[selectedLanguage].basicRequest} 
                  language={selectedLanguage}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Handle Responses</h3>
              <p className="text-gray-600 mb-4">
                All API responses are returned in JSON format with consistent structure:
              </p>
              <CodeBlock 
                code={`{
  "success": true,
  "data": {
    // Your response data here
  },
  "message": "Request successful",
  "timestamp": "2024-01-15T10:30:00Z"
}`} 
                language="json"
              />
            </div>
          </div>
        );

      case 'authentication':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Authentication</h2>
              <p className="text-gray-600 mb-6">
                API PRO uses API keys for authentication. Include your API key in the Authorization header of every request.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">API Key Authentication</h3>
              <div className="space-y-4">
                <div className="flex space-x-2 mb-4">
                  {['javascript', 'python', 'curl'].map(lang => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-3 py-1 rounded text-sm ${
                        selectedLanguage === lang 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>
                <CodeBlock 
                  code={codeExamples[selectedLanguage].authentication} 
                  language={selectedLanguage}
                />
              </div>
            </div>
          </div>
        );

      case 'api-reference':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
              <p className="text-gray-600 mb-6">
                Complete reference for all available endpoints in the API PRO platform.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Base URL</h3>
              <CodeBlock code="https://api.apipro.com/v1" language="text" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Endpoints</h3>
              <div className="space-y-4">
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold mr-3 ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                        endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                        {endpoint.endpoint}
                      </code>
                    </div>
                    <p className="text-gray-600 mb-2">{endpoint.description}</p>
                    <div className="text-sm">
                      <span className="font-medium">Response:</span>
                      <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-xs">
                        {endpoint.response}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'sdks':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Software Development Kits (SDKs)</h2>
              <p className="text-gray-600 mb-6">
                We provide official SDKs for popular programming languages to make integration easier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sdkLanguages.map((sdk, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {sdk.name}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Installation:</p>
                    <code className="bg-gray-100 px-3 py-2 rounded text-sm block">
                      {sdk.install}
                    </code>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(sdk.docs, '_blank')}
                  >
                    View Documentation
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Examples</h2>
              <p className="text-gray-600 mb-6">
                Real-world examples to help you integrate API PRO into your applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Creating a User</h3>
              <div className="space-y-4">
                <div className="flex space-x-2 mb-4">
                  {['javascript', 'python', 'curl'].map(lang => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-3 py-1 rounded text-sm ${
                        selectedLanguage === lang 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>
                <CodeBlock 
                  code={codeExamples[selectedLanguage].createUser} 
                  language={selectedLanguage}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Error Handling</h3>
              <CodeBlock 
                code={`// Error handling example
try {
  const response = await client.get('/users/invalid-id');
  console.log(response.data);
} catch (error) {
  if (error.response) {
    // Server responded with error status
    console.error('Error:', error.response.data.message);
    console.error('Status:', error.response.status);
  } else if (error.request) {
    // Request was made but no response received
    console.error('Network error:', error.message);
  } else {
    // Something else happened
    console.error('Error:', error.message);
  }
}`} 
                language="javascript"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rate Limiting</h3>
              <CodeBlock 
                code={`// Handle rate limiting
const makeRequestWithRetry = async (url, options, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      
      if (response.status === 429) {
        // Rate limited, wait and retry
        const retryAfter = response.headers.get('Retry-After') || 1;
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        continue;
      }
      
      return response;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
    }
  }
};`} 
                language="javascript"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            API <span className="text-blue-300">Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Everything you need to integrate API PRO into your applications. 
            Clear guides, code examples, and comprehensive reference materials.
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Documentation
                </h3>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab.id 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Docs;