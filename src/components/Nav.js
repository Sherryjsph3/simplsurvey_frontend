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
        
    <div>
        {
        user ?      
        <div
        onClick={logout}
        >
            Logout
        </div> 
        :     
        <div
        onClick={() => handleLogin()}
        >
            Login
        </div>
        }
    
   
    </div>
    <Link to='/categories'><h2>Categories</h2></Link>
    <Link to='/form'><h2>New Survey</h2></Link>
    <Link to=''><h2>My Surveys</h2></Link>
    <Link to=''><h2>My Answers</h2></Link>
  
</nav>
 
  )
}

export default Nav;