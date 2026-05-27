import type { Block } from 'payload'

import { imageWithAltFields } from '../fields/imageWithAlt'

export const AboutBlock: Block = {
  slug: 'about',
  interfaceName: 'AboutBlock',
  labels: {
    singular: 'Sección Acerca',
    plural: 'Secciones Acerca',
  },
  fields: [
    {
      name: 'backgroundText',
      type: 'text',
      label: 'Texto decorativo de fondo',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo',
    },
    {
      name: 'title',
      type: 'richText',
      label: 'Título',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'linkText',
      type: 'text',
      label: 'Texto del enlace',
    },
    {
      name: 'linkHref',
      type: 'text',
      label: 'URL del enlace',
    },
    {
      name: 'linkPage',
      type: 'relationship',
      relationTo: 'pages',
      label: 'Página del enlace',
    },
    {
      name: 'imageWithAlt',
      type: 'group',
      label: 'Imagen',
      fields: imageWithAltFields,
    },
    {
      name: 'reverseLayout',
      type: 'checkbox',
      label: 'Invertir layout (imagen a la derecha)',
      defaultValue: false,
    },
  ],
}
