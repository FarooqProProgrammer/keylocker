import { KeyEntry, IconColor, Tag } from './types'

export const KEYS: KeyEntry[] = [
  { id: 1,  name: 'GitHub',           username: 'mfarooq@dev.io',          tag: 'Work',     strength: 'strong', iconColor: 'gold',    icon: '⌥' },
  { id: 2,  name: 'Google Workspace', username: 'farooq@company.com',      tag: 'Work',     strength: 'strong', iconColor: 'silver',  icon: 'G', favorite: true },
  { id: 3,  name: 'Binance',          username: 'mfarooq_trade',           tag: 'Finance',  strength: 'medium', iconColor: 'copper',  icon: '₿' },
  { id: 4,  name: 'Vercel',           username: 'mfarooq@dev.io',          tag: 'Work',     strength: 'strong', iconColor: 'silver',  icon: '▲' },
  { id: 5,  name: 'LinkedIn',         username: 'muhammad-farooq-dev',     tag: 'Social',   strength: 'strong', iconColor: 'gold',    icon: 'in', favorite: true },
  { id: 6,  name: 'Meezan Bank',      username: 'mfarooq_account',         tag: 'Finance',  strength: 'weak',   iconColor: 'emerald', icon: '🏦' },
  { id: 7,  name: 'npm Registry',     username: 'mfarooq',                 tag: 'Work',     strength: 'medium', iconColor: 'copper',  icon: 'n' },
  { id: 8,  name: 'Apple ID',         username: 'mfarooq@icloud.com',      tag: 'Personal', strength: 'strong', iconColor: 'silver',  icon: '' },
  { id: 9,  name: 'Twitter / X',      username: '@mfarooq_dev',            tag: 'Social',   strength: 'medium', iconColor: 'silver',  icon: 'X' },
  { id: 10, name: 'Figma',            username: 'farooq@company.com',      tag: 'Work',     strength: 'strong', iconColor: 'copper',  icon: 'F', favorite: true },
  { id: 11, name: 'HBL Online',       username: 'mfarooq_hbl',             tag: 'Finance',  strength: 'weak',   iconColor: 'emerald', icon: 'H' },
  { id: 12, name: 'Notion',           username: 'mfarooq@dev.io',          tag: 'Personal', strength: 'strong', iconColor: 'gold',    icon: 'N' },
]

export const ICON_BG: Record<IconColor, string> = {
  gold:    'bg-amber-50   text-amber-600',
  silver:  'bg-slate-100  text-slate-500',
  copper:  'bg-orange-50  text-orange-600',
  emerald: 'bg-emerald-50 text-emerald-600',
}

export const TAG_STYLE: Record<Tag, string> = {
  Work:     'bg-blue-50   text-blue-600',
  Finance:  'bg-orange-50 text-orange-600',
  Social:   'bg-pink-50   text-pink-600',
  Personal: 'bg-emerald-50 text-emerald-600',
}
