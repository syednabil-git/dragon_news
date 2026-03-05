import React from 'react'
import { NavLink } from 'react-router';
import user from "../assets/user.png";

const Navbar = () => {
  return (
<div className='flex items-center justify-between'>
    <div className=''>

      </div>
      <div className='nav flex gap-5 text-accent'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/career'>Career</NavLink>
          </div>
          <div className='login-btn flex gap-3'>
            <img src={user}></img>
                <button className='btn btn-primary px-10'>Login</button>
          </div>
    </div>
  );
};

export default Navbar;