import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart, Search } from "lucide-react";

const Navbar = ({ cartCount, onCartClick, searchQuery, onSearchChange, onProductsClick }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef(null);
  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

    
      if (currentScrollY > prevScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    
    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const handleScrollToReviews = () => {
    const reviewsSection = document.getElementById("reviews");
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-20 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-full mx-auto px-6">
        <div className="flex justify-between items-center h-full">
          {/* Navigation Links */}
          <ul className="flex space-x-8 items-center">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-lg font-medium text-gray-800 transition duration-300 ease-in-out transform hover:text-[#D2B48C] hover:scale-105"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={onProductsClick}
                className="text-lg font-medium text-gray-800 transition duration-300 ease-in-out transform hover:text-[#D2B48C] hover:scale-105"
              >
                Products
              </button>
            </li>
            <li>
              <button
                onClick={handleScrollToReviews}  
                className="text-lg font-medium text-gray-800 transition duration-300 ease-in-out transform hover:text-[#D2B48C] hover:scale-105"
              >
                Reviews
              </button>
            </li>
          </ul>

          {/* Logo */}
          <img
            src="https://static.vecteezy.com/ti/gratis-vektor/p1/16664873-parfym-logo-illustration-symbol-design-vector.jpg"
            alt="logo"
            className="w-20 object-contain items-center mr-32"
          />

          {/* Right side - Search and Cart Icons */}
          <ul className="flex space-x-8 items-center">
            
            <li className="relative">
              <button
                onClick={handleSearchClick}
                className="text-gray-500 hover:text-tan transition-all duration-300"
              >
                <Search size={24} />
              </button>

              {/* Search Input (shows when isSearchActive is true) */}
              {isSearchActive && (
                <div
                  ref={inputRef}
                  className="absolute right-0 top-10 transform transition-all duration-300"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={onSearchChange}
                    className="w-64 h-10 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tan transition-all duration-300"
                    placeholder="Search products..."
                  />
                </div>
              )}
            </li>

            {/* Cart Icon */}
            <li>
              <button onClick={onCartClick} className="relative hover:text-tan transition">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute top-[-5px] right-[-5px] inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
