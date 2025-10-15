import React from "react";

// Sample Authors Data
const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKPkoYakvmF-BQD13JL3QhUvUaa0J0WSDUC8S9X1TCRq4Oq76pGq6jxK5DV6Cq9SJCaiidd4IsqjOhhB8H8TYhUwBZzHn78HHk9kqFkkuWrw",
    bio: "Author of the Harry Potter series, inspiring millions with magical storytelling.",
    books: 7,
  },
  {
    id: 2,
    name: "Paulo Coelho",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UqgxkqyeB-qMPjBUCcIV2iWmFemtiXxR51aLamT6uMVS-n0cIbYmorPRVJs0ZvH0B_8xH9UxDSS4SeEKtQbnH1857J_r3fZIHZ2OeKX8",
    bio: "Brazilian author famous for 'The Alchemist' and motivational literature.",
    books: 20,
  },
  {
    id: 3,
    name: "James Clear",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0gqxBGSR2qL_xID5FikjjlTtaKNucwxyWeaG7hX1TldbLWUR2HUeAIvjawQvHAlPNnRJCpyaWEQRvzZIz0mMyDe2iCK52X3YxwK-3IZ5c",
    bio: "Writer and speaker on habits, decision-making, and continuous improvement.",
    books: 1,
  },
  {
    id: 4,
    name: "Robert Kiyosaki",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvv5hjjxQ-npzgubqDvj0K80JqimyfUzTjr4zN--NwNKJ1N9RvZ8AcJpHGwTh6zKLGy7A&usqp=CAU",
    bio: "Financial educator and author of 'Rich Dad Poor Dad', teaching wealth building.",
    books: 10,
  },
];

const AuthorsPage = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-[#009999] mb-2">Our Authors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the brilliant minds behind the books you love.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {authors.map((author) => (
          <div
            key={author.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <div className="w-32 h-32 mb-4">
              <img
                src={author.img}
                alt={author.name}
                className="w-full h-full object-cover rounded-full border-4 border-[#009999]"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{author.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{author.bio}</p>
            <p className="text-[#009999] font-bold">{author.books} Books</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthorsPage;
