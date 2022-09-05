import './App.scss'
import Header from './components/header/header.component'
import TodayArea from './components/today-area/today-area.component'
import TotalArea from './components/total-area/total-area.component'

import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

const App = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <main className={`main-container ${theme}`}>
      <div className="container">
        <Header />
        <TotalArea />
        <TodayArea />
      </div>
    </main>
  )
}

export default App