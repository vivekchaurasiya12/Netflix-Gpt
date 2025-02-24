import React,{use, useState,useRef} from "react";
import Header from "./Header";
import { validate } from "../utils/validation";
const Login =()=>{
  const [signin,setSignin] = useState(true);
  const handleSignIn=()=>{
    setSignin(!signin);
  }
  const [errorMessage,setErrorMessage] = useState(null);
  const fullname  = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  // We use useRef to get the value of the input field it is a hook which gives the refrence of input field
  //other method are make state variable and use onChange event to get the value of input field to perform the same thing
  const password = useRef(null);
  const handleValidation = ()=>{

  // Before signin and signup we validate the data 
    const message = validate(email.current.value,password.current.value,fullname.current.value,mobile.current.value);
   
    console.log(message);
    setErrorMessage(message );

  }
    return(
      <div className="relative h-screen">
        <Header/>
        <div>
        <img src="
https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" alt="Netflix Background" className="w-full min-h-screen"/>
      </div>
      {/*  form  */}
        <form onSubmit={(e)=>e.preventDefault() } className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 px-12 py-14 rounded-lg">
          <h1 className="text-2xl text-white font-bold">{signin ? "Sign In":"Sign Up" }</h1>
          <div className="flex flex-col items-center">
            {!signin &&  ( <input ref = {fullname} type="text" placeholder="Full Name" className="w-96 mt-5 p-2 rounded-md" />)}
          <input ref ={email} type="email" placeholder="Email" className="w-96 mt-5 p-2 rounded-md" />
        
          {!signin &&(<input ref ={mobile} type="text" placeholder="Phone Number" pattern="[0-9]*" className="w-96 mt-5 p-2 rounded-md" />)}
          <input ref = {password} type="password" placeholder="Password" className="w-96 mt-5 p-2 rounded-md" />
          <p className="text-white p-2 text-left">{errorMessage}</p>
          <button className="w-96 mt-5 p-2 bg-red-600 text-white rounded-md" onClick={handleValidation}>{signin ?"Sign In":"Sign Up" }</button>
          </div>
          {/* <div className="mt-5 text-white">
            <input type="checkbox" />
            <span className="ml-2">Remember Me</span>
            <span className="float-right">Need Help?</span>
          </div> */}
          <div className="mt-5 text-white">
            <span>{signin ?"New to Netflix?": "Already existing customer?" } </span>
            <span className="text-red-600 ml-2 cursor-pointer" onClick={handleSignIn}>{signin ?"Sign Up Now": "Sign In Now" }</span>
          </div>
        </form>
     
      </div>
    )
}
export default Login;
