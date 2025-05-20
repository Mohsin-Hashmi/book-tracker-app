import React, { useState } from "react";
import { Link } from "react-router-dom";
const BookCard = ({
  id,
  title,
  image,
  author,
  description,
  pageCount,
  isRead,
  genre,
}) => {
  const [readStatus, setReadStatus] = useState(isRead);
  console.log("Read Status is :", readStatus);

  const handleTooggle = () => {
    setReadStatus(!readStatus);
  };
  return (
    <>
      <div className=" p-8 w-[550px] m-4 rounded-2xl bg-green-600 text-white text-xl">
        <img className="rounded-xl" src={image} alt="cover " />
        <h1 className="mt-4">Book Name is : {title}</h1>
        <h2>Author Name is : {author}</h2>
        <p className="mb-4">Genre: {genre}</p>
        <Link
          to={`/book-detail/${id}`}
          className="bg-green-900  m-auto p-4 block w-[200px] text-center rounded-full"
        >
          View Details
        </Link>
        <button
          className="bg-green-900  float-right rounded-full p-4 block text-lg w-[100px]"
          onClick={handleTooggle}
        >
          {readStatus ? "Read" : "UnRead"}
        </button>
      </div>
    </>
  );
};

export default BookCard;
