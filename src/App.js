import  { useState } from 'react';
import Header from "./components/Header";
import Swal from 'sweetalert2'
import { Routes,Route } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home'
import { ShoppingContext } from './components/context/ShoppingContext'


function App() {
  const [products,setProducts]= useState([
    {
      id:1,
      name:'Kettle',
      price:699,
      image:'https://cdn.pixabay.com/photo/2016/03/24/11/28/copper-kettle-1276542__340.jpg',
    },
    {
      id:2,
      name:'Pot',
      price:599,
      image:'https://cdn.pixabay.com/photo/2020/02/21/12/50/kitchen-4867419__340.jpg',
    },,
    {
      id:3,
      name:'Frying pan',
      price:499,
      image:'https://cdn.pixabay.com/photo/2013/07/13/11/43/frying-158521__340.png',
    },
    {
      id:4,
      name:' Jug',
      price:399,
      image:'https://cdn.pixabay.com/photo/2020/03/07/19/28/pitchers-4910682__340.jpg',
    },
    {
      id:5,
      name:'Plates ',
      price:299,
      image:'https://cdn.pixabay.com/photo/2017/08/06/13/39/plates-2592592__340.jpg',
    },
    {
      id:6,
      name:'Cup',
      price:199,
      image:'https://cdn.pixabay.com/photo/2019/09/22/19/40/cup-4496839_960_720.jpg',
    }
    
  ]);
  const [cartItems,setCartItems]=useState([]);
  const addToCart = (item)=>{
    let productItem = cartItems.find(product=>product.id===item.id); 
    if(productItem){
      productItem.quantity +=1;
      setCartItems([...cartItems]);
      Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: 'Your item has been updated',
      showConfirmButton: false,
      timer: 1500
});


    }else{
      item.quantity =1;
      setCartItems([item,...cartItems]);
      Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: 'Your item has been saved',
      showConfirmButton: false,
      timer: 1500
});

  } 
    }
    const incrementQ=(item)=>{
      let productItem = cartItems.find(product=>product.id===item.id); 
    if(productItem){
      productItem.quantity +=1;
      setCartItems([...cartItems]);
      Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: 'Your item has been updated',
      showConfirmButton: false,
      timer: 1500
});
  }   
   }
    const decrementQ=(item)=>{
      let productItem = cartItems.find(product=>product.id===item.id); 
    if(productItem){
      productItem.quantity -=1;
      if(productItem.quantity===0){
        setCartItems(cartItems.filter(product=>product.id!==item.id));
         } else{
      setCartItems([...cartItems]);
       }
      Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: 'Your item has been updated',
      showConfirmButton: false,
      timer: 1500

});

  }
    
  }
   const removeFromCart=(item)=>{
    setCartItems(cartItems.filter(product=>product.id!==item.id));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your item has been removed',
     showConfirmButton: false,
     timer: 1500
});
   }

  
  
  return (
 <ShoppingContext.Provider value={
  {products,addToCart,incrementQ,
    decrementQ,cartItems,removeFromCart
  }
 }>
   <div className="container">
     < Header cartItems={cartItems}/>
     <Routes>
         <Route path="/" exact element={<Home />}/>
         <Route path="/cart" exact element={<Cart />}/>
      </Routes>
    
    </div>
 </ShoppingContext.Provider>
  );
}

export default App;
