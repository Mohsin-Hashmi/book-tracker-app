import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookTrackerApp from "../bookTeackerContext";

const AddNewBook = () => {
  const { booksData, setBooksData } = useContext(BookTrackerApp);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    pageCount: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: booksData.length + 1,
      title: formData.title,
      author: formData.author,
      coverImage: "https://lumin8media.com/open-graph/react-ready-og-image.jpg", // placeholder
      description: formData.description,
      pageCount: Number(formData.pageCount),
      isRead: false,
      genre: formData.genre,
    };

    setBooksData([...booksData, newBook]);
    navigate("/"); // Redirect to home
  };

  return (
    <>
      <h1 className="text-center text-6xl pt-5 pb-5 text-white">
        Enter New Car
      </h1>
      <div className="min-h-screen flex items-center justify-center py-5">
        <form
          onSubmit={handleSubmit}
          className="w-[600px] p-6 bg-green-900 rounded-lg shadow-lg"
        >
          <label htmlFor="title" className="mb-4 block text-white text-lg">
            Enter Book Name
          </label>
          <input
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-lg outline-none"
            type="text"
            placeholder="Enter Book Name"
            required
          />

          <label htmlFor="author" className="mb-4 mt-4 block text-white text-lg">
            Enter Author Name
          </label>
          <input
            id="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 rounded-lg outline-none"
            type="text"
            placeholder="Enter Author Name"
            required
          />

          <label htmlFor="description" className="mb-4 mt-4 block text-white text-lg">
            Enter Description
          </label>
          <input
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 rounded-lg outline-none"
            type="text"
            placeholder="Enter Book Description"
            required
          />

          <label htmlFor="pageCount" className="mb-4 mt-4 block text-white text-lg">
            Enter Total Pages
          </label>
          <input
            id="pageCount"
            value={formData.pageCount}
            onChange={handleChange}
            className="w-full p-3 rounded-lg outline-none"
            type="number"
            placeholder="Enter Total Pages"
            required
          />

          <label htmlFor="genre" className="mb-4 mt-4 block text-white text-lg">
            Enter Genre
          </label>
          <input
            id="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full p-3 rounded-lg outline-none mb-4"
            type="text"
            placeholder="Enter Genre"
            required
          />

          <button type="submit" className="m-auto block bg-green-600 p-3 text-white text-lg w-[200px] rounded-2xl">
            Submit
          </button>
          <Link to="/" className="float-right text-white text-xl">
            Back
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddNewBook;
