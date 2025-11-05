export default defineAppConfig({
  global: {
    picture: {
      dark: '/hero/roberto.png',
      light: '/hero/roberto.png',
      alt: 'Mi foto de perfil'
    },
    meetingLink: 'https://meet.google.com/landing',
    email: 'robertoea97@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Roberto Escagedo Alonsotegui • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/RRober97',
      'target': '_blank',
      'aria-label': 'Mi perfil de GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/roberto-escagedo-alonsotegui/',
      'target': '_blank',
      'aria-label': 'Mi perfil de Linkedin'
    }]
  }
})
