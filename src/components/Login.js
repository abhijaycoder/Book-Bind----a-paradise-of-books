import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword  } from "firebase/auth";
import { useStateValue } from '../Providers/StateProviders';

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const[{basket,user},dispatch]=useStateValue();
    
    const history=useHistory();

    const signIn = e => {   
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User Signed in :", user);
            dispatch({
              type:"SET_USER",
              user: user,
            });
            history.push('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        
            }
        
        
            const register = e => { 
              const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("User Signed Up :",user)

            dispatch({
              type:"SET_USER",
              user: user,
            });

            history.push('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        
            }

  return (
    <div className='login'>

        <Link to='/'>
            <h1>LOGO</h1>
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>
            
            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                 
                <h5>password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                 
            </form>

                <button className='login__signInButton' onClick={signIn}> Sign In</button> 
             
             <p>By Sign in You agree to view book bind terms and conditions of use oof sales
                Please see our privacy policies , our cookies Notice and our Internet Based Ads Notice.
             </p>

             <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
    
        </div>
       


    </div>
  )
}

export default Login