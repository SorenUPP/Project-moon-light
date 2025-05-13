function Cart({ cartItems, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (cartItems.length === 0) {
    return <div className="text-center text-gray-600">Your cart is empty.</div>;
  }

  return (
    <div className="w-full max-w-4xl mt-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="flex justify-between items-center bg-gray-100 p-4 rounded"
          >
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button
              onClick={() => onRemove(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right font-bold">Total: ${total}</div>
    </div>
  );
}

export default Cart;
