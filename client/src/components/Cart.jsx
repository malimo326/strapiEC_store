import { useState } from 'react';
import  './Cart.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRedoAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '../redux/cartReducer';

function Cart() {
  const products = useSelector(state=>state.cart.products)
    const[cartList, setCartList]= useState(false);

    const dispatch = useDispatch()

    const showCartList = ()=>{
        cartList ? setCartList(false) : setCartList(true)
    }
    
  return (
    <div className='cart'>

      <div className="cart-icon"
      onClick={products.length >0 && showCartList}>
        <FaShoppingCart />
        </div>

      <div className="cart-badge">{products.length}</div>

      {cartList /*|| products.length >0*/ 
      ?(
        <ul className="cart-list">
          {products.map(product=>(
             <li className="cart-item">
              <img src={import.meta.env.VITE_APP_URL + product.image} alt="" className="cart-item-image" />
              <span className="cart-item-title">{product.title}</span>
              <span className="cart-item-price">{product.price}</span>
              <span className="cart-item-remove"
               onClick={()=>dispatch(removeFromCart({
                id: product.id,
              }))}
              ><FaRegTrashAlt /></span>
              </li>
              
          ))}
               <span className='cart-reset'
           onClick={()=>dispatch(resetCart())}
          ><FaRedoAlt /> Reset</span> 
      </ul>
      
      )
      :("")
      }
    </div>
  )
}

export default Cart
