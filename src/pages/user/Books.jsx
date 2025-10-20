import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBookOpen } from "react-icons/fa";
import Nav from "../../Components/user/Nav";

const categories = ["All", "Fiction", "Tech", "History"];

const Books = () => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState([]); // store bookIds in cart
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const [popup, setPopup] = useState(null); // for toast popup

  // Fetch books
  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://backend-project-2-ubew.onrender.com/books/get");
      if (res.data.success) {
        setBooks(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart items
  const fetchCart = async () => {
    try {
      const res = await axios.get("https://backend-project-2-ubew.onrender.com/books/cart");
      if (res.data.success) {
        setCartItems(res.data.data.map((item) => item.bookId._id));
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // Add to Cart
  const addToCart = async (bookId, bookTitle) => {
    if (cartItems.includes(bookId)) return;
    try {
      const res = await axios.post("https://backend-project-2-ubew.onrender.com/books/cart/add", {
        bookId,
        quantity: 1,
      });
      if (res.data.success) {
        setCartItems((prev) => [...prev, bookId]);

        // Show popup
        setPopup(`✅ "${bookTitle}" added to cart!`);
        setTimeout(() => setPopup(null), 3000); // hide after 3s
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      setPopup(`❌ Could not add "${bookTitle}" to cart.`);
      setTimeout(() => setPopup(null), 3000);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchCart();
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const visibleBooks = filteredBooks.slice(0, visibleCount);

  return (
    <>
      <Nav />
      <section className="bg-gray-50 py-16 px-6 min-h-screen relative">
        {/* Popup Toast at top-center */}
        {popup && (
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#161b22] border-l-4 border-[#00bfa5] text-gray-200 px-6 py-4 rounded-lg shadow-xl z-50 flex items-center space-x-3 animate-slide-up">
            {popup}
          </div>
        )}

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#009999] mb-2 flex justify-center items-center gap-3">
            <FaBookOpen className="text-[#009999]" /> Explore Our Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our handpicked selection of books across categories.
          </p>
        </div>

        {/* Search and Category Filter */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="🔍 Search by title or author"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009999] transition"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/4 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#009999] transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Books Grid */}
        {loading ? (
          <p className="text-center text-gray-600">Loading books...</p>
        ) : visibleBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {visibleBooks.map((book) => {
              const isAdded = cartItems.includes(book._id);
              return (
                <div
                  key={book._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-1xl transition transform hover:-translate-y-1 p-4 py-6 text-center flex flex-col"
                >
                  <div className="h-64 w-full flex items-center justify-center mb-4 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={
                        book.image 
                          ? `https://backend-project-2-ubew.onrender.com/uploads/${book.image}`
                          : "https://via.placeholder.com/150"
                      }
                      alt={book.title}
                      className="max-h-full max-w-full object-contain" 
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
                  <p className="text-gray-500 text-sm mb-1">{book.author}</p>
                  <p className="text-gray-600 text-sm mb-1">Category: {book.category}</p>
                  <p className="text-gray-600 text-sm mb-2">Language: {book.language}</p>
                  <p className="text-[#009999] font-bold text-xl mb-4">₹{book.price}</p>

                  <div className="flex justify-center gap-2 mt-auto px-5">
                    <button
                      onClick={() => addToCart(book._id, book.title)}
                      disabled={isAdded}
                      className={`${
                        isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-[#009999] hover:bg-[#007777]"
                      } text-white px-2 py-2 rounded-lg transition flex-1`}
                    >
                      {isAdded ? "Added" : "Add to Cart"}
                    </button>

                    <button className="border-1 border-[#009999] text-[#009999] px-2 py-2 rounded-lg hover:bg-green-700 hover:text-white transition flex-1">
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">No books found.</p>
        )}

        {/* Load More Button */}
        {visibleCount < filteredBooks.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="bg-[#009999] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#007777] transition"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Books;
