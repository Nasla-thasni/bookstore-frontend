import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const books = [
  { id: 1, title: "Harry Potter", img: "/assets/image1home.png", price: "₹1,799", author: "J.K. Rowling", language: "English" },
  { id: 2, title: "The Alchemist", img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg", price: "₹399", author: "Paulo Coelho", language: "English" },
  { id: 3, title: "Atomic Habits", img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg", price: "₹499", author: "James Clear", language: "English" },
  { id: 4, title: "Rich Dad Poor Dad", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg", price: "₹449", author: "Robert Kiyosaki", language: "English" },
  { id: 5, title: "The Subtle Art", img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg", price: "₹399", author: "Mark Manson", language: "English" },
];

const FeaturedBooks = () => {
  const [startIndex, setStartIndex] = useState(0);

  const total = books.length;
  const visibleCount = 5;

  const next = () => setStartIndex((prev) => (prev + 1) % total);
  const prev = () => setStartIndex((prev) => (prev - 1 + total) % total);

  const visibleBooks = Array.from({ length: visibleCount }, (_, i) => books[(startIndex + i) % total]);

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-[#009999] mb-2">Latest Collections</h2>
      </div>

      <div className="relative max-w-8xl mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button onClick={prev} className="absolute left-0 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition">
          <FaChevronLeft className="text-xl text-[#009999]" />
        </button>

        {/* Books Carousel */}
        <div className="flex space-x-6 overflow-hidden w-full justify-center">
          {visibleBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg  flex flex-col min-w-[265px]">
              <div className="flex items-center justify-center bg-gray-100 h-64">
                <img src={book.img} alt={book.title} className="max-h-56 object-contain" />
              </div>
              <div className="p-4 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{book.title}</h3>
                <p className="text-gray-500 text-sm mb-1">
                  <span className="font-medium text-gray-700">Author:</span> {book.author}
                </p>
                <p className="text-gray-500 text-sm mb-1">
                  <span className="font-medium text-gray-700">Language:</span> {book.language}
                </p>
                <p className="text-[#009999] text-2xl font-bold mb-4 mt-auto">{book.price}</p>
                <Link to={`/books/${book.id}`} className="bg-[#009999] text-white px-4 py-2 rounded-lg hover:bg-[#007777] transition w-40 ml-9">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={next} className="absolute right-0 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition">
          <FaChevronRight className="text-xl text-[#009999]" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedBooks;
