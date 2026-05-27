import type { Block } from 'payload'

import { imageWithAltFields } from '../fields/imageWithAlt'

export const HeroHomeBlock: Block = {
  slug: 'heroHome',
  interfaceName: 'HeroHomeBlock',
  labels: {
    singular: 'Hero — Inicio',
    plural: 'Heroes — Inicio',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo',
    },
    {
      name: 'imageWithAlt',
      type: 'group',
      label: 'Imagen de fondo',
      fields: imageWithAltFields,
    },
    {
      name: 'primaryCta',
      type: 'group',
      label: 'CTA principal',
      fields: [
        { name: 'text', type: 'text', label: 'Texto', required: true },
        { name: 'href', type: 'text', label: 'URL' },
        { name: 'page', type: 'relationship', relationTo: 'pages', label: 'Página' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      label: 'CTA secundario',
      fields: [
        { name: 'text', type: 'text', label: 'Texto', required: true },
        { name: 'href', type: 'text', label: 'URL' },
        { name: 'page', type: 'relationship', relationTo: 'pages', label: 'Página' },
      ],
    },
    {
      name: 'showScrollIndicator',
      type: 'checkbox',
      label: 'Mostrar indicador de scroll',
      defaultValue: true,
    },
  ],
}
