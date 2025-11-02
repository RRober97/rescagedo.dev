// Projects example. Replace covers/gallery in /public/images with real screenshots.
export default [
  {
    slug: 'verifactu-gateway',
    title: 'API VeriFactu Gateway',
    short: 'Gateway fiscal para conectar aplicaciones propias con la AEAT.',
    year: '2024',
    stack: ['Node', 'Express', 'Docker', 'AWS'],
    cover: '/images/verifactu-cover.jpg',
    gallery: ['/images/verifactu-1.jpg'],
    links: [{ label: 'Documentación interna', url: null }],
    problem: 'Integrar múltiples aplicaciones con los requisitos VeriFactu de la AEAT.',
    solution: 'Microservicio escalable con autenticación, colas y trazabilidad completa.',
    impact: 'Cumplimiento fiscal automatizado y reducción de incidencias operativas.'
  },
  {
    slug: 'prestashop-dropshipping',
    title: 'Módulo Dropshipping para PrestaShop',
    short: 'Módulo nativo para sincronizar catálogos y pedidos de proveedores.',
    year: '2023',
    stack: ['PHP', 'PrestaShop', 'MySQL'],
    cover: '/images/prestashop-cover.jpg',
    gallery: ['/images/prestashop-1.jpg'],
    links: [{ label: 'Marketplace privado', url: null }],
    problem: 'Gestión manual de catálogo y pedidos dropshipping.',
    solution: 'Integración directa con APIs de proveedores, actualización de stock y automatización de pedidos.',
    impact: '↓80% tiempo de gestión y sincronización en tiempo real de inventario.'
  },
  {
    slug: 'gest-truck',
    title: 'Gest Truck',
    short: 'Aplicación web para control de flotas y logística.',
    year: '2022',
    stack: ['Vue.js', 'Directus', 'Docker', 'PostgreSQL'],
    cover: '/images/gesttruck-cover.jpg',
    gallery: ['/images/gesttruck-1.jpg'],
    links: [{ label: 'Demo privada', url: null }],
    problem: 'Seguimiento disperso de viajes, gastos y documentación.',
    solution: 'Panel centralizado con KPIs, carga documental y generación de informes.',
    impact: 'Mayor trazabilidad de operaciones y reporting inmediato para clientes.'
  },
  {
    slug: 'project-management-suite',
    title: 'Suite Gestión de Proyectos',
    short: 'Herramienta web para seguimiento de tareas, facturación e informes.',
    year: '2021',
    stack: ['Vue.js', 'Node.js', 'MySQL', 'Docker'],
    cover: '/images/pm-suite-cover.jpg',
    gallery: ['/images/pm-suite-1.jpg'],
    links: [{ label: 'Instancia corporativa', url: null }],
    problem: 'Falta de visibilidad sobre proyectos y control presupuestario.',
    solution: 'Workflows personalizados, tableros Kanban y facturación integrada.',
    impact: 'Toma de decisiones más rápida y facturación precisa por proyecto.'
  },
  {
    slug: 'easyscanpdf',
    title: 'EasyScanPDF',
    short: 'Aplicación móvil para escaneo y sincronización de documentos.',
    year: '2020',
    stack: ['Flutter', 'Android', 'iOS', 'Firebase'],
    cover: '/images/easyscan-cover.jpg',
    gallery: ['/images/easyscan-1.jpg'],
    links: [{ label: 'Stores', url: null }],
    problem: 'Procesos manuales para digitalizar documentación y compartirla.',
    solution: 'App multiplataforma con OCR, almacenamiento seguro y sincronización automática.',
    impact: 'Digitalización rápida y accesible para equipos en movilidad.'
  }
]
