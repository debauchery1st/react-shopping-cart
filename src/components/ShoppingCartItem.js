import React, { useContext } from "react";
import ItemContext from "../contexts/ItemContext";
import CartContext from "../contexts/CartContext";

const Item = () => {
  const { item } = useContext(ItemContext);
  const { removeItem } = useContext(CartContext);
  return (
    <div key={item.id} className="shopping-cart_item">
      <img src={item.image} alt={`${item.title} book`} />
      <div>
        <h1>{item.title}</h1>
        <p>$ {item.price}</p>
        <button onClick={() => removeItem(item.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
