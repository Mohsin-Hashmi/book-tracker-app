import React, { useContext } from "react";
import BookTrackerApp from "../bookTeackerContext";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";
const Home = () => {
  const { booksData } = useContext(BookTrackerApp);
  console.log(booksData);
  return (
    <div className="">
      <h1 className="text-center text-6xl pt-5 pb-5 text-white ">
        Books Cards
      </h1>
      <Link to='/add-new-book' className="bg-green-900 m-auto p-4 block w-[200px] text-center rounded-full text-white text-xl">Add New Book</Link>

      <div className="flex flex-wrap justify-center">
        {booksData.map((book) => {
          return (
            <BookCard
              key={book.id}
              id={book.id}
              image={book.coverImage}
              title={book.title}
              author={book.author}
              description={book.description}
              pageCount={book.pageCount}
              isRead={book.isRead}
              genre={book.genre}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
