import type { CollectionConfig } from 'payload'

import { isAuthenticated } from '../access/isAuthenticated'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonio',
    plural: 'Testimonios',
  },
  admin: {
    useAsTitle: 'author',
    group: 'Contenido reutilizable',
    defaultColumns: ['author', 'featured', 'order', 'updatedAt'],
    description: 'Testimonios de clientes para carrusel y página de testimonios.',
  },
  access: {
    read: () => true,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      label: 'Cita',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      label: 'Autor',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Valoración',
      min: 1,
      max: 5,
      defaultValue: 5,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Destacado en carrusel',
      defaultValue: false,
      admin: {
        description: 'Si está activo, aparece en "Historias de éxito".',
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
