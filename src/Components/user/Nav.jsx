import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-[#009999] text-white shadow-md">
      <div className="max-w-8xl mx-auto flex flex-wrap items-center px-2 py-4 ">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-2  pr-240">
          📚 BookBloom
        </Link>

        

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-sm">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/books" className="hover:text-gray-200">Books</Link></li>
          {/* <li><Link to="/cart" className="hover:text-gray-200">Cart</Link></li> */}
          <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-5 ml-5">
          <Link to={'/cart'}>
          <FaShoppingCart className="text-xl cursor-pointer" />
          </Link>
          <FaUser className="text-xl cursor-pointer" />
        </div>

      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-6 pb-4">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full px-4 py-2 rounded-lg text-gray-800"
        />
      </div>
    </nav>
  );
};

export default Nav;
// import React from "react";
// import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   return (
//     <nav className="bg-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           {/* <img
//             src="/logo.png"
//             alt="Bookbins"
//             className="w-32 object-contain"
//           /> */}
//              📚 MyBookStore
//         </Link>

//         {/* Search bar */}
//         <div className="flex items-center border rounded-lg overflow-hidden w-1/2">
//           <input
//             type="text"
//             placeholder="Search Product..."
//             className="flex-grow px-4 py-2 focus:outline-none"
//           />
//           <button className="bg-[#009999] text-white px-4 py-2">🔍</button>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-6 text-gray-600">
//             <Link to="/login" className="hover:text-gray-200">Login</Link>
//           <FaUser className="cursor-pointer hover:text-[#009999]" />
//           <FaHeart className="cursor-pointer hover:text-[#009999]" />
//           <FaShoppingCart className="cursor-pointer hover:text-[#009999]" />
//         </div>
//       </div>

//       {/* Category bar */}
//       <div className="bg-[#009999] text-white text-sm font-medium py-3">
//         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
//           <Link to="/" className="hover:text-gray-200">ALL CATEGORIES</Link>
//           <Link to="/" className="hover:text-gray-200">ALL BOOKS</Link>
//           <Link to="/" className="hover:text-gray-200">FICTION</Link>
//           <Link to="/" className="hover:text-gray-200">NON-FICTION</Link>
//           <Link to="/" className="hover:text-gray-200">COMBOS & BOX SETS</Link>
//           <Link to="/" className="hover:text-gray-200">CHILDREN’S BOOKS</Link>
//           <Link to="/" className="hover:text-gray-200">BOOKMARKS</Link>
//           <Link to="/" className="hover:text-gray-200">BLOG</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;