import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";
import ImageCarousel from "./components/ImageCarousel";
import ImageGallery from "./components/ImageGallery";
import VideoSection from "./components/VideoSection";
import Review from "./components/Review";

const initialProducts = [
  {
    id: 1,
    name: "Rose Bloom",
    price: 49.99,
    image: "https://img.freepik.com/free-psd/black-glass-perfume-bottle-pink-ribbon-isolated-transparent-background_191095-22468.jpg",
    description: "Elegant floral scent for everyday charm.",
  },
  {
    id: 2,
    name: "Mystic Oud",
    price: 69.99,
    image: "https://img.freepik.com/free-psd/flask-bottle-isolated-transparent-background_191095-25702.jpg?semt=ais_hybrid&w=740",
    description: "Deep woody notes for a bold statement.",
  },
  {
    id: 3,
    name: "Vanilla Sky",
    price: 39.99,
    image: "https://img.freepik.com/free-psd/luxury-perfume-bottle-png-isolated-transparent-background_191095-9831.jpg",
    description: "A sweet, calming fragrance with notes of vanilla and cream.",
  },
  {
    id: 4,
    name: "Golden Spice",
    price: 59.99,
    image: "https://img.freepik.com/free-psd/amber-perfume-bottle-elegant-fragrance-luxurious-glass-container_191095-85650.jpg?semt=ais_hybrid&w=740",
    description: "Warm, spicy scent with a hint of cinnamon and nutmeg.",
  },
  {
    id: 5,
    name: "Citrus Breeze",
    price: 29.99,
    image: "https://png.pngtree.com/png-vector/20241228/ourlarge/pngtree-modern-luxury-perfume-bottle-with-sleek-design-png-image_14929688.png",
    description: "A refreshing blend of citrus fruits, perfect for hot days.",
  },
  {
    id: 6,
    name: "Midnight Jasmine",
    price: 54.99,
    image: "https://png.pngtree.com/png-vector/20250423/ourlarge/pngtree-elegant-glass-perfume-bottle-with-golden-cap-and-minimalist-design-containing-png-image_16059698.png",
    description: "Floral, romantic, and mysterious fragrance with jasmine notes.",
  },
  {
    id: 7,
    name: "Ocean Mist",
    price: 44.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNc9SClZG1Un_OU180zZWGb-h7_khjI5pg5R32M75jGWauct0JwzfFOIENh2mFMMFcvY&usqp=CAU",
    description: "A fresh aquatic scent, evoking the feeling of the sea breeze.",
  },
  {
    id: 8,
    name: "Amber Essence",
    price: 74.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuePKxK-jddWNds15ijUvznlRwgmvjFYAyc2rqm6nBs3A9zGX6d3mqX6s76WsNynlKoJI&usqp=CAU",
    description: "Rich, warm amber fragrance for a sophisticated aura.",
  },
  {
    id: 9,
    name: "Atlantic spirit",
    price: 34.99,
    image: "https://png.pngtree.com/png-clipart/20240527/original/pngtree-blue-perfume-bottle-transparent-background-png-image_15189178.png",
    description: "Magical touch of atlantic ocean.",
  },
];

function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredProducts, setFilteredProducts] = useState(products);
   const productsRef = useRef(null);
   const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle adding products to the cart
  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Handle removing products from the cart
  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to handle changes to the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query as the user types
  };

  useEffect(() => {
    // Debounce logic to filter products based on the search query
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredProducts(products); // Show all products if search query is empty
      } else {
        setFilteredProducts(
          products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter products based on query
          )
        );
      }
    }, 300); // 300ms debounce time

    return () => clearTimeout(timeoutId); // Clear the timeout on cleanup
  }, [searchQuery, products]);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Navbar
        onProductsClick={scrollToProducts}
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)}
        searchQuery={searchQuery} // Pass searchQuery as a prop
        onSearchChange={handleSearchChange} // Pass handleSearchChange as a prop
        filteredProducts={filteredProducts} // Pass filteredProducts to Navbar
      />
      <main className="flex flex-col items-center p-6 mt-20">
      <ImageCarousel />
      <ImageGallery />
      <div ref={productsRef}>
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <VideoSection />
      <Review />
      </div>
      </main>
      <CartSidebar
        isOpen={showCart}
        cartItems={cart}
        onClose={() => setShowCart(false)}
        onRemove={handleRemoveFromCart}
      />
      <Footer />
    </div>
  );
}

export default App;