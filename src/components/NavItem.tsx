export function NavItem({
  label, icon, count, active, danger, onClick
}: {
  label: string
  icon: string
  count?: number
  active: boolean
  danger?: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[13px] transition-colors text-left cursor-pointer border-0
        ${ active
          ? 'bg-blue-50 text-blue-700'
          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800 bg-transparent'
        }`}
    >
      <span className="w-4 text-center text-sm">{icon}</span>
      <span className="flex-1 truncate">{label}</span>
      {count !== undefined && (
        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[18px] text-center
          ${ danger ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500' }`}>
          {count}
        </span>
      )}
    </button>
  )
}
