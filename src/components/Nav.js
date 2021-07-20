import {login, logout} from '../services/firebase';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function Nav ({user}) {
    const [existingUser, setExistingUser] = useState(false);

    async function createUser() {
        try {
            const users = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(user.uid)
            }).then(res => res.json())

            setExistingUser(true);
        } catch (error) {
            console.log(error)
        }
    }

    async function checkUserExist() {
       try {
           const users = await fetch('http://localhost:3000/users').then(res => res.json()) 
           if (users.includes(users.google_id)) {
               setExistingUser(true);
           } else {
               createUser();
           }
       }  catch (error) {
           console.log(error)
       }
    }

     function handleLogin() {
         login();
         checkUserExist();
     }

return (
    <nav>
        
    <div className="login-box">
        {
        user ?      
        <div
        onClick={logout}
        >
            <p className="nav-text">Logout</p>
        </div> 
        :     
        <div
        onClick={() => handleLogin()}
        >
            <p className="nav-text">Login</p>
        </div>
        }
    
    </div>
    <br/>
    <br/>
    <Link to='/categories'><p className="nav-text">Categories</p></Link>
    <br/>
    <br/>
    <Link to='/form'><p className="nav-text">New Survey</p></Link>
    <br/>
    <br/>
    <Link to=''><p className="nav-text">My Surveys</p></Link>
    <br/>
    <br/>
    <Link to=''><p className="nav-text">My Answers</p></Link>
  
</nav>
 
  )
}

export default Nav;