import TotalCard from '../total-card/total-card.component'

import {GENERAL_STATS} from '../../data/general-stats'

import './total-area.styles.scss'

const TotalArea = () => {
  return (
    <section className='total-area-container'>
        {
          GENERAL_STATS.map((stats, index) => <TotalCard key={index} stats={stats}/>)
        }
    </section>
  )
}

export default TotalArea