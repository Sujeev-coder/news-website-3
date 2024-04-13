
"use client"
import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'


const Newsboard = ({category}) => {

const NXT_API_KEY="6f84564ab4af4be7bcdef4750f5447ee"

    const [articles, setArticles] = useState([])

    useEffect(()=>{

let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${NXT_API_KEY}`

fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles))
    },[category])

  return (
    <div className='text-center mt-2'>
      <h2>Latest <span className='badge fs-4 text-bg-danger'>News</span></h2>

{articles.map((news,index)=>{

return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>

})}

    </div>
  )
}

export default Newsboard
