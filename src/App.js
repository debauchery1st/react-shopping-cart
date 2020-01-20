import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "./data";

// Context
import ProductContext from "./contexts/ProductContext";

// Components
import Products from "./components/Products";
import Navigation from "./components/Navigation";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]); // clone the cart
  };

  return (
    <div className="App">
      <Navigation cart={cart} />
      <ProductContext.Provider value={[products, addItem]}>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
        </Switch>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
