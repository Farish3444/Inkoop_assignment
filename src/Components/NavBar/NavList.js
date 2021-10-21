import React from 'react'
import Button from '../Button/Button'
import "./NavList.css"

const list = [
    {id:1,items:'About'},
    {id:2,items:'Services'},
    {id:3,items:'Gallery'},
    {id:4,items:'Contact'},
    {id:5,items:'Book'},
]

// "About","Services","Cuisine","Gallery","Contact","Book"
const NavList = () => {
    return (
        <div>
<h1 style={{fontFamily:'Brush Script MT',fontSize:'60px',marginRight:'85%'}}>List of Items</h1>
            {
                list.map((l,i)=>{
                    return(
                        <ul key={l.id}>
                            <li>{l.items}</li>                        
                        </ul>
                    )
                })
            }
<Button />
        </div>
    )
}

export default NavList
