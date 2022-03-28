import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterProvider } from './Contexts/FilterProvider'
import { CartProvider } from './Contexts/CartProvider'
import { UserProvider } from './Contexts/UserProvider'
import { WishlistProvider } from './Contexts/WishlistProvider'
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FilterProvider>
          <WishlistProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishlistProvider>
        </FilterProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById("root")
);
