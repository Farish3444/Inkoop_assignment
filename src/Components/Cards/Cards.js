import React from 'react'
import './Cards.css'

const Cards = ({title,image}) => {
    return (
        <div >
<div className="card">
<img  
src={image}
alt="Avatar"    
/>
  <h1 style={{fontSize:'15px'}}>{title}</h1>
</div> 
    </div>
    )
}


export default Cards
