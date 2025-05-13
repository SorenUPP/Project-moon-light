// ProductCard.jsx

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-md p-4 text-center hover:shadow-xl hover:border-hite transform transition-all duration-300 hover:scale-105 max-w-xs w-full">
      {/* Image container */}
      <div className="h-50 w-full mb-4 overflow-hidden rounded-md">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-500 mb-2">{product.description}</p>
      <p className="text-lg font-bold text-tan">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-3 bg-tan text-white px-4 py-2 rounded hover:brightness-110 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
