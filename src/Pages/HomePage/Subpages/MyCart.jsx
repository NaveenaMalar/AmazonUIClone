import React,{useState,useContext} from 'react';
import { MyContext } from '../../../App';
import './MyCart.css';
import { Link } from 'react-router-dom';
// import data from '../../../ProductsList.json';


const MyCart = () => {

  const {cart,removeCart,handleorder} = useContext(MyContext);
  const [updatedCart, setUpdatedCart] = useState(cart);

  const increment = (index) => {
    const newCart = [...updatedCart];
    newCart[index].quantity += 1;
    setUpdatedCart(newCart);
  };

  const decrement = (index) => {
    const newCart = [...updatedCart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      alert("Quantity cannot be less than 1, please update the quantity correctly");
    }
    setUpdatedCart(newCart);
  };
 
  return ( 
  <div> 
    <h1>Shopping Cart</h1> 
    {updatedCart.length === 0 ? ( <p className='emptycart'>Your cart is waiting! Add some goodies and make your shopping dreams come true.</p> ) : ( 
    <div >{cart.map((item, index) => {
      return( 
        <div className='Laptop' key={index}>
          <img className="imagestyle" src={item.img} alt={item.name} />
          <div className="details">
            <div style={{fontSize:"large"}}>{item.Desc}</div>
            <div className='price'>
              <div className='offer'>{item.offer} <span className='rate'> {item.offerprice}  </span></div>
              <div className='Originalprice'>{item.originalprice}</div>
              <div>Inclusive of all taxes</div>
              <div className='quantity'> 
                Quantity: 
                <div onClick={()=>increment(index)} > + </div> 
                <span> {item.quantity} </span>
                <div onClick={()=>decrement(index)}> - </div>
              </div>
            </div>
            <div className='purchase'>
              <Link className='buynow'onClick={()=>handleorder(item.name)} to="/" >Buy Now</Link>
              <div className='removecart' onClick={() => removeCart(item.name)}>Remove from cart</div>
            </div>
          </div>
          </div>
        )}
      )}
    </div> )}
  </div>
  )}

export default MyCart