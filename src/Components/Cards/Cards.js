import React from 'react'
import './Cards.css'

const Cards = ({title,image}) => {
    return (
        <div style={{ display:"inline-block"}}>
<div className="card">
<img  
src={image}
alt="Avatar"    
/>
  <h1 style={{fontSize:'20px'}}>{title}</h1>
</div> 
    </div>
    )
}


export default Cards
