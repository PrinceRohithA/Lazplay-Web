import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="fas fa-gamepad"></i>
            <span>GameHub</span>
          </Link>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/platform-runner">Platform Runner</Link></li>
              <li><Link to="/lost-lands">Lost Lands</Link></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-signup">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header