import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <div className="py-20 text-center">About Page - Coming Soon</div>;
      case 'pricing':
        return <div className="py-20 text-center">Pricing Page - Coming Soon</div>;
      case 'documentation':
        return <div className="py-20 text-center">Documentation Page - Coming Soon</div>;
      case 'contact':
        return <div className="py-20 text-center">Contact Page - Coming Soon</div>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;