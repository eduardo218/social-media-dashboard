import './today-card.styles.scss'

import { socialMediaIcon, arrowIcon } from '../../utils/HandleIcons'



const TodayCard = ({stats}) => {
    const {socialMedia, indicator, amount, percent} = stats

    return (
        <div className='today-card-container'>
            <div className="header">
                <span className="indicator">{indicator}</span>
                {
                    socialMediaIcon(socialMedia)
                }
            </div>
            <div className="data">
                <span className="amount">{amount}</span>
                <small className={`percent ${percent.negative && 'negative'}`}>
                    {arrowIcon(percent.negative)} {percent.amount}%
                </small>
            </div>
        </div>
    )
}

export default TodayCard