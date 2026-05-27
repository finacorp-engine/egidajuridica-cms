import type { Block } from 'payload'

import { imageWithAltFields } from '../fields/imageWithAlt'

export const SpecialtiesBlock: Block = {
  slug: 'specialties',
  interfaceName: 'SpecialtiesBlock',
  labels: {
    singular: 'Especialidades',
    plural: 'Especialidades',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
    },
    {
      name: 'imageWithAlt',
      type: 'group',
      label: 'Imagen',
      fields: imageWithAltFields,
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Servicios',
      admin: {
        description: 'Selecciona los servicios a mostrar en el grid.',
      },
    },
  ],
}
