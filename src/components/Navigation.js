import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{(cart && cart.length) || 0}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
