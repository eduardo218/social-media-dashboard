import './total-card.styles.scss'

import { socialMediaIcon, arrowIcon } from '../../utils/HandleIcons'

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const TotalCard = ({stats}) => {
  const {socialMedia, userName, followers, today} = stats

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`total-card-container ${theme} ${socialMedia}`}>
        <div className="header">
            {
              socialMediaIcon(socialMedia)
            }
            <small className={`name ${theme}`}>{userName}</small>
        </div>
        <div className="followers">
            <span className={`amount ${theme}`}>{followers}</span>
            <span className={`text ${theme}`}>FOLLOWERS</span>
        </div>
        <div className="today">
            <span className={`amount ${today.negative && 'negative'}`}>
              {arrowIcon(today.negative)} {today.amount} Today
              </span>
        </div>
    </div>
  )
}

export default TotalCard