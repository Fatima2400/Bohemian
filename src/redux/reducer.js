import { GET_DATA } from "./action";
import { GET_PROD_DETAILS } from "./action";
import { GET_CART_DATA  } from "./action";
const initialState={
  products:[]  ,
  product:{},
  Cart:[]
}
export const reducer=(state=initialState,{type,payload})=>{
switch(type){
    case GET_DATA:
        return {...state,products:payload};

        case GET_PROD_DETAILS:
        return {...state,product:payload};

        case GET_CART_DATA  :
            return {...state,Cart:payload};

        default:
        return state
}
}