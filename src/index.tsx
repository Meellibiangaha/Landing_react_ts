import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.css';
import './styles/mobile.css';

const MegaWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mega__wrapper'>
      {children}
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <MegaWrapper>
    <App />
  </MegaWrapper>
);
