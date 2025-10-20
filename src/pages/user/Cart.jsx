import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [popup, setPopup] = useState(null);

  const fetchCart = async () => {
    try {
      const res = await axios.get("https://backend-project-2-ubew.onrender.com/books/cart");
      if (res.data.success) setCart(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(null), 3000);
  };

  const removeItem = async (id, title) => {
    try {
      await axios.delete(`https://backend-project-2-ubew.onrender.com/books/cart/remove/${id}`);
      fetchCart();
      showPopup(`❌ "${title}" removed from cart`);
    } catch {
      showPopup("❌ Could not remove item");
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete(`https://backend-project-2-ubew.onrender.com/books/cart/clear`);
      fetchCart();
      showPopup("❌ Cart cleared");
    } catch {
      showPopup("❌ Could not clear cart");
    }
  };

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;
    try {
      await axios.put(`https://backend-project-2-ubew.onrender.com/books/cart/update/${id}`, { quantity });
      fetchCart();
    } catch {
      showPopup("❌ Could not update quantity");
    }
  };

  const handleBuy = (title) => {
    showPopup(`✅ "${title}" purchased successfully!`);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.bookId.price * item.quantity,
    0
  );

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Popup */}
      {popup && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#009999] text-white px-6 py-3 rounded-md shadow z-50">
          {popup}
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate("/books")}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-6"
      >
        <FaArrowLeft /> Back 
      </button>

      <h1 className="text-4xl font-bold text-[#009999] mb-10 text-center">
        🛒 My Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-7xl mx-auto">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 bg-gray-100 py-3 px-4 font-semibold text-gray-700 rounded-t-md">
            <div className="col-span-5">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Subtotal</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-1 md:grid-cols-12 items-center py-4 px-4 border-b border-gray-200"
            >
              {/* Product */}
              <div className="col-span-5 flex items-center gap-4">
                <div className="w-24 h-28 bg-gray-100 flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden">
                  <img
                    src={
                      item.bookId.image
                        ? `http://localhost:5003/uploads/${item.bookId.image}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={item.bookId.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-gray-800">{item.bookId.title}</h2>
                  <p className="text-gray-500 text-sm">{item.bookId.author}</p>
                  <p className="text-gray-400 text-xs">{item.bookId.category}</p>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 mt-2 md:mt-0 text-gray-700 font-medium">
                ₹{item.bookId.price}
              </div>

              {/* Quantity */}
              <div className="col-span-2 flex items-center gap-2 mt-2 md:mt-0">
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <div className="col-span-2 mt-2 md:mt-0 text-gray-800 font-medium">
                ₹{item.bookId.price * item.quantity}
              </div>

              {/* Actions */}
              <div className="col-span-1 mt-2 md:mt-0 flex flex-col md:flex-row gap-2 justify-end">
                <button
                  onClick={() => removeItem(item._id, item.bookId.title)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleBuy(item.bookId.title)}
                  className="bg-[#009999] text-white px-3 py-1 rounded hover:bg-[#007777] transition text-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 bg-white p-6 rounded-md shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Total: ₹{totalPrice}</h2>
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition mt-4 md:mt-0"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
