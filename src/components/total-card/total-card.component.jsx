import './total-card.styles.scss'

import { socialMediaIcon, arrowIcon } from '../../utils/HandleIcons'


const TotalCard = ({stats}) => {
  const {socialMedia, userName, followers, today} = stats
  return (
    <div className={`total-card-container ${socialMedia}`}>
        <div className="header">
            {
              socialMediaIcon(socialMedia)
            }
            <small className='name'>{userName}</small>
        </div>
        <div className="followers">
            <span className='amount'>{followers}</span>
            <span className='text'>FOLLOWERS</span>
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