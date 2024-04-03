import React from 'react'

export const  ProjectCard1=({title,descrip ,frontend,backend,url,image})=> {
  return (
<div className="card w-96  bg-lime-600 text-neutral-content">
  <div className="card-body items-center text-center">
    {/* <h2 className="card-title">Interview Notes app</h2> */}
    <h2 className="card-title">{title}</h2>
    <p>{descrip} </p>
    <img src={image} alt="proj"/>
    {/* <p>web application  that is used to crack interview </p> */}
    <div className="card-actions justify-end">
      <button onClick={()=>(`${frontend}`)}className="btn btn-primary">Accept</button>
      <button onClick={()=>(`${backend}`)} className="btn btn-ghost">Deny</button>
      <button onClick={()=>(`${url}`)} className="btn btn-ghost">Live</button>
    </div>
  </div>
</div>
  )
}
