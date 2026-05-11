import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Profile from './components/Profile';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorksPage from './components/WorksPage';
import Issue15AuditPage from './components/Issue15AuditPage';
import MediaKitPage from './components/MediaKitPage';
import NotFoundPage from './components/NotFoundPage';

type Route = 'home' | 'works' | 'issue15Audit' | 'mediaKit' | 'notFound';

const getRoute = (): Route => {
  const hash = window.location.hash;
  if (hash.startsWith('#/media-kit')) return 'mediaKit';
  if (hash.startsWith('#/issue15-audit')) return 'issue15Audit';
  if (hash.startsWith('#/works')) return 'works';
  if (hash.startsWith('#/')) return 'notFound';
  return 'home';
};

const App: React.FC = () => {
  const [route, setRoute] = React.useState<Route>(getRoute);

  React.useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  React.useEffect(() => {
    if (route === 'home') {
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#/')) {
        const id = hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [route]);

  if (route === 'works') {
    return <WorksPage />;
  }

  if (route === 'issue15Audit') {
    return <Issue15AuditPage />;
  }

  if (route === 'mediaKit') {
    return <MediaKitPage />;
  }

  if (route === 'notFound') {
    return <NotFoundPage />;
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
