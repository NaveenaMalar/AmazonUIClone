import './App.css';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer.jsx';
import HomePage from './Pages/HomePage/homepage';
import ElectronicsPage from "./Pages/HomePage/Subpages/Electronics.jsx";
import { Routes,Route } from 'react-router-dom';
import React,{ createContext,useState } from 'react';
import MyCart from './Pages/HomePage/Subpages/MyCart.jsx';
import AllNav from './Components/Navbar/Sidebar/DisplayAll.jsx';
import DealsPage from './Pages/HomePage/Subpages/Todaydeals.jsx';

export const MyContext = createContext();

function App() {

 var [count,setCount] = useState(0);
 const [cart,setCart] = useState([]);
 const [sidebar, setSidebar] = useState(false);

 const showSidebar = () =>{
   setSidebar(!sidebar);
 }
 
 const addCart = (product) =>{
  let updatedCart=[];
  if(cart.includes(product))
    {
      updatedCart = [...cart];
      alert("product already added to cart, you can enter required quantity");
    } 
  else 
  {
    updatedCart = [...cart, product]; 
    count+=1;
    alert("product has successfully added to cart")
  }
  setCart(updatedCart);
  setCount(count);
  }
  
  const removeCart = (productName) =>{
    const updatedCart = cart.filter(product => product.name !== productName);
    setCart(updatedCart);
    setCount(updatedCart.length);
  }

  const handleorder =(productName) => {
    alert("Order Placed Successfully");
    removeCart(productName);
  }

  return (
    <div className='App'>
      <MyContext.Provider value={{cart,setCart,count,setCount,addCart,removeCart,handleorder,sidebar,showSidebar}}>
      {sidebar? <><AllNav /> </>: null}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/Todaydeals" element={<DealsPage />} />
          <Route path="/mycart" element={<MyCart />} />
        </Routes>
      </MyContext.Provider>
      <Footer /> 
    </div>
  );
}

export default App;
