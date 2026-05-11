import React from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="ページ上部へ戻る"
      className="fixed bottom-6 right-6 z-40 inline-flex h-10 w-10 items-center justify-center border border-stone-400 bg-stone-50/90 text-stone-700 backdrop-blur transition-colors hover:border-stone-900 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
