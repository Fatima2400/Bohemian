
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../redux/action";
import { getProductDetails } from "../redux/action";
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export const FashionDetails =()=>{
    const navigate = useNavigate();
    //const Cart = useSelector((state) => state.Cart);
    const product = useSelector((state) => state.product);
    const[cartBtn,setcartBtn]=useState("Add To Cart")
    console.log(product)
    const {id} = useParams();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    getData()
    cartPost()
  },[])

  const getData=()=>{
axios.get(`https://bohemian1.herokuapp.com/fashion/${id}`).then((res) =>{
    dispatch(getProductDetails(res.data))
   
   

    
}
 
  )
  
  }

  const cartPost=()=> {
    axios
      .get("https://bohemian1.herokuapp.com/cartdata")
      .then((res) => dispatch(getCartData(res.data)))
      .catch((err) => console.log(err));
  }
 
  const handlecart=()=>{
    
    if(cartBtn === 'Add To Cart'){
        axios.post('https://bohemian1.herokuapp.com/cartdata',{
            title:product.title,
            img:product.img,
            price:product.price,
            id:product.id,
            qty:1
        })
        

        setcartBtn("Added to Cart")
    }else{
        //axios.delete(`https://bohemian1.herokuapp.com/cartdata/${id}`)
       
           setcartBtn("Add To Cart")
       }
    
   


}
 console.log(product)
return (
  

   <div>
   
 <div className='prdGrid'>
        

        <div className='prdImg'>


 <img className='fashImg' height='500px' width='500px' src={product.img} alt="" />
</div>
<div className='prdTit'>
<h3 className="prodTitle">{product.title}</h3>
<h5>₹{product.price}.00</h5>
<p className="prodP">{product.description}</p> 
<h6>Select size:</h6>
<select className="select" name="select size">

<option value="XL">XL</option>
  <option value="S">Small</option>
  <option value="M">Medium</option>
  <option value="L">Large</option>
</select>


<button onClick={()=>{handlecart()}} className="cartAdd" data-bs-toggle="modal" data-bs-target="#thankyouModal" >{cartBtn}</button>
</div>

   </div> 

<div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">CONGRATULATIONS.</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Item successfully added to cart
         
          </div>
          <div class="modal-footer">
            <button onClick={()=>{
                navigate("/cart")
            }}  type="button" data-bs-dismiss="modal" class="btn btn-primary bg-black">Go to cart</button>
           

          </div>
        </div>
      </div>
    </div>


 </div> 
 
   
)
}


