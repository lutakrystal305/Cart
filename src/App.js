import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { CartProvider } from "./context/Cart";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
    
  );
}
function Home() {
  return <h2>Home</h2>;
}
function Cart() {
  return <h2>Cart</h2>
}
