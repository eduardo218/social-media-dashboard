import './today-area.styles.scss'

import {TODAY_STATS} from '../../data/today-stats'
import TodayCard from '../today-card/today-card.component'

const TodayArea = () => {
  return (
    <section className='today-area-container'>
        <h2 className='title dark-mode'>Overview - Today</h2>
        <div className="today-cards-container">
            {
                TODAY_STATS.map((stats, index) => <TodayCard key={index} stats={stats} />)
            }
        </div>
    </section>
  )
}

export default TodayArea