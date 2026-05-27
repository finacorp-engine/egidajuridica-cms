import type { Block } from 'payload'

export const PhraseBlock: Block = {
  slug: 'phrase',
  interfaceName: 'PhraseBlock',
  labels: {
    singular: 'Frase destacada',
    plural: 'Frases destacadas',
  },
  fields: [
    {
      name: 'backgroundText',
      type: 'text',
      label: 'Texto decorativo de fondo',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      required: true,
    },
  ],
}
