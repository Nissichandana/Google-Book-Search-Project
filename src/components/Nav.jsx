//import React from 'react'
import { Link } from 'react-router-dom';


function Nav() {
  return (
      <div className="nav">
          <Link to="/home">
              <h1>Home</h1>
          </Link>

          <Link to="/about">
              <h1>About</h1>
          </Link>

         

           <Link to="/BookDisplay"> 
              <h1>BookSearch</h1>
          </Link>
      </div>
      
  )
}

export default Nav