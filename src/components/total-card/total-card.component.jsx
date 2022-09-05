import './total-card.styles.scss'

import { socialMediaIcon, arrowIcon } from '../../utils/HandleIcons'


const TotalCard = ({stats}) => {
  const {socialMedia, userName, followers, today} = stats
  return (
    <div className={`total-card-container dark-mode ${socialMedia}`}>
        <div className="header">
            {
              socialMediaIcon(socialMedia)
            }
            <small className='name dark-mode'>{userName}</small>
        </div>
        <div className="followers">
            <span className='amount dark-mode'>{followers}</span>
            <span className='text dark-mode'>FOLLOWERS</span>
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