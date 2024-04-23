import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here!</h2>
        <p>
          "Discover a world of delicious options on our online menu. Place your
          order now for prompt delivery and experience the convenience of having
          your favorite flavors delivered directly to your door hassle-free!"
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
