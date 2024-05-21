import { useState, useEffect, Fragment, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import './Products.css'
import './Checkbox.css'
import Checkbox from './Checkbox';


function Categories() {
    const [categories, setCategories] = useState([])
    const {data, loading, error} = useFetch("/categories?populate=*") 



useEffect(()=>{
 data && setCategories(data);
 console.log(categories)
},[data])

  return (
    <div className='products'>
    {loading ? "Loading..."
    : categories.map(category =>(  
        <Fragment key={category.id}>
            <Checkbox category={category}/>
        </Fragment>
        
    ))}
    </div>
  )
}

export default Categories
