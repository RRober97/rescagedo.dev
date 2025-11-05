import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Inicio',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Proyectos',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Certificaciones',
  icon: 'i-lucide-folder',
  to: '/certifications'
}, {
  label: 'Acerca de mí',
  icon: 'i-lucide-user',
  to: '/about'
}]
