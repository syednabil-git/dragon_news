import React from 'react'
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
  return (
    <div>
        <img className='w-full h-[600px] object-cover' src={news.image_url}>
        
        </img>
        <h2 className='text-2xl mt-5'>
            {news.title}
        </h2>
        <p>
            {news.details}
        </p>
        <Link className='btn btn-secondary mt-10' to={`/category/${news.category_id}`}>Back to Catagory</Link>
    </div>
  )
}

export default NewsDetailsCard