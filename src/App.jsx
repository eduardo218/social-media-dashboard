import './App.scss'
import Header from './components/header/header.component'
import TodayArea from './components/today-area/today-area.component'
import TotalArea from './components/total-area/total-area.component'

const App = () => {
  return (
    <main className='main-container'>
      <div className="container">
        <Header />
        <TotalArea />
        <TodayArea />
      </div>
    </main>
  )
}

export default App