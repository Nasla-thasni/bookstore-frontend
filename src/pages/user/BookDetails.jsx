import React from "react";
import { useParams, Link } from "react-router-dom";

// Mock book data (you can later fetch this from API or state)
const books = [
  {
    id: 1,
    title: "Harry Potter - Complete Box Set",
    img: "https://bookbins.in/wp-content/uploads/2023/07/harrypotter7set.webp",
    price: "₹1,799",
    author: "J.K. Rowling",
    description:
      "A magical journey through all seven Harry Potter books. Follow Harry, Hermione, and Ron through their adventures at Hogwarts.",
  },
  {
    id: 2,
    title: "The Alchemist",
    img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    price: "₹399",
    author: "Paulo Coelho",
    description:
      "A novel about a shepherd named Santiago who follows his dreams to find treasure and discovers the power of personal legend.",
  },
];

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div className="text-center mt-20 text-xl">Book not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="grid md:grid-cols-2 gap-10 bg-white shadow-md rounded-xl p-6">
        <img src={book.img} alt={book.title} className="w-full h-96 object-cover rounded-lg" />

        <div>
          <h1 className="text-3xl font-bold text-[#009999] mb-3">{book.title}</h1>
          <p className="text-gray-700 text-lg mb-2">by {book.author}</p>
          <p className="text-2xl font-semibold text-[#009999] mb-6">{book.price}</p>
          <p className="text-gray-600 mb-8">{book.description}</p>

          <div className="flex gap-4">
            <button className="bg-[#009999] text-white px-6 py-3 rounded-lg hover:bg-[#007777] transition">
              Add to Cart
            </button>
            <Link
              to="/books"
              className="border border-[#009999] text-[#009999] px-6 py-3 rounded-lg hover:bg-[#009999] hover:text-white transition"
            >
              Back to Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
