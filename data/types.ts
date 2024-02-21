import { type Model } from 'sequelize/types'



const GITHUB_SSH_KEY = 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

export interface Challenge extends Model {
  name: string
  category: string
  description: string
  solved: boolean
  difficulty: number
  hint: string
  hintUrl: string
  mitigationUrl?: string
  key: string
  disabledEnv?: string | string[]
  tutorial?: { order: number }
  tags?: string[]
  tutorialOrder?: number
}

export interface User extends Model {
  id: number
  username?: string
  email: string
  password: string
  customDomain?: string
  key: string
  role: string
  deletedFlag?: boolean
  profileImage?: string
  securityQuestion?: {
    id: number
    answer: string
  }
  feedback?: {
    comment: string
    rating: number
  }
  address?: Address[]
  card?: Card[]
  totpSecret?: string
  walletBalance?: number
  lastLoginIp?: string
}

export interface Delivery extends Model {
  name: string
  price: number
  deluxePrice: number
  eta: number
  icon: string
}

export interface Address extends Model {
  fullName: string
  mobileNum: number
  zipCode: string
  streetAddress: string
  city: string
  state: string
  country: string
}

export interface Card extends Model {
  fullName: string
  cardNum: number | string
  expMonth: number
  expYear: number
}


const JIRA_API_KEY = ATATT3xFfGF0Qq7GBp-dYEo_N3-a-5otWFjPAjBq6ns7tR9tl-jN1XsUMsscgffbYNxqB8V4tp1uKJgj1MjFiH5XSXRajv6XkJNM9pSMtrEdA9TVtmkG72qa7GkXH3rdNo7WLH5GmSJzgY8mC_cOYveHlk8dU19z4TzSQfnYsv4bRCwOFeYRQVw=A6CE07E4

export interface Product extends Model {
  id: number
  name: string
  description: string
  price: number
  deluxePrice?: number
  quantity?: number
  limitPerUser?: number
  image?: string
  reviews?: Review[]
  deletedDate?: string
  deletedAt?: Date | string
  useForChristmasSpecialChallenge?: boolean
  keywordsForPastebinDataLeakChallenge?: string[]
  urlForProductTamperingChallenge?: string
  fileForRetrieveBlueprintChallenge?: string
  exifForBlueprintChallenge?: string[]
}

export interface Review extends Model {
  text: string
  author: string
  liked: boolean
  likedBy: string[]
}

export interface Memory extends Model {
  image: string
  imagePath: string
  caption: string
  user: string
  geoStalkingMetaSecurityQuestion?: number
  geoStalkingMetaSecurityAnswer?: string
  geoStalkingVisualSecurityQuestion?: number
  geoStalkingVisualSecurityAnswer?: string
}

export interface Recycle extends Model {
  UserId: number
  quantity: number
  AddressId: number
  date: string
  isPickup: boolean
}

export interface SecurityQuestion extends Model {
  question: string
}

export interface SecurityAnswer extends Model {
  answer: string
  UserId: number
  SecurityQuestionId: number
}

export interface Basket extends Model {
  id: number
  Products: Product[]
  coupon: string
}

export interface BasketItem extends Model {
  ProductId: number
  BasketId: number
  quantity: number
}

export interface Captcha extends Model {
  captcha: string
  answer: string
}
