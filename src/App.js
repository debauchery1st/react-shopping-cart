import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// hooks
// import useLocalStorage from "./hooks/useLocalStorage";

// Context
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Products from "./components/Products";
import Navigation from "./components/Navigation";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };
  const removeItem = id => {
    console.log("remove item");
    const filtered = cart.filter(item => item.id !== id);
    setCart(filtered);
  };
  return (
    <div className="App">
      <CartContext.Provider value={{ cart }}>
        <Navigation cart={cart} />
      </CartContext.Provider>
      <CartContext.Provider value={{ cart, removeItem }}>
        <Route path="/cart" component={ShoppingCart} />
      </CartContext.Provider>
      <ProductContext.Provider value={{ products, addItem }}>
        <Route exact path="/" component={Products} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
