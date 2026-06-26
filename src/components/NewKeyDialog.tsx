import { useState } from 'react'
import { Tag, KeyEntry } from '../types'

export function NewKeyDialog({
  isOpen,
  onClose,
  onSave
}: {
  isOpen: boolean
  onClose: () => void
  onSave: (entry: Omit<KeyEntry, 'id'>) => void
}) {
  if (!isOpen) return null

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [tag, setTag] = useState<Tag>('Personal')
  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSave({
      name,
      username,
      tag,
      strength: password.length > 10 ? 'strong' : password.length > 6 ? 'medium' : 'weak',
      iconColor: 'silver',
      icon: name.charAt(0).toUpperCase() || 'K',
      favorite: false
    })
    
    // Reset form
    setName('')
    setUsername('')
    setPassword('')
    setTag('Personal')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden border border-slate-200/60 animate-in fade-in zoom-in-95 duration-200">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-slate-800">Add New Credential</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors w-7 h-7 flex items-center justify-center rounded-md hover:bg-slate-100 border-0 bg-transparent cursor-pointer">
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Service Name</label>
            <input required value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 text-[13px] border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50/50" placeholder="e.g. GitHub" />
          </div>
          
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Username / Email</label>
            <input required value={username} onChange={e => setUsername(e.target.value)} className="w-full px-3 py-2 text-[13px] border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50/50" placeholder="e.g. user@example.com" />
          </div>
          
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Password</label>
            <input required type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 text-[13px] border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50/50" placeholder="••••••••••••" />
          </div>
          
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Category</label>
            <select value={tag} onChange={e => setTag(e.target.value as Tag)} className="w-full px-3 py-2 text-[13px] border border-slate-200 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-slate-50/50 cursor-pointer">
              <option value="Work">Work</option>
              <option value="Finance">Finance</option>
              <option value="Social">Social</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-[13px] font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 rounded-lg transition-colors cursor-pointer border-0">
              Save Key
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
