export type Category = 'all' | 'favorites' | 'shared' | 'work' | 'finance' | 'social' | 'personal' | 'weak' | 'reused'
export type Tag = 'Work' | 'Finance' | 'Social' | 'Personal'
export type Strength = 'strong' | 'medium' | 'weak'
export type IconColor = 'gold' | 'silver' | 'copper' | 'emerald'

export interface KeyEntry {
  id: number
  name: string
  username: string
  tag: Tag
  strength: Strength
  iconColor: IconColor
  icon: string
  favorite?: boolean
}
