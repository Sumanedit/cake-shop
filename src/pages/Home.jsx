import React from "react";
import "./Home.css";
import cakeImg from "../assets/cake-placeholder.jpg";

const Home = () => {
  return (
    <div className="home" id="home">
      <header className="home-header">
        <h1>Welcome to (name)</h1>
        <p>Delicious cakes, pastries, and breads made fresh daily!</p>
      </header>

      <section className="featured-products">
        <h2>Our Favorites</h2>
        <div className="product-list">
          <div data-aos="fade-right">
            <div className="product-item"  >
              <img src={cakeImg} alt="Cake" className="product-img" />
              <h3>Chocolate Dream Cake</h3>
              <p>Rich, moist chocolate cake topped with creamy ganache.</p>
            </div>
          </div>
          <div data-aos="fade-up">
            <div className="product-item" >
              <img src={cakeImg} alt="Cake" className="product-img" />
              <h3>Strawberry Shortcake</h3>
              <p>Light sponge cake layered with fresh strawberries and cream.</p>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="product-item" >
              <img src={cakeImg} alt="Cake" className="product-img" />
              <h3>Classic Croissant</h3>
              <p>Flaky, buttery croissants baked to golden perfection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About Us</h2>
        <p>
          Sweet Treats Bakery is a family-owned bakery passionate about creating delicious, high-quality baked goods. Our recipes have been passed down for generations, and we use only the finest ingredients.
        </p>
      </section>

      <section className="menu-section" id="menu" data-aos="fade-up">
        <h2>Menu</h2>
        <div className="menu-list">
          <div className="menu-item" data-aos="fade-right">
            <h4>Chocolate Cake</h4>
            <p>$20</p>
          </div>
          <div className="menu-item" data-aos="fade-down">
            <h4>Strawberry Shortcake</h4>
            <p>$18</p>
          </div>
          <div className="menu-item" data-aos="fade-left">
            <h4>Croissant</h4>
            <p>$3</p>
          </div>
          <div className="menu-item" data-aos="fade-up" data-aos-offset="120">
            <h4>Baguette</h4>
            <p>$4</p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in 1995, Sweet Treats Bakery started as a small neighborhood shop. Over the years, we've grown thanks to our loyal customers and our commitment to quality and service. We believe every celebration deserves something sweet!
        </p>
      </section>
    </div>
  );
};

export default Home;
