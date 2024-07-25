import React from 'react'
import {useStateValue} from '../Providers/StateProviders'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout(){

    const[{basket,user},dispatch]=useStateValue();

    return(

        <div className='checkout'>

        <div className='checkout__left'>
          
          {/* <img className='checkout_ad'
          src=' https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          /> */}

        <h2 className='checkout__title'> Your Shopping Basket</h2>

       {basket.map(item=>(
        <CheckoutProduct
        id={item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}
        />
       ))}

        
       </div> 

       <div className='checkout__right'>
          <Subtotal />
       </div>
      
    </div>
    
    )
}

export default Checkout