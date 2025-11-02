import { ref, watch, onMounted } from 'vue'

export function useTheme() {
  const preferred = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = ref('system')

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved) theme.value = saved
    apply()
  })

  watch(theme, (v) => {
    localStorage.setItem('theme', v)
    apply()
  })

  function apply() {
    const root = document.documentElement
    const t = theme.value === 'system' ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme.value
    if (t === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }

  return { theme, set: (v)=> theme.value = v }
}
