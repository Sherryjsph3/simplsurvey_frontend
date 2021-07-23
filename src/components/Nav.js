import {login, logout} from '../services/firebase';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Nav ({user, setExistingUser}) {
 

    async function createUser() {
        let currentUser = {
            users: {
                google_id: user.uid 
            }
        }
        try {
            const users = await fetch('https://simplsurvey-api.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(currentUser)
            }).then(res => res.json())
        } catch (error) {
            console.log(error)
        }
        checkUserExist();
    }

    async function checkUserExist() {
        console.log('check');
       try {
           const users = await fetch('https://simplsurvey-api.herokuapp.com/users').then(res => res.json()) 
           const foundUser = users.find(u => u.google_id === user.uid)
           if (foundUser) {
               setExistingUser(foundUser.id);
           } else if (!foundUser) {
               createUser();
           }
       }  catch (error) {
           console.log(error)
       }
    }
      useEffect(() => {
          checkUserExist();

      }, [user])

    function handleLogout() {
        logout();
        setExistingUser(false);
    }

         
     


return (
    <nav>
        
    <div className="login-box">
        {
        user ? 
        <div>
            <div 
             onClick={() => handleLogout()}
            >
            <p className="nav-text">Logout</p>
            </div>
            <Link to='/'><p className="nav-text">Home</p></Link>
        <Link to='/categories'><p className="nav-text">Categories</p></Link>
        <Link to='/new_survey'><p className="nav-text">New Survey</p></Link>
        <Link to='/my_surveys'><p className="nav-text">My Surveys</p></Link>
        <Link to='/my_answers'><p className="nav-text">My Answers</p></Link>
        </div> 
        
        :     
        <div>
            <div
            onClick={() => login()}
            >
            <p className="nav-text">Login</p>
            </div>
            <Link to='/'><p className="nav-text">Home</p></Link>
        <Link to='/categories'><p className="nav-text">Categories</p></Link>
        </div>
        }
    
    </div>
 
</nav>
 
  )
}

export default Nav;