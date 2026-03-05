import React, { use } from 'react'
import { NavLink } from 'react-router';
const catagoryPromise = fetch("/catagories.json").then((res) =>
    res.json());
const Catagories = () => {
    const Catagories = use (catagoryPromise);
  return (
    <div>
        <h2 className='font-bold'>All Catagories ({Catagories.length})</h2>
        <div className='grid grid-cols-1 mt-5 gap-3 '>
          {Catagories.map((category) => (
            <NavLink
              key = {category.id}
              className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"}
              to={`/category/${category.id}`}>
                {category.name}
            </NavLink>
          ))}
        </div>
    </div>
  );
};

export default Catagories;