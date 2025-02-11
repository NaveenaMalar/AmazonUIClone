import React,{useEffect,useState,useContext} from 'react';
import './Product.css';
import {MyContext} from '../../../App';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  const {addCart,handleorder} = useContext(MyContext);
  // const [quantity, setQuantity] = useState(product.quantity);

  // useEffect(() => {
  //   setQuantity(product.quantity);
  // }, [product.quantity]);

  // const increment = () => {
  //   setQuantity(prevQuantity => prevQuantity + 1);
  // }

  // const decrement = () => {
  //   setQuantity(prevQuantity => {
  //     if (prevQuantity <= 1) {
  //       alert("Quantity cannot be less than 1, please update the quantity correctly");
  //       return prevQuantity;
  //     }
  //     return prevQuantity - 1;
  //   });
  // };


  return (
    <div className='Laptop'>
        <img className="imagestyle" src={product.img} alt={product.name} />
        <div className="details">
          <div style={{fontSize:"large"}}>{product.Desc}</div>
          <div className='price'>
            <div className='offer'>{product.offer} <span className='rate'> {product.offerprice}  </span></div>
            <div className='Originalprice'>{product.originalprice}</div>
            <div>Inclusive of all taxes</div>
            {/* <div className='quantity'> 
                Quantity: 
                <div onClick={increment}> + </div> 
                <span> {quantity} </span>
                <div onClick={decrement}> - </div>
              </div> */}
          </div>
          <div className='purchase'>
            <Link className='buynow'onClick={()=>handleorder()} to="/" >Buy Now</Link>
            <div className='addcart' onClick={() => addCart(product)}>Add to cart</div>
          </div>
          <div className='productspecifications'>
            <div className='Productdetails'>Product Details</div>
            <table >
              <tbody>
              {product.specifications.map((spec,ind)=>{
                    return(
                        <tr key={ind}> 
                            <td className='itemname'>{spec.name}</td>
                            <td className='itemvalue'>{spec.value}</td>
                        </tr>
                        )
                    })}
              </tbody>
            </table>
          </div>
        </div>
  
    </div>
  )
}

export default Product