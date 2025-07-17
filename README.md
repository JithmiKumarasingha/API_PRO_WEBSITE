# Pages Included

Home - Hero section, features, and social proof
About Us - Mission statement and team members (fetched from API)
Pricing - Three-tier pricing plans
API Documentation - Developer documentation with code examples
Contact Us - Contact form and company details

# Tech Stack

Frontend Framework: React.js
Styling: Tailwind CSS
API Integration: JSONPlaceholder API
Version Control: Git
AI Development Tools: GitHub Copilot

# GitHub Copilot

Component Generation: Used GitHub Copilot to accelerate the creation of React components, particularly for repetitive structures like pricing cards and feature sections
Code Completion: Leveraged intelligent code suggestions for JavaScript logic, especially for the API integration and form handling
CSS/Tailwind Classes: Copilot helped generate appropriate Tailwind CSS classes for responsive design and component styling
Documentation Comments: Assisted in writing clear code comments and JSDoc documentation
Time Saved: Approximately 3-4 hours of development time through faster code completion and reduced syntax errors

# Installation & Setup
Prerequisites

Node.js (v14 or higher)
npm or yarn package manager

Steps to Run Locally

1. Clone the repository:
   git clone [your-repository-url]
   cd api-pro-website

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

4. Open your browser and navigate to:
   http://localhost:3000

# API Integration
The website integrates with the JSONPlaceholder API to display dynamic team member data:

Endpoint: https://jsonplaceholder.typicode.com/users
Usage: Fetches first 10 users and displays them as team members on the About Us page
Data Displayed: Name, Email, Website for each team member

