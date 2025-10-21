import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Viewbooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // For back navigation

  // Fetch books from backend
  const fetchBooks = async () => {
    try {
      const res = await axios.get("https://backend-project-2-ubew.onrender.com/books/get");
      if (res.data.success) {
        setBooks(res.data.data);
      } else {
        console.error("Error fetching books:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Delete book
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await axios.delete(`https://backend-project-2-ubew.onrender.com/books/delete/${id}`);
        setBooks(books.filter((book) => book._id !== id));
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  return (
    <div className="px-20 py-8 bg-gray-100 min-h-screen">
      {/* Header */}
       {/* Back arrow */}
        <button
          onClick={() => navigate("/admin")}
          className="absolute left-0 top-0 flex items-center gap-2 text-gray-700 hover:text-gray-900 transition mt-5 px-6"
        >
          <FaArrowLeft /> Back
        </button>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 relative mt-7">
       

        <h1 className="text-3xl font-bold text-gray-800">View Books</h1>
        <Link
          to="/addbook"
          className="flex items-center gap-2 bg-[#009999] text-white px-4 py-2 rounded-lg hover:bg-[#007777] transition"
        >
          <FaPlus />
          <span>Add New Book</span>
        </Link>
      </div>

      {/* Books Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col py-5"
            >
              {/* Book Image */}
              <div className="h-60 w-full overflow-hidden rounded-lg bg-white flex items-center justify-center py-2">
                <img
                  src={
                    book.image
                      ? `https://backend-project-2-ubew.onrender.com/uploads/${book.image}`
                      : "https://via.placeholder.com/150"
                  }
                  alt={book.title}
                  className="max-h-full max-w-full object-contain rounded-lg "
                />
              </div>

              {/* Centered content */}
              <div className="p-3 flex flex-col flex-1 items-center text-center">
                <h2 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                  {book.title}
                </h2>
                <p className="text-gray-800 text-sm mb-1 truncate">
                  by {book.author}
                </p>
                <p className="text-gray-800 text-xs mb-2 truncate">
                  Category: {book.category}
                </p>
                <p className="text-gray-800 text-sm mb-3 line-clamp-3">
                  Language: {book.language}
                </p>
                <p className="text-[#009999] font-semibold mb-4">
                  ${book.price}
                </p>

                {/* Action Buttons */}
                <div className="mt-auto flex justify-center items-center gap-8">
                  <Link
                    to={`/editbook/${book._id}`}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition"
                  >
                    <FaEdit /> Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-20">
          <p>No books found. Try adding some!</p>
        </div>
      )}
    </div>
  );
};

export default Viewbooks;
