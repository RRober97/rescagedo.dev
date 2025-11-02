// Projects example. Replace covers/gallery in /public/images with real screenshots.
export default [
  {
    slug: 'gestor-transportista',
    title: 'GestorTransportista (SaaS)',
    short: 'SaaS para transportistas: viajes, facturas, gastos, KPI.',
    year: '2024–2025',
    stack: ['Vue 3', 'Directus', 'Node', 'MySQL', 'Docker'],
    cover: '/images/gt-cover.jpg',
    gallery: ['/images/gt-1.jpg', '/images/gt-2.jpg'],
    links: [
      { label: 'Landing', url: 'https://gestortransportista.es' },
      { label: 'Repo privado', url: null }
    ],
    problem: 'Gestión ineficiente y manual de operaciones y facturación.',
    solution: 'ERP modular con flujos claros, PDF generados y Verifactu integrado.',
    impact: '↓30% tiempo de facturación — ↑visibilidad KPIs en tiempo real.'
  },
  {
    slug: 'verifactu-gateway',
    title: 'Verifactu Gateway',
    short: 'Microservicio Node para Binovo Veri*factu.',
    year: '2025',
    stack: ['Node', 'Express', 'Docker', 'Nginx'],
    cover: '/images/vf-cover.jpg',
    gallery: ['/images/vf-1.jpg'],
    links: [{ label: 'Doc breve', url: '#' }],
    problem: 'Cumplimiento fiscal con encadenado y polling de estados.',
    solution: 'Gateway idempotente, colas, QR y XML embebidos.',
    impact: 'Trazabilidad y cumplimiento automático.'
  },
  {
    slug: 'project-management-pro',
    title: 'ProjectMgmt Pro',
    short: 'Gestión de proyectos con enfoque en PM y facturación.',
    year: '2023',
    stack: ['Vue', 'Node', 'MySQL'],
    cover: '/images/pm-cover.jpg',
    gallery: ['/images/pm-1.jpg'],
    links: [{ label: 'Demo', url: '#' }],
    problem: 'Visibilidad limitada entre equipos y facturas.',
    solution: 'Tableros, facturación conectada y permisos finos.',
    impact: 'Mejora en SLOs y facturación puntual.'
  },
  {
    slug: 'assistant-ai',
    title: 'Assistant-AI',
    short: 'Asistente interno para automatizar respuestas y tareas.',
    year: '2024',
    stack: ['Node', 'AI', 'Docker'],
    cover: '/images/ai-cover.jpg',
    gallery: ['/images/ai-1.jpg'],
    links: [{ label: 'Article', url: '#' }],
    problem: 'Soporte manual y repetitivo.',
    solution: 'Automatización con reglas y ML para respuestas iniciales.',
    impact: 'Reducción de tiempo en soporte y mejor triage.'
  },
  {
    slug: 'integration-tool',
    title: 'Integration Toolbox',
    short: 'Conectores y ETL ligeros para sistemas legados.',
    year: '2022',
    stack: ['Node', 'Redis', 'MySQL'],
    cover: '/images/integration-cover.jpg',
    gallery: ['/images/integration-1.jpg'],
    links: [{ label: 'Repo', url: null }],
    problem: 'Transformaciones y sincronizaciones ad-hoc.',
    solution: 'Pipelines reutilizables y monitorización.',
    impact: 'Menos errores y sincronizaciones más fiables.'
  },
  {
    slug: 'dashboard-kit',
    title: 'Dashboard Kit',
    short: 'Kit de componentes UI para dashboards internos.',
    year: '2021',
    stack: ['Vue', 'Tailwind'],
    cover: '/images/dash-cover.jpg',
    gallery: ['/images/dash-1.jpg'],
    links: [{ label: 'Docs', url: '#' }],
    problem: 'UI inconsistente entre productos.',
    solution: 'Componentes reutilizables y tokens de diseño.',
    impact: 'Velocidad de entrega y consistencia visual.'
  }
]
