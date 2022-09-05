import './header.styles.scss'

const Header = () => {
  return (
    <nav className='header-container'>
        <div className="header-logo">
            <h1 className='title dark-mode'>Social Media Dashboard</h1>
            <span className='total-followers dark-mode'>Total Followers: 23,004</span>
        </div>
        <div className="header-theme-toogler">
          <span className='text dark-mode'>Dark Mode</span>
          <span className="toogle-box dark-mode">
            <span className="toogle-circle dark-mode"></span>
          </span>
        </div>
    </nav>
  )
}

export default Header