import type { Field, GroupField } from 'payload'

export const ctaButtonFields: Field[] = [
  {
    name: 'text',
    type: 'text',
    label: 'Texto del botón',
  },
  {
    name: 'href',
    type: 'text',
    label: 'URL',
    admin: {
      description: 'URL externa o ruta relativa (ej. /contacto)',
    },
  },
  {
    name: 'page',
    type: 'relationship',
    relationTo: 'pages',
    label: 'Página interna',
    admin: {
      description: 'Opcional. Si se define, tiene prioridad sobre la URL.',
    },
  },
]

export const ctaButtonField = (overrides?: Partial<GroupField>): GroupField => ({
  name: 'cta',
  type: 'group',
  label: 'Botón / CTA',
  fields: ctaButtonFields,
  ...overrides,
})
