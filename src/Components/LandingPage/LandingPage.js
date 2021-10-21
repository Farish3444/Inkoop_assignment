import React from 'react'
// import Button from '../Button/Button';
import Cards  from '../Cards/Cards';
import '../Cards/Cards.css'
import NavList from '../NavBar/NavList';

const LandingPage = () => {
    return (
        <React.Fragment>

<h1 style={{fontFamily:'Brush Script MT',fontSize:'60px'}}>What are you Havaing for Lunch ?</h1>
<NavList />
        <div className='landingCards'>
            <Cards 
                title="Mexican Taco"
                image={"https://imgk.timesnownews.com/story/chad-montano-lP5MCM6nZ5A-unsplash.jpg?tr=w-400,h-300,fo-auto"}
            />
            <Cards 
                title="FarmHouse Pizza"
                image={"https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto/untitled-11606391037854.jpg"}
            />
            <Cards 
                title="Chicken Burger"
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdo2XjvaF6OT3lLuV65Tj7OD8nq3TMBNpT1Q&usqp=CAU"}
            />
            <Cards 
                title="Loaded Nachos"
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9L997u3Y68JsXJK4zGkDpq8HCOMYhxsSvDA&usqp=CAU"}
            />
            <Cards 
                title="Hakka Noddles"
                image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTkjnS3XQfgOC_pHxIlpDkSxtHkShgvRVFQ&usqp=CAU"}
            />
        </div>
        {/* <Button /> */}
        </React.Fragment>
    )
}

export default LandingPage
