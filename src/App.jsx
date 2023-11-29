//import { useState, useEffect } from "react";
// import Form from "./components/Form";
// import BookDisplay from "./components/BookDisplay";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import {Route,Routes} from "react-router-dom"
import BookList from "./pages/BookList";

function App() {
 

  //console.log(book);
  return (
   
    <>
     <Nav/>
     <br></br>
     <br></br>
     <br></br>
     <Routes>
      
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path="/BookList" element={<BookList/>} />
      </Routes>
     
    </>
  );
}

export default App;
