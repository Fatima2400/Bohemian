import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../redux/action";
import { getCartData } from "../redux/action";
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Cart } from "./cart";
import { useNavigate } from "react-router-dom";



export const HomeDetails =()=>{
    const navigate = useNavigate();
    const product = useSelector((state) => state.product);
    const Cart = useSelector((state) => state.Cart);
    const[cartBtn,setcartBtn]=useState("Add To Cart")
    //console.log(product)
    const {id} = useParams();
 
  const dispatch = useDispatch();
  
  useEffect(() => {
    getData()
    cartData()
  },[])

  const getData=()=>{
axios.get(`https://bohemian1.herokuapp.com/homeware/${id}`).then((res) =>{
    dispatch(getProductDetails(res.data))
    //dispatch(getCartData(res.data))
    

    
}

 
  )
  
  }
  const cartData=()=> {
    axios
      .get("https://bohemian1.herokuapp.com/cartdata")
      .then((res) => dispatch(getCartData(res.data)))
      .catch((err) => console.log(err));
  }
  //const [cart, setCart] =useState({})
const handlecart=()=>{
    
         if(cartBtn === 'Add To Cart'){
        axios.post('https://bohemian1.herokuapp.com/cartdata',{
            title:product.title,
            img:product.img,
            price:product.price,
            id:product.id,
            qty:1
        })
        

        setcartBtn("Remove from cart")
    }else{
        axios.delete(`https://bohemian1.herokuapp.com/cartdata/${id}`)
       
           setcartBtn("Add To Cart")
       }
       
    
   
}

 //console.log("cart",Cart)
return (
  

   
   
 <div className='prdGrid'>
        

        <div className='prdImg'>


 <img className='prdimgi' height='500px' width='500px' src={product.img} alt="" />
</div>
<div className='prdTit'>
<h3 className="prodTitle">{product.title}</h3>

<h5>₹{product.price}.00</h5>
<p className="prodP">{product.description}</p> 

<button onClick={()=>{handlecart()}} className="cartAdd">{cartBtn}</button>
</div>

   </div> 


 
   
)
}






