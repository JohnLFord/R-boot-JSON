import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1>JSONPlaceholder Users Application</h1>
            <Link to="/">Home</Link> | 
            <Link to="/users"> Users</Link>
        </nav>
    );
}

export default NavBar;