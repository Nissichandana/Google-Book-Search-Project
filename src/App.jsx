import { useState, useEffect } from "react";
import Form from "./components/Form";
import BookDisplay from "./components/BookDisplay";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // create state to hold the book data
  const [book, setBook] = useState(null);

  // Function getBook
  const getBook = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    const url = baseUrl + "?" + "q=" + searchTerm;
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setBook(data);
    } catch (e) {
      console.error(e);
    }
  };
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getBook();
  }, []);

  console.log(book);
  return (
    <>
      {/* <Form booksearch={getBook} />
      <BookDisplay book={book} /> */}
    </>
  );
}

export default App;
