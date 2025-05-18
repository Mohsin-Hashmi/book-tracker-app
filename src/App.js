
import { useState } from 'react';
import './App.css';
import BooksData from './data/mockData';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookTrackerApp from './bookTeackerContext';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
function App() {
  const [booksData, setBooksData] = useState(BooksData);
  // console.log(booksData);
  return (
    <>
      <BookTrackerApp.Provider value={{ booksData, setBooksData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book-detail/:id' element={<BookDetail/>}/>
          </Routes>
        </BrowserRouter>
      </BookTrackerApp.Provider>

    </>
  );
}

export default App;
