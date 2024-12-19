import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import '../styles/Card.css'

const Card = () => {
  return (
    <div>
      <div className='card'>
        <img src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/7461863/1.jpg?8642" alt="" />
        <p className='first'>Product Name</p>
        <p className='second'>$10000</p>
        <p className='third'>Lorem ipsum dolor sit amet consectetur adipisicin
            g elit. Debitis, repudiandae.</p>

            <div className='icon-container'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>

            <button>Add to cart <CiShoppingCart /></button>
      </div>
    </div>
  )
}

export default Card
