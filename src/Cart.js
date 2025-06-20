// src/pages/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './App';

function Cart() {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Not product in your cart.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={() => alert('Proceeding to checkout...')}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
