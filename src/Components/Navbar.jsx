import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const item =  useSelector((state) => state.cart);

  return (
    <div className='nav'>
        <div>
        <span>NAvbar</span>
        </div>
       <div className='nav-elm'>
       <Link className='elm' to='/'>
        Home
       </Link>

       <Link className='elm' to='/cart'>
        Cart
       </Link>

       <span>cart Items:{item.length}</span>
       </div>

    </div>
  )
}

export default Navbar