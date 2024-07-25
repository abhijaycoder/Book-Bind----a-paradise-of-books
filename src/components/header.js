import React from 'react'
import "./header.css"

import SearchIcon from '@material-ui/icons/Search'
import { ShoppingBasket } from '@material-ui/icons'

import { useStateValue } from '../Providers/StateProviders'

import {auth} from '../firebase'
import {Link} from 'react-router-dom'

function Header() {

  const [{ basket, user}, dispatch] = useStateValue();

  const handleAuthentication =()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <>
    <div className='header'>
        
        <h1>LOGO</h1>
        

        <div className='header__search'>
          
          <input className='header__searchInput' type='text' />
          <SearchIcon className='header__searchIcon' />

        </div>  

        <div className='header__nav'>
          
            <Link to={!user && "/login"}>
          <div className='header__option' onClick={handleAuthentication}>
           <span className='header__optionLineOne'>Hello {!user ? "guest" : user.email}</span>
           <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
           </Link>

          <div className='header__option'>
           <span className='header__optionLineOne'>Return</span>
           <span className='header__optionLineTwo'>& Orders</span>
          </div>
          
          <Link to="/checkout">
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header_optionLineTwo header__basketCount'> {basket?.length} </span>
          </div>
          </Link>


        </div>
       
        





    </div>

    </>
  )
}

export default Header