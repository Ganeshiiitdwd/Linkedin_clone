import React, { useState } from 'react'
import { LoginApi} from '../api/Authapi'
import   '../components/LoginComponent.css'
import  myown from '../assets/Logo1.png'
import { toast } from 'react-toastify';
import {Googleprovider} from '../api/Authapi';
import GoogleButton from 'react-google-button';
import { NavLink, useNavigate } from 'react-router-dom';

export default function LoginComponent() {
  let navigate=useNavigate();
    const [credential, setCredential]=useState({});
    const login=async()=>{
   try{
    const res= await LoginApi(credential.email, credential.password);
    toast.success("Signed In Successfully")
    // console.log(res);
    localStorage.setItem('userEmail',res.user.email)  //we are storing it with the name of userEmail, so we could
    //access it from any component that's why used setItem and we will access it using getItem
    //that what similar we will do for the time
    
    navigate('/home');
   }catch(err){
    console.log(err);
           toast.error("Please Check Your Credentials")
   }
    
    }   
   
   const googleSignIn=()=>{
       const response=Googleprovider();
       navigate('/home');
      
       console.log(response);
   }

  return (
    
    <div className="login-wrapper"> 
      <img src={myown} alt='..' className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredential({ ...credential, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredential({ ...credential, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
        
      </div>
   
      <div className="container">

 
 
  <hr className="hr-text" data-content="or"/>
  
</div>
<div className="google-btn-container">
  <GoogleButton className='google-btn' onClick={googleSignIn}></GoogleButton>
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" >
           <NavLink to="/register"> Join now</NavLink>
          </span>
        </p>
      </div>
     
    </div>


  )
}
