
import { useEffect, useState } from 'react';
import './App.css';
import BooksData from './data/mockData';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookTrackerApp from './bookTeackerContext';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import AddNewBook from './pages/AddNewBook';
function App() {
  const [booksData, setBooksData] = useState(BooksData);
  // console.log(booksData);

  useEffect(()=>{
    setBooksData(booksData);
  },[])
  return (
    <div className="bg-green-300 min-h-screen">
      <BookTrackerApp.Provider value={{ booksData, setBooksData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book-detail/:id' element={<BookDetail/>}/>
            <Route path='/add-new-book' element={<AddNewBook/>}/>
          </Routes>
        </BrowserRouter>
      </BookTrackerApp.Provider>

    </div>
  );
}

export default App;
