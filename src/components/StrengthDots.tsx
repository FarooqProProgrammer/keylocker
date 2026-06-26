import { Strength } from '../types'

export function StrengthDots({ level }: { level: Strength }) {
  const dots = [
    level === 'strong' ? 'bg-emerald-500' : level === 'medium' ? 'bg-amber-400' : 'bg-red-400',
    level === 'strong' ? 'bg-emerald-500' : level === 'medium' ? 'bg-amber-400' : 'bg-slate-200',
    level === 'strong' ? 'bg-emerald-500' : 'bg-slate-200',
  ]
  return (
    <div className="flex items-center gap-1">
      {dots.map((cls, i) => (
        <span key={i} className={`w-1.5 h-1.5 rounded-full ${cls}`} />
      ))}
    </div>
  )
}
