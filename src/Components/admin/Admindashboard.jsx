import React, { useState } from "react";
import {
  FaBook,
  FaUsers,
  FaShoppingCart,
  FaMoneyBillWave,
  FaBars,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";

const Admindashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-[#009999] text-white transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#007777]">
          <h1
            className={`font-bold text-lg tracking-wide transition-all duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white text-xl"
          >
            <FaBars />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 mt-4 space-y-2">
          <a
            href="/viewbook"
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#007777] transition"
          >
            <FaBook className="text-lg" />
            {sidebarOpen && <span>View Books</span>}
          </a>
          <a
            href="/addbook"
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#007777] transition"
          >
            <FaPlus className="text-lg" />
            {sidebarOpen && <span>Add Books</span>}
          </a>
        </nav>

        <div className="border-t border-[#007777] p-4">
          <button className="flex items-center gap-3 text-white hover:text-gray-200">
            <FaSignOutAlt />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Dashboard Overview
          </h2>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-gray-700">Welcome, Admin</p>
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=009999&color=fff"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Placeholder Section */}
       <div
  style={{
// backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",

  }}
  className="rounded-xl shadow p-10 text-center text-white h-143"
>
  <div className="bg-white/95 rounded-xl p-10">
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
      Welcome to Your Dashboard
    </h3>
    <p className="text-gray-900 mb-6">
      Here you can manage books, users, and more.  
      Use the sidebar to navigate between sections.
    </p>
  </div>
</div>

      </main>
    </div>
  );
};

export default Admindashboard;








// import React, { useState } from "react";
// import {
//   FaBook,
//   FaUsers,
//   FaShoppingCart,
//   FaMoneyBillWave,
//   FaBars,
//   FaSignOutAlt,
//   FaPlus,
// } from "react-icons/fa";

// const Admindashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "w-64" : "w-20"
//         } bg-white text-gray-800 shadow-lg transition-all duration-300 flex flex-col`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-gray-200">
//           <h1
//             className={`font-bold text-lg tracking-wide transition-all duration-300 ${
//               sidebarOpen ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             Admin Panel
//           </h1>
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="text-gray-600 text-xl hover:text-gray-900 transition"
//           >
//             <FaBars />
//           </button>
//         </div>

//         {/* Sidebar Links */}
//         <nav className="flex-1 mt-4 space-y-2">
//           <a
//             href="/viewbook"
//             className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-100 transition"
//           >
//             <FaBook className="text-lg" />
//             {sidebarOpen && <span>View Books</span>}
//           </a>
//           <a
//             href="/addbook"
//             className="flex items-center gap-3 px-4 py-3 rounded hover:bg-gray-100 transition"
//           >
//             <FaPlus className="text-lg" />
//             {sidebarOpen && <span>Add Books</span>}
//           </a>
//         </nav>

//         <div className="border-t border-gray-200 p-4">
//           <button className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition">
//             <FaSignOutAlt />
//             {sidebarOpen && <span>Logout</span>}
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Top Bar */}
//         <header className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl font-bold text-gray-800">
//             Dashboard Overview
//           </h2>
//           <div className="flex items-center gap-4">
//             <p className="font-semibold text-gray-700">Welcome, Admin</p>
//             <img
//               src="https://ui-avatars.com/api/?name=Admin&background=ffffff&color=4B5563"
//               alt="Admin Avatar"
//               className="w-10 h-10 rounded-full border border-gray-300"
//             />
//           </div>
//         </header>

//         {/* Placeholder Section */}
//         <div
//           style={{
           
// // backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80')",

//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//           className="rounded-xl shadow p-10 text-center h-140"
//         >
//           <div className="bg-white-300 rounded-xl p-10 shadow-md">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-2">
//               Welcome to Your Dashboard
//             </h3>
//             <p className="text-gray-900 mb-6">
//               Here you can manage books, users, and more. Use the sidebar to
//               navigate between sections.
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Admindashboard;
