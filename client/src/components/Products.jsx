import { useState, useEffect, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import './Products.css'
import StoreContext from '../hooks/storeContext';
import { addToCart } from '../redux/cartReducer';
import { useDispatch } from 'react-redux';


function Products() {
    const [products, setProducts] = useState([])
    const {filter} = useContext(StoreContext)
    const {data, loading, error} = useFetch(filter) 
    
    const dispatch = useDispatch()

useEffect(()=>{
 data && setProducts(data);
},[data])




  return (
    <div className='products'>
    {loading ? "Loading..."
    : products.map(product =>(  
        <div className='product' key={product.id}>
        <h2 className='product-title'>{product.attributes.title}</h2>
        <div className='product-price'>{product.attributes.price} $</div>
        <img className='product-image' src={import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url} alt="" />
        <div className='product-desc'>{product.attributes.Desc}</div>
        <button className='product-btn'
        onClick={()=>dispatch(addToCart({
          id: product.id,
          title: product.attributes.title,
          Desc: product.attributes.Desc,
          price: product.attributes.price,
          image: product.attributes.image.data.attributes.url
        }))}>Add to cart</button>        
        </div>
    ))}
    </div>
  )
}

export default Products
