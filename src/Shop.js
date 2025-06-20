import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './App';
import { Link } from 'react-router-dom';

function Shop() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('products');
    return stored ? JSON.parse(stored) : [
      {
        id: 1,
        name: 'Leather Wallet',
        price: 45,
        image: 'https://w7.pngwing.com/pngs/737/318/png-transparent-wallet-leather-handbag-zipper-men-s-leather-wallet-brown-fashion-men-suit-thumbnail.png',
      },
      {
        id: 2,
        name: 'Casual Sneakers',
        price: 89,
        image: 'https://w7.pngwing.com/pngs/472/461/png-transparent-sneakers-nike-free-skate-shoe-sportswear-everyday-casual-shoes-white-sport-outdoor-shoe-thumbnail.png',
      },
      {
        id: 3,
        name: 'Wrist Watch',
        price: 120,
        image: 'https://www.nicepng.com/png/detail/35/358818_slim-leather-wrist-watch.png',
      },
      {
        id: 4,
        name: 'Backpack',
        price: 60,
        image: 'https://img.freepik.com/free-psd/durable-orange-gray-hiking-backpack-ideal-adventures_191095-90935.jpg?semt=ais_hybrid&w=740',
      },
    ];
  });

  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
  const [popupMessage, setPopupMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert('Please fill out all fields');
      return;
    }

    const productToAdd = {
      id: Date.now(),
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      image: newProduct.image,
    };

    setProducts([...products, productToAdd]);
    setNewProduct({ name: '', price: '', image: '' });
    setPopupMessage('✅ Product added successfully!');
    setShowModal(false);
    setTimeout(() => setPopupMessage(''), 2000);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <section className="shop">
      {popupMessage && <div className="popup-message">{popupMessage}</div>}

      <div className="shop-header">
        <h2>Shop All Products</h2>
        <button onClick={() => setShowModal(true)}>Add Product</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Product</h3>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              placeholder="Product Name"
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              placeholder="Price"
              onChange={handleChange}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div className="modal-buttons">
              <button onClick={handleAddProduct}>Add</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button
              onClick={() => {
                addToCart(item);
                alert('✅ Product added to cart successfully!');
              }}
              style={{ marginRight: '10px', margin: '10px' }}
            >
              Add to Cart
            </button>
            <button onClick={() => handleDeleteProduct(item.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))}
      </div>

      <Link to="/cart" className="cart-link">Go to Cart</Link>
    </section>
  );
}

export default Shop;
