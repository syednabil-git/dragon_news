import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { auth } from '../../firebase/Firebase.config';
import { AuthContext } from '../../provider/AuthProvider';

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const SocialLogin = () => {

  const { user } = useContext(AuthContext)

  // Hide if user is logged in
  if(user){
    return null
  }
  const handleGoogleSignIn = () => {
    console.log('google button clicked');
    signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result)
      .catch(error => {
        console.log(error)
      })
    })
  }

  const handleGithubSignIN = () => {
    signInWithPopup(auth, gitHubProvider)
    .then(result => {
      console.log(result.user)
      
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className='font-bold'>Login with
        <div className='space-y-3'>
            <button onClick={handleGoogleSignIn} className='btn mt-3 w-full btn-outline btn-secondary'><FcGoogle size={24}/> Login with Google</button>
            <button onClick={handleGithubSignIN} className='btn w-full  btn-outline btn-primary'><FaGithub size={24} /> Login with GitHub</button>
        </div>
    </div>

  )
}

export default SocialLogin