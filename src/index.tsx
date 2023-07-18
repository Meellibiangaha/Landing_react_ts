import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

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
