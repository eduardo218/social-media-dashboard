import {ReactComponent as Facebook} from '../assets/icon-facebook.svg'
import {ReactComponent as Instagram} from '../assets/icon-instagram.svg'
import {ReactComponent as Twitter} from '../assets/icon-twitter.svg'
import {ReactComponent as Youtube} from '../assets/icon-youtube.svg'

import {ReactComponent as PositiveIcon} from '../assets/icon-up.svg'
import {ReactComponent as NegativeIcon} from '../assets/icon-down.svg'

export const socialMediaIcon = (socialMedia) => {
    switch (socialMedia){
        case 'facebook':
            return <Facebook />
        case 'instagram':
            return <Instagram />
        case 'twitter':
            return <Twitter />
        case 'youtube':
            return <Youtube />
        default:
            throw new Error(`Element not found: ${socialMedia}`)
    }
}

export const arrowIcon = (isNegative) => isNegative ? <NegativeIcon /> : <PositiveIcon />
