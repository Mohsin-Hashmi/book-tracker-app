import React from "react";
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
  return (
    <>
      <div className=" p-8 w-[550px] m-4 rounded-2xl bg-green-600 text-white text-xl">
        <img className="rounded-xl" src={image} alt="cover " />
        <h1 className="mt-4">Book Name is : {title}</h1>
        <h2>Author Name is : {author}</h2>
        <p className="mb-4">Genre: {genre}</p>
        <Link
          to={`/book-detail/${id}`}
          className="bg-green-300 m-auto p-4 block w-[200px] text-center rounded-full"
        >
          View Details
        </Link>
      </div>
    </>
  );
};

export default BookCard;
