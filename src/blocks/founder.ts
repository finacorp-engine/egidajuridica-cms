import type { Block } from 'payload'

import { ctaButtonField } from '../fields/ctaButton'

export const FounderBlock: Block = {
  slug: 'founder',
  interfaceName: 'FounderBlock',
  labels: {
    singular: 'Sección Fundador',
    plural: 'Secciones Fundador',
  },
  fields: [
    {
      name: 'member',
      type: 'relationship',
      relationTo: 'team-members',
      label: 'Fundador',
      admin: {
        description:
          'Miembro del equipo del que se toman el nombre, el cargo y la foto. Si está vacío, se usa el miembro cuyo cargo contiene "Fundador".',
      },
    },
    {
      name: 'backgroundText',
      type: 'text',
      label: 'Texto decorativo de fondo',
      defaultValue: 'Fundador',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo',
      defaultValue: 'Nuestro fundador',
    },
    {
      name: 'nameOverride',
      type: 'text',
      label: 'Nombre (opcional)',
      admin: {
        description: 'Déjalo vacío para usar el nombre del miembro del equipo.',
      },
    },
    {
      name: 'roleOverride',
      type: 'text',
      label: 'Cargo (opcional)',
      admin: {
        description: 'Déjalo vacío para usar el cargo del miembro del equipo.',
      },
    },
    {
      name: 'photoOverride',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto (opcional)',
      admin: {
        description: 'Déjala vacía para usar la foto del miembro del equipo. Se recomienda una foto vertical.',
      },
    },
    {
      name: 'photoLabel',
      type: 'text',
      label: 'Etiqueta sobre la foto',
      defaultValue: 'Fundador',
    },
    {
      name: 'story',
      type: 'textarea',
      label: 'Historia',
      admin: {
        description: 'Separa los párrafos con una línea en blanco.',
        rows: 10,
      },
      defaultValue:
        'Rafael Martín Aguirre Gonzalo fundó Égida Jurídica con una convicción clara: la defensa legal debe ser cercana, transparente y estratégica. Con más de dos décadas de ejercicio profesional en derecho laboral y empresarial, decidió construir una firma donde cada cliente sea escuchado y cada caso se trabaje con rigor.\n\nHoy lidera un equipo de abogados especialistas que comparte esa misma visión: proteger los intereses de personas y empresas con soluciones jurídicas sólidas, explicadas sin tecnicismos y pensadas para cada situación.',
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Frase destacada',
      defaultValue: 'Defender a un cliente es asumir su causa como propia.',
    },
    {
      name: 'highlights',
      type: 'array',
      label: 'Datos destacados',
      maxRows: 4,
      labels: {
        singular: 'Dato',
        plural: 'Datos',
      },
      defaultValue: [
        { value: '+20', label: 'años de trayectoria' },
        { value: 'Laboral', label: 'y empresarial' },
      ],
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Valor (ej. +20)',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Descripción',
        },
      ],
    },
    ctaButtonField({
      defaultValue: { text: 'Conoce la firma', href: '/acerca' },
    }),
  ],
}
