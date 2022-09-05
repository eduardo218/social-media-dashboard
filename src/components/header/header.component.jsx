import './header.styles.scss'

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext)

  const handleThemeToogler = () => {
    setTheme(theme === '' ? 'dark-mode' : '')
  }

  return (
    <nav className='header-container'>
        <div className="header-logo">
            <h1 className={`title ${theme}`}>Social Media Dashboard</h1>
            <span className={`total-followers ${theme}`}>Total Followers: 23,004</span>
        </div>
        <div className="header-theme-toogler" onClick={handleThemeToogler}>
          <span className={`text ${theme}`}>Dark Mode</span>
          <span className={`toogle-box ${theme}`}>
            <span className={`toogle-circle ${theme}`}></span>
          </span>
        </div>
    </nav>
  )
}

export default Header