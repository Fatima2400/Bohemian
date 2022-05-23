


import axios from "axios";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {getProduct } from "../redux/action";
import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const Homeware = () => {
    const [Method, setMethod]= useState('')
    const [post , setPost] = useState(null)
    const handlecard=(event)=>{
        setMethod(event.target.value)
if(event.target.value==="High"){
homeware.sort((a,b)=> {
    return b.price - a.price
})
}else{
    homeware.sort((a,b)=> {
        return a.price - b.price
    })   
}
     }


     const handlerate=(rating)=>{
        
        axios
          .get(`https://bohemian1.herokuapp.com/homeware?rating=${rating}`)
          .then((res)=>{
            dispatch(getProduct(res.data))
    })
    
    }



    const homeware = useSelector((state) => state.products);
    
    const dispatch = useDispatch();
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {



        axios.get('https://bohemian1.herokuapp.com/homeware').then((res)=>{
            dispatch(getProduct(res.data))
            console.log(res.data)
            setPost(res.data)
             
        });

    }

    

   


    
    
    return (
        <div>
            <h1 className='acchead'>Homeware</h1>

            <div className="filtgrid">

<div style={{width:"15%",height:"20px", marginBottom:"35px"}}>
<Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Sort by price</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={Method}
label="Age"
onChange={handlecard}
>
<MenuItem value={"High"} >High to low</MenuItem>
<MenuItem value={"Low"}>Low to High</MenuItem>
</Select>
</FormControl>
</Box>
</div>




<div style={{width:"15%",height:"20px", marginBottom:"35px"}}>
<Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
<InputLabel id="demo-simple-select-label">Sort by ratings</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"

label="rate"
onChange={(e) => {
handlerate(e.target.value);
}}
>
<MenuItem value={"5"} >5</MenuItem>
<MenuItem value={"4"}>4</MenuItem>
<MenuItem value={"3"}>3</MenuItem>
</Select>
</FormControl>
</Box>
</div>









</div>


           
            <div className="arr">
                { post? 
                    homeware.map((el) => {
                        return (
                            <Link style={{textDecoration:"none"}} className="dec"  to={`/homedetail/${el.id}`} key={el.id}>
                            <div>
                                <div className='cardplus'>
                                    <div className="card">
                                        <img height='380px' width='330px' src={el.img}></img>
                               </div>
                                </div>
                                <div className='hometit'>

                                    <h6 className='hometitacc'>{el.title} | {el.price}rs </h6>
                              </div>
                            </div>
</Link>
                       )
                    })
                : <h4 className="load">loading...</h4>  }

            </div>


        </div>
    )
}

