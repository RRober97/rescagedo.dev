import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// === Helpers reutilizables ===
const createBaseSchema = () => z.object({
  title: z.string(),
  description: z.string()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

// === Configuración principal ===
export default defineContentConfig({
  collections: {
    // Página principal (index)
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema())
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(z.object({
            date: z.date(),
            position: z.string(),
            company: z.object({
              name: z.string(),
              url: z.string(),
              logo: z.string().editor({ input: 'icon' }),
              color: z.string()
            })
          }))
        }),
        faq: createBaseSchema().extend({
          categories: z.array(z.object({
            title: z.string().nonempty(),
            questions: z.array(z.object({
              label: z.string().nonempty(),
              content: z.string().nonempty()
            }))
          }))
        })
      })
    }),

    // Proyectos
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: 'media' }),
        url: z.string().nonempty(),
        tags: z.array(z.string()),
        date: z.date()
      })
    }),

    // Certificaciones
    certifications: defineCollection({
      type: 'data',
      source: 'certifications/*.yml',
      schema: z.object({
        title: z.string(),
        issuer: z.string(),
        date: z.date(),
        description: z.string().optional(),
        url: z.string().optional(),
        image: z.string().optional(),
        credentialId: z.string().optional(),
        skills: z.array(z.string()).optional()
      })
    }),

    // Páginas internas
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'projects.yml' },
        { include: 'about.yml' },
        { include: 'certifications.yml' } // hero/configuración de la página /certifications
      ],
      schema: z.object({
        links: z.array(createButtonSchema())
      })
    }),

    // Página "Sobre mí"
    about: defineCollection({
      type: 'page',
      source: 'about.yml',
      schema: z.object({
        content: z.object({}).optional(),
        images: z.array(createImageSchema())
      })
    })
  }
})
