// import {useState} from "react";
import {Link} from 'react-router-dom'

function Categories({surveys, history, setSelectedCategory, category}) {


    function handleRedirect(event) {
        history.push(`/category`);
    }

    return (
       <>
       
            <h1 className='category-head'>Categories</h1>

            <h2 className='category-head'> Select Category </h2>  

            <div className='frame'>

            <div className='categories' onClick={() => {setSelectedCategory('food');
             handleRedirect(); }  
             }><h3>Food</h3>
            <img src='/imgs/brooke-lark-nTZOILVZuOg-unsplash.jpg' alt='food' style={{ width:130 }}/></div>

            <div className='categories' onClick={() => {setSelectedCategory('pop culture');
             handleRedirect(); }  
             }><h3>Pop Culture</h3>
            <img src='/imgs/mike-von-aaWaG-raMNw-unsplash.jpg' alt='pop_culture' style={{ width:130 }}/></div>

            <div className='categories' onClick={() => {setSelectedCategory('travel');
             handleRedirect(); }  
             }><h3>Travel</h3>
            <img src='/imgs/annie-spratt-qyAka7W5uMY-unsplash.jpg' alt='travel' style={{ width:130 }}/></div>

            <div className='categories' onClick={() => {setSelectedCategory('art');
             handleRedirect(); }  
             }><h3>Art</h3>
            <img src='/imgs/rhondak-native-florida-folk-artist-_Yc7OtfFn-0-unsplash.jpg' alt='art' style={{ width:120 }}/></div>

            <div className='categories' onClick={() => {setSelectedCategory('sports');
             handleRedirect(); }  
             }><h3>Sports</h3>
            <img src='/imgs/jordan-rowland-Q64WE8Xo9bs-unsplash.jpg' alt='sports' style={{ width:130 }}/></div>

            <div className='categories' onClick={() => {setSelectedCategory('misc');
             handleRedirect(); }  
             }><h3>Misc</h3>
            <img src='/imgs/jon-tyson-hhq1Lxtuwd8-unsplash.jpg' alt='misc' style={{ width:110 }}/></div>
            </div>
        
        </>
    )
}

export default Categories