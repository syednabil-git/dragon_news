import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const FindUs = () => {
  return (
    <div className=''>
        <h2 className='font-bold mb-5'>Find Us on</h2>
        <div className="join join-vertical w-full ">
  <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn join-item justify-start"><FaTwitter></FaTwitter>Twitter</button>
  <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instragram</button>
</div>
    </div>
  )
}

export default FindUs