import { useState } from 'react'

export function CopyButton({ onClick }: { onClick: () => void }) {
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
