import React, { useContext } from "react";
import BookTrackerApp from "../bookTeackerContext";
import BookCard from "../components/BookCard";
const Home = () => {
  const { booksData } = useContext(BookTrackerApp);
  console.log(booksData);
  return (
    <div>
      <h1 className="text-center text-6xl pt-5 pb-5 text-white ">Books Cards</h1>
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
