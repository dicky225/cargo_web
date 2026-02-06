import { useState } from 'react';
import './App.css';
import HomePage from './components/Homepage/HomePage';
import CheckFlightStatusPage from './components/CheckFlightStatus/CheckFlightStatusCriteria/CheckFlightStatusCriteriaPage';
import CheckFlightStatusResultPage from './components/CheckFlightStatus/CheckFlightStatusResult/CheckFlightStatusResultPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (target) => {
    if (target === 'check-flight-status') {
      setCurrentPage('check-flight-status');
    } else if (target === 'check-flight-status-result') {
      setCurrentPage('check-flight-status-result');
    } else if (target === 'home') {
      setCurrentPage('home');
    }
  };

  if (currentPage === 'check-flight-status-result') {
    return <CheckFlightStatusResultPage onNavigate={handleNavigate} />;
  }

  if (currentPage === 'check-flight-status') {
    return <CheckFlightStatusPage onNavigate={handleNavigate} />;
  }

  return <HomePage onNavigate={handleNavigate} />;
}

export default App;
