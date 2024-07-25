import react from 'react'
import './Product.css'
import {useStateValue} from '../Providers/StateProviders'

function Product({id,price,title,image,rating}){

  const[{basket},dispatch]=useStateValue();

  const addToBasket = () => {
     
    dispatch( {
      type : "ADD_TO_BASKET",
      item : {
        id: id,
        title : title,
        image : image,
        price : price,
        rating: rating
      }
    })
   };
  
    return(

        <div className='product'>
       
        <div className='product__info'>
           <p>{title}</p>
 
           <p className='product__price'>
             <small>$</small>
             <strong>{price}</strong>
           </p>
 
           <div className='product__rating'>
             {
                 Array(rating).fill().map((_, i) => (
                     <p>⭐</p>
                 ))
             }
           </div>
     
           </div>
 
 
           <img className="product__image" src={image} alt='' />
 
           <button className='add___basket' onClick={addToBasket}>Add to Cart</button>
 
        
     </div>

    )
}

export default Product