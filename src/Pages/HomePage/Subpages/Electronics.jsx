import React, {useState, useContext} from 'react'
import Product from './Product';
import data from './../../../ProductsList.json';
import { MyContext } from '../../../App';

const Electronics = () => {

   const {addCart} = useContext(MyContext);

  const [products] =useState(data.Electronics);

  return (
    <>
      <div>
        {products.map((product,ind)=>{
          return(
            <Product key={ind} product={product} addcart={() => addCart(product)} />
          )
        })}

      </div>
    </>
    
  )
}

export default Electronics