import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import WishlistProvider from './Context/wishlistContext';
import BasketProvider from './Context/basketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>
);

