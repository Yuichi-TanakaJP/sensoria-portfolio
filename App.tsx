import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import FeaturedJournal from './components/FeaturedJournal';
import LatestJournal from './components/LatestJournal';
import Profile from './components/Profile';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorksPage from './components/WorksPage';
import JournalPage from './components/JournalPage';
import FeaturedPage from './components/FeaturedPage';

const getRoute = (): 'home' | 'works' | 'journal' | 'featured' => {
  if (window.location.hash.startsWith('#/works')) {
    return 'works';
  }
  if (window.location.hash.startsWith('#/journal')) {
    return 'journal';
  }
  if (window.location.hash.startsWith('#/featured')) {
    return 'featured';
  }
  return 'home';
};

const App: React.FC = () => {
  const [route, setRoute] = React.useState<'home' | 'works' | 'journal' | 'featured'>(getRoute);

  React.useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === 'works') {
    return <WorksPage />;
  }
  if (route === 'journal') {
    return <JournalPage />;
  }
  if (route === 'featured') {
    return <FeaturedPage />;
  }

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-800 selection:bg-earth-terra/30 selection:text-earth-terra">
      <Header />
      <main>
        <Hero />
        <Concept />
        <FeaturedJournal />
        <LatestJournal />
        <Profile />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
