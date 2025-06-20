// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to NG CREATION.</h1>
          <p>Trendy, timeless, and tailored for you.</p>
          <a href="/shop" className="btn">Shop Now</a>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://png.pngtree.com/png-clipart/20231002/original/pngtree-wristwatch-analog-classic-brown-leather-strap-watch-png-image_13065477.png" alt="Product 1" />
            <h3>Classic Watch</h3>
            <p>$99.00</p>
          </div>
          <div className="product-card">
            <img src="https://png.pngtree.com/png-clipart/20210314/original/pngtree-clothing-casual-comfortable-leather-shoes-shoes-png-image_6105357.jpg" alt="Product 2" />
            <h3>Leather Shoes</h3>
            <p>$120.00</p>
          </div>
          <div className="product-card">
            <img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_eb904d68cc0ec703b378d6bb38ec96c0.webp" alt="Product 3" />
            <h3>Minimalist Bag</h3>
            <p>$85.00</p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <h2>Join our newsletter</h2>
        <p>Be the first to know about new arrivals and exclusive deals.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
    </main>
  );
}

export default Home;
