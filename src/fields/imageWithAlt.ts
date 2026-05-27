import type { Field, GroupField } from 'payload'

export const imageWithAltFields: Field[] = [
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    label: 'Imagen',
    required: true,
  },
  {
    name: 'alt',
    type: 'text',
    label: 'Texto alternativo',
    admin: {
      description: 'Descripción de la imagen para accesibilidad.',
    },
  },
]

export const imageWithAltField = (overrides?: Partial<GroupField>): GroupField => ({
  name: 'imageWithAlt',
  type: 'group',
  label: 'Imagen',
  fields: imageWithAltFields,
  ...overrides,
})
