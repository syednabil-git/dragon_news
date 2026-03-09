import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
   
    const [breakingNews, setBreakingNews] = useState([])
    useEffect(() => {
      fetch('/news.json')
      .then(res => res.json())
      .then(data => {
        const breaking = data.filter(news => news.others?.is_today_pick === true)
        setBreakingNews(breaking)
      })
    },[])
   

  return ( 

    <div className='flex items-center gap-5 bg-base-200 p-3'>
        <p className='text-base-100 bg-secondary px-3 py-2'>
            Latest
        </p>
        
        <Marquee className='gap-5 flex' pauseOnHover={true} speed={50}>
          {
            breakingNews.map(news => (
              <p key={news.id} className='font-bold mr-10'>
                {
                  news.title
                }
              </p>
            ))
          }
        </Marquee>
    </div>
  )
}

export default LatestNews