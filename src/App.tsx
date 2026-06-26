import { useState } from 'react'

// ─── Types ───────────────────────────────────────────────────────────────────

type Category = 'all' | 'favorites' | 'shared' | 'work' | 'finance' | 'social' | 'personal' | 'weak' | 'reused'
type Tag = 'Work' | 'Finance' | 'Social' | 'Personal'
type Strength = 'strong' | 'medium' | 'weak'
type IconColor = 'gold' | 'silver' | 'copper' | 'emerald'

interface KeyEntry {
  id: number
  name: string
  username: string
  tag: Tag
  strength: Strength
  iconColor: IconColor
  icon: string
  favorite?: boolean
}

// ─── Data ────────────────────────────────────────────────────────────────────

const KEYS: KeyEntry[] = [
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

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ICON_BG: Record<IconColor, string> = {
  gold:    'bg-amber-50   text-amber-600',
  silver:  'bg-slate-100  text-slate-500',
  copper:  'bg-orange-50  text-orange-600',
  emerald: 'bg-emerald-50 text-emerald-600',
}

const TAG_STYLE: Record<Tag, string> = {
  Work:     'bg-blue-50   text-blue-600',
  Finance:  'bg-orange-50 text-orange-600',
  Social:   'bg-pink-50   text-pink-600',
  Personal: 'bg-emerald-50 text-emerald-600',
}

function StrengthDots({ level }: { level: Strength }) {
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

function CopyButton({ onClick }: { onClick: () => void }) {
  const [copied, setCopied] = useState(false)
  function handle() {
    setCopied(true)
    onClick()
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button
      onClick={(e) => { e.stopPropagation(); handle() }}
      className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-3 right-3
                 w-6 h-6 rounded flex items-center justify-center text-xs
                 border border-slate-200 bg-white text-slate-400 hover:text-slate-700
                 hover:bg-slate-50 cursor-pointer"
      title="Copy password"
    >
      {copied ? '✓' : '⎘'}
    </button>
  )
}

// ─── Key Card ────────────────────────────────────────────────────────────────

function KeyCard({
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

// ─── Nav Item ────────────────────────────────────────────────────────────────

function NavItem({
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

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const filtered = KEYS.filter((k) => {
    const matchSearch = k.name.toLowerCase().includes(search.toLowerCase()) ||
                        k.username.toLowerCase().includes(search.toLowerCase())
    if (!matchSearch) return false
    if (activeCategory === 'all')      return true
    if (activeCategory === 'favorites') return !!k.favorite
    if (activeCategory === 'work')     return k.tag === 'Work'
    if (activeCategory === 'finance')  return k.tag === 'Finance'
    if (activeCategory === 'social')   return k.tag === 'Social'
    if (activeCategory === 'personal') return k.tag === 'Personal'
    if (activeCategory === 'weak')     return k.strength === 'weak'
    if (activeCategory === 'reused')   return k.strength === 'medium'
    return true
  })

  const counts = {
    all:      KEYS.length,
    favorites: KEYS.filter(k => k.favorite).length,
    work:     KEYS.filter(k => k.tag === 'Work').length,
    finance:  KEYS.filter(k => k.tag === 'Finance').length,
    social:   KEYS.filter(k => k.tag === 'Social').length,
    personal: KEYS.filter(k => k.tag === 'Personal').length,
    weak:     KEYS.filter(k => k.strength === 'weak').length,
    reused:   KEYS.filter(k => k.strength === 'medium').length,
  }

  const TITLE_MAP: Record<Category, string> = {
    all: 'All keys', favorites: 'Favorites', shared: 'Shared with me',
    work: 'Work', finance: 'Finance', social: 'Social', personal: 'Personal',
    weak: 'Weak passwords', reused: 'Reused passwords',
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-slate-100 select-none overflow-hidden">

      {/* ── Title bar ─────────────────────────────────────── */}
      <header className="flex items-center justify-between px-5 py-3 bg-[#0f0f1e] border-b border-white/5 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a2e] border border-amber-500/30 flex items-center justify-center text-amber-400 text-base">
            🔐
          </div>
          <div>
            <p className="text-[13px] font-semibold tracking-widest uppercase text-white/90">KeyLocker</p>
            <p className="text-[10px] text-white/30 tracking-wide">Credential Vault v1.0</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {['↻', '🔔', '⚙'].map((icon, i) => (
            <button key={i} className="w-7 h-7 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/10 transition-colors cursor-pointer text-sm">
              {icon}
            </button>
          ))}
        </div>
      </header>

      {/* ── Body ──────────────────────────────────────────── */}
      <div className="flex flex-1 min-h-0">

        {/* ── Sidebar ─────────────────────────────────────── */}
        <aside className="w-48 flex-shrink-0 flex flex-col bg-slate-50 border-r border-slate-200 py-4">

          <div className="px-3 mb-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-2 mb-1">Vault</p>
            <NavItem label="All keys"      icon="⊞" count={counts.all}      active={activeCategory === 'all'}      onClick={() => setActiveCategory('all')} />
            <NavItem label="Favorites"     icon="★" count={counts.favorites} active={activeCategory === 'favorites'} onClick={() => setActiveCategory('favorites')} />
            <NavItem label="Shared with me" icon="↗" active={activeCategory === 'shared'}    onClick={() => setActiveCategory('shared')} />
          </div>

          <div className="mx-3 my-3 border-t border-slate-200" />

          <div className="px-3 mb-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-2 mb-1">Categories</p>
            <NavItem label="Work"     icon="💼" count={counts.work}     active={activeCategory === 'work'}     onClick={() => setActiveCategory('work')} />
            <NavItem label="Finance"  icon="💳" count={counts.finance}  active={activeCategory === 'finance'}  onClick={() => setActiveCategory('finance')} />
            <NavItem label="Social"   icon="👥" count={counts.social}   active={activeCategory === 'social'}   onClick={() => setActiveCategory('social')} />
            <NavItem label="Personal" icon="👤" count={counts.personal} active={activeCategory === 'personal'} onClick={() => setActiveCategory('personal')} />
          </div>

          <div className="mx-3 my-3 border-t border-slate-200" />

          <div className="px-3 mb-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-2 mb-1">Security</p>
            <NavItem label="Weak passwords" icon="⚠" count={counts.weak}  active={activeCategory === 'weak'}  onClick={() => setActiveCategory('weak')}  danger />
            <NavItem label="Reused"          icon="⟳" count={counts.reused} active={activeCategory === 'reused'} onClick={() => setActiveCategory('reused')} danger />
          </div>

          {/* user row */}
          <div className="mt-auto px-3">
            <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg border border-slate-200 bg-white">
              <div className="w-7 h-7 rounded-full bg-[#1a1a2e] flex items-center justify-center text-[10px] font-bold text-amber-400 flex-shrink-0">
                MF
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-medium text-slate-800 truncate">Muhammad Farooq</p>
                <p className="text-[10px] text-slate-400">Vault owner</p>
              </div>
              <span className="text-slate-300 text-sm">🔒</span>
            </div>
          </div>
        </aside>

        {/* ── Main ────────────────────────────────────────── */}
        <main className="flex-1 flex flex-col min-w-0">

          {/* toolbar */}
          <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-slate-200 flex-shrink-0">
            <h1 className="text-[15px] font-semibold text-slate-800 tracking-tight flex-shrink-0">
              {TITLE_MAP[activeCategory]}
            </h1>

            {/* search */}
            <div className="relative flex-1 max-w-xs">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm pointer-events-none">⌕</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search credentials…"
                className="w-full pl-8 pr-3 py-1.5 text-[13px] bg-slate-50 border border-slate-200
                           rounded-lg outline-none placeholder-slate-400 text-slate-700
                           focus:border-blue-400 focus:bg-white transition-colors"
              />
            </div>

            <div className="flex gap-2 ml-auto">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] border border-slate-200
                                 bg-white text-slate-600 rounded-lg hover:bg-slate-50 hover:border-slate-300
                                 transition-colors cursor-pointer">
                ⧉ Filter
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] border border-slate-200
                                 bg-white text-slate-600 rounded-lg hover:bg-slate-50 hover:border-slate-300
                                 transition-colors cursor-pointer">
                ↕ Sort
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px]
                                 bg-[#1a1a2e] text-amber-400 rounded-lg hover:bg-[#24243e]
                                 transition-colors cursor-pointer border-0 font-medium">
                + New key
              </button>
            </div>
          </div>

          {/* grid */}
          <div className="flex-1 overflow-y-auto p-5">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-slate-400">
                <span className="text-4xl mb-3">🔍</span>
                <p className="text-[14px] font-medium">No keys found</p>
                <p className="text-[12px] mt-1">Try a different search or category</p>
              </div>
            ) : (
              <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                {filtered.map((entry) => (
                  <KeyCard
                    key={entry.id}
                    entry={entry}
                    selected={selectedId === entry.id}
                    onSelect={() => setSelectedId(entry.id === selectedId ? null : entry.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* status bar */}
          <footer className="flex items-center gap-4 px-5 py-2 bg-slate-50 border-t border-slate-200 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Vault unlocked
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <span>🔒</span> AES-256 encrypted
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <span>↻</span> Synced 2 min ago
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 ml-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Auto-lock in 8 min
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
