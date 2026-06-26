import { KeyEntry } from '../types'
import { ICON_BG, TAG_STYLE } from '../data'
import { StrengthDots } from './StrengthDots'
import { CopyButton } from './CopyButton'

export function KeyCard({
  entry, selected, onSelect
}: {
  entry: KeyEntry
  selected: boolean
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      className={`relative group rounded-xl border p-4 cursor-pointer transition-all
        ${ selected
          ? 'border-blue-400 bg-blue-50'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
        }`}
    >
      {/* top row */}
      <div className="flex items-start justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold ${ICON_BG[entry.iconColor]}`}>
          {entry.icon}
        </div>
        <button
          onClick={(e) => e.stopPropagation()}
          className="w-6 h-6 rounded flex items-center justify-center text-slate-300
                     hover:text-slate-600 hover:bg-slate-100 transition-colors text-base leading-none cursor-pointer border-0 bg-transparent"
        >
          ···
        </button>
      </div>

      {/* name + username */}
      <p className="text-[13px] font-medium text-slate-800 truncate">{entry.name}</p>
      <p className="text-[11px] text-slate-400 truncate mb-3">{entry.username}</p>

      {/* footer */}
      <div className="flex items-center justify-between">
        <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${TAG_STYLE[entry.tag]}`}>
          {entry.tag}
        </span>
        <StrengthDots level={entry.strength} />
      </div>

      <CopyButton onClick={() => {}} />

      {entry.favorite && (
        <span className="absolute top-2.5 right-8 text-amber-400 text-xs">★</span>
      )}
    </div>
  )
}
