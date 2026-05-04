import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Profile from './components/Profile';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorksPage from './components/WorksPage';

const getRoute = (): 'home' | 'works' => {
  if (window.location.hash.startsWith('#/works')) {
    return 'works';
  }
  return 'home';
};

const App: React.FC = () => {
  const [route, setRoute] = React.useState<'home' | 'works'>(getRoute);

  React.useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [route]);

  if (route === 'works') {
    return <WorksPage />;
  }

  return (
    <div id="top" className="min-h-screen bg-stone-50 text-stone-800 selection:bg-earth-terra/30 selection:text-earth-terra">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Profile />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
