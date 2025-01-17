import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../Providers/StateProviders'

function CheckoutProduct({id,image,title,price,rating,hideButton}){

    const[basket,user,dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE FROM BASKET",
            item :{
            id:id,
            image:image,
            title:title,
            price:price,
            rating:rating,
            }
        });
    }
    return(
        
        <div className='checkoutProduct'>
       
        <img className='checkoutProduct__image' src={image} />
 
        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>
             <small>$</small>
             <strong>{price}</strong>
          </p>
 
          <div className='checkoutProduct__rating'>
             {
                 Array(rating).fill().map((_, i) => (
                     <p>⭐</p>
                 ))
             }
           </div>
 
           {!hideButton && (
             <button onClick={removeFromBasket}>Remove From Basket</button>
           )}
 
        </div>      
     </div>

    )
}

export default CheckoutProduct