import { useNavigate } from "react-router"


export const Category=()=>{
    const navigate = useNavigate()
return(
    <div className="cat">
       <h6 className="new">NEW AND NOTEWORTHY</h6>
 <div className="category">
        <div>
        <div className='catimg'>
            <img onClick={()=>{navigate('/arrival')}} height='380px' width='355px' src='https://cdn.shopify.com/s/files/1/0119/1222/products/Among-Equals-Bilum-Bag-Barbaras-Blush-1_600x600@2x.jpg?v=1642113946'></img>
      
      
       </div>
       <div className='head'>
       <button onClick={()=>{navigate('/arrival')}} className="note">Accessories</button>
        </div>
        </div>

        <div className='cathead' >
        <div className='catimg'>
            <img onClick={()=>{navigate('/fashion')}} height='380px' width='355px' src='https://cdn.shopify.com/s/files/1/0119/1222/products/Joslin-Penny-Organic-Cotton-Shirt-Optical-White-1_600x600@2x.jpg?v=1648453871'></img>
      
      
       </div>
       <div className='head'>
       <button onClick={()=>{navigate('/fashion')}} className="note">Fashion</button>
        </div>
        </div>


        <div>
        <div className='catimg'>
            <img onClick={()=>{navigate('/homeware')}} height='380px' width='355px' src='https://cdn.shopify.com/s/files/1/0119/1222/products/Cotton-Shopping-Bag-40x45-2_600x600@2x.jpg?v=16511072701'></img>
           </div>
       <div className='head'>
       <button onClick={()=>{navigate('/homeware')}} className="note">Homeware</button>
        </div>
        </div>






       









        {/* <div className='catimg'>
            <img onClick={()=>{navigate('/fashion')}} height='380px' width='355px' src='https://cdn.shopify.com/s/files/1/0119/1222/products/Joslin-Penny-Organic-Cotton-Shirt-Optical-White-1_600x600@2x.jpg?v=1648453871'></img>
           
        </div>
        <div className='catimg'>
            <img onClick={()=>{navigate('/homeware')}} height='380px' width='355px' src='https://cdn.shopify.com/s/files/1/0119/1222/products/Cotton-Shopping-Bag-40x45-2_600x600@2x.jpg?v=1651107270'></img>
          
        </div> */}
    </div>

    </div>
   
)
}