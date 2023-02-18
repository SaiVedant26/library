function Navbar(){
    return(
    <nav className="navbar">
        <ul className="menu">
                <li className="bar"><a href="/explore">Explore</a></li>
                <li className="bar"><a href="/login">Login</a></li>
                <li className="logo"><a href="/">Library</a></li>
        </ul>   
    </nav>
    )
}

export default Navbar;