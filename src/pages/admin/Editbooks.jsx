import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus, FaArrowLeft } from "react-icons/fa";

const Editbooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    language: ""
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Fetch existing book data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://backend-project-2-ubew.onrender.com/books/get/${id}`);
        if (res.data.success) {
          setFormData(res.data.data);
          if (res.data.data.image) {
            setPreview(`https://backend-project-2-ubew.onrender.com/uploads/${res.data.data.image}`);
          }
        }
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  // Handle text input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // temporary preview
    }
  };

  // Handle form submit (update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      if (image) data.append("image", image);

      const res = await axios.put(
        `https://backend-project-2-ubew.onrender.com/books/update/${id}`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        alert("Book updated successfully!");
        navigate("/viewbook");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      {/* Back arrow */}
              <button
                onClick={() => navigate("/viewbook")}
                className="absolute left-0 top-0 flex items-center gap-2 text-gray-700 hover:text-gray-900 transition mt-5 px-6"
              >
                <FaArrowLeft /> Back
              </button>
      <h2 className="text-2xl font-bold mb-6 text-center text-[#009999]">
        Edit Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Text Inputs */}
        {["title", "author", "category", "price","language"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-medium mb-1 capitalize">
              {field}
            </label>
            <input
              type={field === "price" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#009999]"
              required
            />
          </div>
        ))}

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded-lg p-2"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg mt-3"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#009999] text-white py-2 rounded-lg hover:bg-[#007777] transition"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default Editbooks;
