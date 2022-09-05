import './header.styles.scss'

const Header = () => {
  return (
    <nav className='header-container'>
        <div className="header-logo">
            <h1 className='title'>Social Media Dashboard</h1>
            <span className='total-followers'>Total Followers: 23,004</span>
        </div>
        <div className="header-theme-toogler">
          <span className='text'>Dark Mode</span>
          <span className="toogle-box">
            <span className="toogle-circle"></span>
          </span>
        </div>
    </nav>
  )
}

export default Header