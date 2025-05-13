// Correct CartSidebar.jsx
function CartSidebar({ isOpen, cartItems, onClose, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl">&times;</button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t font-bold">
        Total: ${total}
      </div>
    </div>
  );
}

export default CartSidebar;
