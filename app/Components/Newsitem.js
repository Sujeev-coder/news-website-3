import React from 'react'

const Newsitem = ({title,description,src,url}) => {
  return (
<div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px", width:"320px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title.slice(0,50)}</h5>
    <p class="card-text">{description?description.slice(0,90):null}</p>
    <a href={url} class="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default Newsitem
