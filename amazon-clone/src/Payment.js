import React from 'react'
import './Payment.css';
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className='payment__container'>
        Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                <div className='payment__section'>
                     <div className='payment__title'>
                            <h3>Delivery Address</h3>
                     </div>
                        <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>House no:xxx,Sector:yyy</p>
                        <p>Panchkula,13****</p>
                    </div>
                </div>

                        <div className='payment__section'>
                        <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                         </div>
                         <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                        </div>

                        <div className='payment__section'>
                        <div className='payment__title'>
                        <h3>Payment Method</h3>
                        </div>

                        </div>
                        <div className="payment__details">
                            
                        </div>
        </div>
    </div>
  )
}

export default Payment