// src/pages/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

const productData = {
  1: {
    name: 'Leather Wallet',
    price: '$45.00',
    description: 'High-quality leather wallet with multiple compartments.',
    image: 'https://w7.pngwing.com/pngs/737/318/png-transparent-wallet-leather-handbag-zipper-men-s-leather-wallet-brown-fashion-men-suit-thumbnail.png',
  },
  2: {
    name: 'Casual Sneakers',
    price: '$89.00',
    description: 'Comfortable sneakers for everyday wear.',
    image: 'https://w7.pngwing.com/pngs/472/461/png-transparent-sneakers-nike-free-skate-shoe-sportswear-everyday-casual-shoes-white-sport-outdoor-shoe-thumbnail.png',
  },
};

function Product() {
  const { id } = useParams();
  const product = productData[id] || {
    name: 'Product Not Found',
    price: '',
    description: '',
    image: 'https://via.placeholder.com/400?text=No+Image',
  };

  return (
    <section className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </section>
  );
}

export default Product;
