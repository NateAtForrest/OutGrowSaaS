import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Navigation />
        <main className="flex-1 ml-64 p-8">
          <Dashboard />
        </main>
      </div>
    </Router>
  );
}

export default App;