import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import ItemContext from "../contexts/ItemContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };
  console.log("Cart", cart);

  return (
    <div className="shopping-cart">
      {cart &&
        cart.map(item => (
          <ItemContext.Provider key={item.id} value={{ item, removeItem }}>
            <Item />
          </ItemContext.Provider>
        ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
