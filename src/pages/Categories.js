// import {useState} from "react";
import {Link} from 'react-router-dom'

function Categories({surveys, history, setSelectedCategory}) {

    return (
       <>
       <div className='categories'>
            <h1>Categories</h1>

            <h2> Select Category </h2>  
            
            <Link onCLick={setSelectedCategory('food')} to='/category'><h3>Food</h3>
            <img src='/imgs/brooke-lark-nTZOILVZuOg-unsplash.jpg' alt='food' style={{ width:100 }}/></Link>

            <Link onCLick={setSelectedCategory('pop culture')} to='/category'><h3>Pop Culture</h3>
            <img src='/imgs/mike-von-aaWaG-raMNw-unsplash.jpg' alt='pop_culture' style={{ width:100 }}/></Link>

            <Link onCLick={setSelectedCategory('travel')} to='/category'><h3>Travel</h3>
            <img src='/imgs/annie-spratt-qyAka7W5uMY-unsplash.jpg' alt='travel' style={{ width:100 }}/></Link>

            <Link onCLick={setSelectedCategory('art')} to='/category'><h3>Art</h3>
            <img src='/imgs/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg' alt='art' style={{ width:100 }}/></Link>

            <Link onCLick={setSelectedCategory('sports')} to='/category'><h3>Sports</h3>
            <img src='/imgs/jordan-rowland-Q64WE8Xo9bs-unsplash.jpg' alt='sports' style={{ width:100 }}/></Link>

            <Link onCLick={setSelectedCategory('misc')} to='/category'><h3>Misc</h3>
            <img src='/imgs/jon-tyson-hhq1Lxtuwd8-unsplash.jpg' alt='misc' style={{ width:100 }}/></Link>                               
        </div>
        </>
    )
}

export default Categories