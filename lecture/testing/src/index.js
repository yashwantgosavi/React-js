import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import MovieCard from './MovieCard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Nav /> */}
    <App />
    <MovieCard />

  </React.StrictMode>
);