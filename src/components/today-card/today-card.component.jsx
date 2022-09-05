import './today-card.styles.scss'

import { socialMediaIcon, arrowIcon } from '../../utils/HandleIcons'

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

const TodayCard = ({stats}) => {
    const {socialMedia, indicator, amount, percent} = stats

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`today-card-container ${theme}`}>
            <div className="header">
                <span className={`indicator ${theme}`}>{indicator}</span>
                {
                    socialMediaIcon(socialMedia)
                }
            </div>
            <div className="data">
                <span className={`amount ${theme}`}>{amount}</span>
                <small className={`percent ${percent.negative && 'negative'}`}>
                    {arrowIcon(percent.negative)} {percent.amount}%
                </small>
            </div>
        </div>
    )
}

export default TodayCard