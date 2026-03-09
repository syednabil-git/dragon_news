import React, { use, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';

const Register = () => {
 

  const handleRegister = (e) => {
    e.preventDefault();
    //console.log(e.target);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    const form = e.target;
    const name = form.name.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })

    if(name.length < 5){
      setNameError("Name should be more then 5 character");
      return;

    }else {
      setNameError(" ");
    }

    const photo = form.photo.value;
    //const email = form.email.value;
    //const password = form.password.value;
   // console.log({name,photo,email,password});
    createUser(email, password)
    .then(result => {
      const user = result.user;
      //console.log(user);
      updateUser({ displayName: name, photoURL: photo})
      .then(() => {
        setUser({...user, displayName: name, photoURL: photo });
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }
  const { createUser, setUser, updateUser} = useContext(AuthContext);
  const [nameError, setNameError] = useState(" ");
  const [showPassword, setShowPassword ] = useState(false);
  const navigate = useNavigate();

  const handleToggleShowPassword = (event)=>{
    event.preventDefault();
    setShowPassword(!showPassword);
  }
  return (
    <div>
        <div className='flex justify-center min-h-screen items-center'>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
              <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                  <input name='name' type="text" className="input" placeholder="Name" required />

                  {
                    nameError && <p className='text-xs text-red-500'>{nameError}</p>
                  }

                   <label className="label">Photo URL</label>
                  <input name='photo' type="text" className="input" placeholder="Photo Url" required />
                  <label className="label">Email</label>
                  <input name='email' type="email" className="input" placeholder="Email" required />
                  <label className="label">Password</label>
                  <input name='password' 
                  type={showPassword ? 'text' : 'password'}
                  className="input" placeholder="Password" required />
                  <button className='btn btn-xs absolute top-82 right-11' onClick={handleToggleShowPassword}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                  
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                  <p className='font-semibold text-center pt-5'>All Ready Have An Account ?{" "}  <Link className='text-secondary' to="/auth/login">Login</Link></p>
                </fieldset>
              </form>
            </div>
            </div>
    </div>
  )
}

export default Register