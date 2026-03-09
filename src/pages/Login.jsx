import React, { use, useRef, useState } from 'react'
import { FaEye, FaEyeSlash, FaHandLizard } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/Firebase.config'

const Login = () => {
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const { signIn }= use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
 // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
   // console.log({email, password});
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      //console.log(user);
      navigate(`${location.state? location.state : "/"}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      //alert ( errorCode, errorMessage);
      setError(errorCode);
    });
  }

  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  }
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log('forget password', email )
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('please check your email')
    })
    .catch()
  }

  
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input required 
          name='email' 
          type="email" 
          className="input" 
          placeholder="Email"
          ref={emailRef}
           />
          <label className="label">Password</label>
           <div className='relative'>
              <input required 
              name='password' 
              type={showPassword ? 'text' : 'password'} 
              className="input" placeholder="Password" />
              <button 
               onClick={handleTogglePasswordShow}
              className="btn btn-xs absolute top-2 right-5">{showPassword
               ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
           </div>
          <div onClick={handleForgetPassword}>
            <a className="link link-hover">Forgot password?</a></div>

          {
            error && <p className='text-red-400 text-xs'>{error}</p>
          }

          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='font-semibold text-center pt-5'>Don't Have An Account ?{" "}  <Link className='text-secondary' 
          to="/auth/register">Register</Link></p>
        </fieldset>
      </form>
    </div>
    </div>
  )
}

export default Login