import {login, logout} from '../services/firebase';
import {Link} from 'react-router-dom'

function Nav ({user}) {

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
        onClick={login}
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