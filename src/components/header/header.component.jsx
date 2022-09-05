import './header.styles.scss'

const Header = () => {
  return (
    <nav className='header-container'>
        <div className="header-logo">
            <h1>Social Media Dashboard</h1>
            <span>Total Followers: 23,004</span>
        </div>
        <div className="header-theme-toogler">
          <span>Dark Mode</span>
          <span className="toogle-box">
            <span className="toogle-circle"></span>
          </span>
        </div>
    </nav>
  )
}

export default Header