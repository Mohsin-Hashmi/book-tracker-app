import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BookTrackerApp from "../bookTeackerContext";
import { Link } from "react-router-dom";
const BookDetail = () => {
  const { id } = useParams();
  const { booksData } = useContext(BookTrackerApp);
  const book = booksData.find((book) => book.id === parseInt(id));
  if (!book) {
    return <h1>No Book Found</h1>;
  }
  return (
    <div className=" p-8 w-[550px] rounded-2xl bg-green-600 text-white text-xl m-auto ">
      <img className="rounded-xl" src={book.coverImage} alt="cover " />
      <h1 className="mt-4">Book Name is : {book.title}</h1>
      <h2>Author Name is : {book.author}</h2>
      <p>Description: {book.description}</p>
      <p>Total Pages: {book.pageCount}</p>
      <p className="mb-4">Genre: {book.genre}</p>
      <Link
        to={"/"}
        className="bg-green-900 m-auto p-4 block w-[200px] text-center rounded-full "
      >
        Back to Home
      </Link>
    </div>
  );
};

export default BookDetail;
