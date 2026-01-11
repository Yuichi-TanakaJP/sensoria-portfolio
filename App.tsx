import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import FeaturedJournal from './components/FeaturedJournal';
import LatestJournal from './components/LatestJournal';
import Profile from './components/Profile';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-earth-terra/30 selection:text-earth-terra">
      <Header />
      <main>
        <Hero />
        <Concept />
        <FeaturedJournal />
        <LatestJournal />
        <Profile />
      </main>
      <Footer />
    </div>
  );
};

export default App;