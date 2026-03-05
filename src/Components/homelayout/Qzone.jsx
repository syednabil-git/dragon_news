import React from 'react'
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"
const Qzone = () => {
  return (
    <div className='bg-base-200 mx-auto'>
        <h2 className='font-bold mb-5 p-3'>QZone</h2>
        <div className='space-y-5 '>
            <img className='mx-auto' src={swimmingImage}></img>
             <img className='mx-auto' src={classImage}></img>
              <img className='mx-auto' src={playImage}></img>
        </div>
    </div>
  )
}

export default Qzone