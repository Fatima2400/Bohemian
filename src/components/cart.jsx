
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"

import { getCartData } from "../redux/action";
import {  useNavigate } from "react-router";
export const Cart = () => {
    const [price,setPrice] =useState(0)
    const Cartdet = useSelector((state) => state.Cart);
    const navigate = useNavigate()
    //const [cartItems, setcartItems] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        getData()

    }, [])

    
    const getData = () => {
        axios.get('https://bohemian1.herokuapp.com/cartdata').then((res) => {
            //setcartItems(res.data)
            //console.log(res.data)
            dispatch(getCartData(res.data));
var sum = 0
            if(res.data.length>0){
                for(let i=0;i<res.data.length;i++){
               
                    let x =  res.data[i].price
                    let y =  res.data[i].qty
                    sum += +x * y ;
                    console.log("x",x)
                    console.log("sum",sum)
                    setPrice(sum)
                   }
            }else{
                setPrice(0)
            }
               

            
                 
        })
    }
    const deleteData = (id) => {
        axios.delete(`https://bohemian1.herokuapp.com/cartdata/${id}`).then(() => {
            getData()
        })
    }
    const increment = (e) => {
        e.qty++;
        axios.patch(`https://bohemian1.herokuapp.com/cartdata/${e.id}`, e).then(() => {
          getData()
        })
      }

      const decrement = (e) => {
        e.qty--;
        if (!e.qty) {
          deleteData(e.id)
        }
        axios.patch(`https://bohemian1.herokuapp.com/cartdata/${e.id}`, e).then(() => {
          getData()
        })
      }
      
    console.log("cart",Cartdet)

     //console.log("hello", cartItems)
   
    return (
        
       <div className="cont">
           {/* <div style={{marginTop:'4%', display:'flex', justifyContent:'center', marginBottom:'4%'}} className="check">
           <button  className="checkBtn" >GO TO CHECKOUT</button>
           </div> */}
          <table style={{marginTop:'2%'}} class="table ">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Total</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {Cartdet.map((el) => {
          return (
            <tr>
            
            <td> <img className="cartImage" height='150px' width='230px' src={el.img} alt="" /> <h6 className="cartTitle">{el.title}</h6></td>
            
            <td>₹{el.price}</td>
            
            <td> <button className="plus" onClick={()=>{
                increment(el)
            }}>+</button> {el.qty}  <button className="plus" onClick={()=>{
                decrement(el)
            }} >-</button> 
            
            </td>
            <td>₹{el.price * el.qty}</td>
            <td>  
            <button onClick={() => {
                        deleteData(el.id)
                    }} className="crt"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                      
            </td>
          </tr>
          )
      })}
   
    
  </tbody>
</table>

<h4 className='tprice'>Total price: ₹{price}</h4>

<div style={{marginTop:'', display:'flex', justifyContent:'center', marginBottom:'4%'}} className="check">
           <button onClick={()=>{
               navigate('/checkout')
           }}  className="checkBtn" >GO TO CHECKOUT</button>
           </div>

       </div>
    )
}



