import {useState, useEffect} from 'react'
import Form from '../components/Form';
import BookDisplay from '../components/BookDisplay';

function BookList(){

    // create state to hold the book data
  const [book, setBook] = useState(null);

  // Function getBook
  const getBook = async (searchTitle) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = "https://www.googleapis.com/books/v1/volumes?maxResults=25&filter=free-ebooks";
    const url = baseUrl + "&" + "q=+intitle:" + searchTitle;
    //console.log(url);
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
     // console.log("1...");
      //console.log(data.items);
      // console.log("About to call book display from APP...");
      setBook(data.items);
    } catch (e) {
      console.error("1111   "+e);
    }
  };
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    const bookArray = ["MongoDB", "JavaScript", "CSS", "HTML", "React"];
      const firstBook = bookArray[Math.floor(Math.random() * bookArray.length)];
    getBook(firstBook);
  }, []);
  return(
    <div className='bList'>
        <br></br>
        <br></br>
    <Form booksearch={getBook} />
    <li>
    {book ?  <BookDisplay book={book} /> : 'NO DATA'} 
    </li>
    </div>

  )

}
export default BookList