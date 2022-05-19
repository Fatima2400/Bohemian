export const GET_DATA = 'GET_DATA'
export const GET_PROD_DETAILS = 'GET_PROD_DETAILS'
export const GET_CART_DATA = 'GET_CART_DATA'

export const getProduct=(payload)=>({
type: GET_DATA,
payload
})

export const getProductDetails=(payload)=>({
    type: GET_PROD_DETAILS,
    payload
    })
export const getCartData=(payload)=>({
    type: GET_CART_DATA,
    payload
    })