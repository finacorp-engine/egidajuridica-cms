import type { Block } from 'payload'

import { imageWithAltFields } from '../fields/imageWithAlt'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero — Página',
    plural: 'Heroes — Página',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'imageWithAlt',
      type: 'group',
      label: 'Imagen de fondo',
      fields: imageWithAltFields,
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones',
      fields: [
        { name: 'text', type: 'text', label: 'Texto', required: true },
        { name: 'href', type: 'text', label: 'URL' },
        { name: 'page', type: 'relationship', relationTo: 'pages', label: 'Página' },
      ],
    },
    {
      name: 'className',
      type: 'text',
      label: 'Clases CSS adicionales',
      admin: {
        description: 'Ej. h-screen para la página 404.',
      },
    },
  ],
}
