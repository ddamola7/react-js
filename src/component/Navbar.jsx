import React from 'react'
import { FaSearch } from "react-icons/fa";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
           <h2>ADEDIRAN</h2>
        </div>

        <div>
            <div className='search-container'>
                <input type="search" placeholder='search products' />
                <FaSearch />
            </div>
        </div>

        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Product</a>
            <a href="">Contact</a>
        </div>

        <div>
            <button>Register</button>
            <button>Login</button>
        </div>
    </nav>

  )
}

export default Navbar
