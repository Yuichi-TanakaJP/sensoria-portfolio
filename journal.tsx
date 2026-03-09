import React from 'react';
import ReactDOM from 'react-dom/client';
import JournalPage from './components/JournalPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <JournalPage />
  </React.StrictMode>
);
