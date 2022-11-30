import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='topnav'>
            <div className="dropdown">
                <button className="dropbtn">
                    <img src='../assets/shape.png' alt='caret' className='user' />
                    Mein Bereich
                    <img src='../assets/path_2.png' alt='caret' className='caret' />
                </button>
                <div className="dropdown-content-wrapper">
                    <div className="dropdown-content">
                        <a href="/">My Published Joke</a>
                        <a href="/">My Saved Joke</a>
                        <a href="/">Account Information</a>
                        <a href="/">Publish New Joke</a>
                    </div>
                </div>
            </div> 
            <Link to='/' className='nav-links'>Sonderangebote</Link>
            <Link to='/' className='nav-links'>So Funktioniert's</Link>
        </nav>
    </>
  )
}

export default Navbar