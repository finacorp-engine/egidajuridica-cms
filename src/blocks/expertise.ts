import type { Block } from 'payload'

import { ctaButtonField } from '../fields/ctaButton'
import { imageWithAltFields } from '../fields/imageWithAlt'

export const ExpertiseBlock: Block = {
  slug: 'expertise',
  interfaceName: 'ExpertiseBlock',
  labels: {
    singular: 'Experiencia',
    plural: 'Experiencia',
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
      name: 'bullets',
      type: 'array',
      label: 'Puntos destacados',
      fields: [
        { name: 'label', type: 'text', label: 'Etiqueta', required: true },
        { name: 'text', type: 'text', label: 'Texto', required: true },
      ],
    },
    {
      name: 'imageWithAlt',
      type: 'group',
      label: 'Imagen',
      fields: imageWithAltFields,
    },
    ctaButtonField(),
  ],
}
