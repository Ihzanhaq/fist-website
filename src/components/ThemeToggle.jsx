import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle({ className = '', overMedia = false }) {
  const { isDark, toggle } = useTheme()
  const tone = overMedia
    ? 'border-white/30 text-white hover:border-white/50 hover:text-white'
    : 'border-line text-ink hover:border-accent/60 hover:text-accent'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={`grid h-9 w-9 place-items-center rounded-full border transition-colors duration-300 ${tone} ${className}`}
    >
      <span className="relative h-4 w-4">
        <Sun
          className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
          }`}
        />
      </span>
    </button>
  )
}
