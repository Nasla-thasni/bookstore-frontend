import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Addbooks = () => {
    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    image:"",
    language: ""
    // published:""
  });
  const [imageFile, setImageFile] = useState(null); // For image file
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]); // Store selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.category || !formData.price || !formData.language ) {
      alert("Please fill in all required fields!");
      return;
    }

    try {
      setLoading(true);

      // Use FormData to send file
      const data = new FormData();
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("category", formData.category);
      data.append("price", formData.price);
      data.append("language", formData.language);
      // data.append("published", formData.publisheds);


      if (imageFile) data.append("image", imageFile); // Append file

      const res = await fetch("https://backend-project-2-ubew.onrender.com/books/add", {
        method: "POST",
        body: data, // Note: no JSON.stringify, must be FormData
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ title: "", author: "", category: "", price: "",language:""});
        setImageFile(null);

        setTimeout(() => setSuccess(false), 2000);
      } else {
        alert("Error adding book: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
        {/* Back arrow */}
                <button
                  onClick={() => navigate("/admin")}
                  className="absolute left-0 top-0 flex items-center gap-2 text-gray-700 hover:text-gray-900 transition mt-5 px-6"
                >
                  <FaArrowLeft /> Back
                </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-[#009999]">
          Add New Book
        </h2>

        {success && <p className="text-green-600 text-center mb-4"> Book added successfully!</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Book Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#009999] focus:outline-none"
              placeholder="Enter book title"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#009999] focus:outline-none"
              placeholder="Enter author name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#009999] focus:outline-none"
            >
              <option value="">Select category</option>
              <option value="Fiction">Fiction</option>
              <option value="Tech">Tech</option>
              <option value="History">History</option>
              <option value="Academic">Academic</option>
              <option value="Novel">Novel</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Price (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#009999] focus:outline-none"
              placeholder="Enter price"
            />
          </div>

          {/* Image Upload */}
          <div>
  <label className="block text-gray-700 font-medium mb-1">
    Upload Image
  </label>
  <input
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#009999] focus:outline-none cursor-pointer"
  />
</div>


          {/* language */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Language</label>
            <input
            type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#009999] focus:outline-none"
              placeholder="language"
            />
          </div>

          {/* <div>
            <label className="block text-gray-700 font-medium mb-1">published date</label>
            <input
            type="text"
              name="published"
              value={formData.published}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-[#009999] focus:outline-none"
              placeholder="Enter book description..."
            />
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#009999] text-white hover:bg-[#007777]"
            }`}
          >
            {loading ? "Adding Book..." : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbooks;
