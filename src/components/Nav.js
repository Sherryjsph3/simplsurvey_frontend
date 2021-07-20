import {Link} from 'react-router-dom'



function Nav (props) {
    return (
        <div>
            <h2>login</h2>
            <Link to='/categories'><h2>Categories</h2></Link>
            <Link to='/form'><h2>New Survey</h2></Link>
            <Link to=''><h2>My Surveys</h2></Link>
            <Link to=''><h2>My Answers</h2></Link>
        </div>
    )
}

export default Nav;