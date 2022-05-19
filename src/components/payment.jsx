import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const Payment = () => {
    // const dispatch = useDispatch();
    const navigate=useNavigate()
    // function handlePayment(){
    //   dispatch(deletecart())
    //   navigate("/")
    // }
  return (
      <div className='box'>
    <div className='container my-5'>
       
              <h1 className="pay">Payment</h1>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    checked=""
                    required=""
                  />
                  <label className="form-check-label pay" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label pay" htmlFor="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label pay" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label pay">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback pay">Name on card is required</div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label pay">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label pay">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback pay">Expiration date required</div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label pay">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback pay">Security code required</div>
                </div>
              </div>
              <hr className="my-4" />

             
               
         <button type="button" class="btn btn-primary bg-black" data-bs-toggle="modal" data-bs-target="#thankyouModal">
         Place Order
    </button>
    <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">CONGRATULATIONS.</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Order Succesfully Placed!!!
         
          </div>
          <div class="modal-footer">
            <button onClick={()=>{
                navigate("/")
            }}  type="button" data-bs-dismiss="modal" class="btn btn-primary bg-black">Continue Shopping</button>
           

          </div>
        </div>
      </div>
    </div>
              
    </div>
    </div>
  )
}