import { useSyncExternalStore } from 'react'

/**
 * Single-source-of-truth theme store. Defaults to dark, persists to
 * localStorage, and is kept in sync with the no-flash inline script in
 * index.html. Multiple components can call useTheme() safely.
 */
const KEY = 'fist-theme'

function getInitial() {
  if (typeof window === 'undefined') return 'dark'
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* ignore */
  }
  return 'dark'
}

let theme = getInitial()
const listeners = new Set()

function applyDOM(next) {
  const root = document.documentElement
  const dark = next === 'dark'
  root.classList.toggle('dark', dark)
  root.style.colorScheme = dark ? 'dark' : 'light'
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* ignore */
  }
}

function setTheme(next) {
  if (next === theme) return
  theme = next
  applyDOM(next)
  listeners.forEach((cb) => cb())
}

function subscribe(cb) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

export function useTheme() {
  const current = useSyncExternalStore(subscribe, () => theme, () => theme)
  return {
    theme: current,
    isDark: current === 'dark',
    toggle: () => setTheme(current === 'dark' ? 'light' : 'dark'),
    setTheme,
  }
}

export default useTheme
