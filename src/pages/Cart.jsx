import React from 'react'
import './CartProducts.css'
import {remove} from '../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {

    const products = useSelector((state) => state.cart);
    const dispatch =  useDispatch((state) =>state.cart)

     const handleRemove = (productid) => {
            dispatch(remove(productid));
     }
  return (
    <div>
        <h2>Cart</h2>
        {
            products.map((product) => (
                <div className='cart-card' key={product.id}>
            <img src={product.image} alt='' />
            <div className='product-content'>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <button className='btn' onClick={() => handleRemove(product.id)}>remove</button>
            </div>
        </div>
            ))
        }
    </div>
  )
}

export default Cart