import type { Block } from 'payload'

export const InstagramBlock: Block = {
  slug: 'instagram',
  interfaceName: 'InstagramBlock',
  labels: {
    singular: 'Instagram',
    plural: 'Instagram',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      admin: {
        description: 'Opcional. Ej. "Síguenos en @egidajuridica".',
      },
    },
  ],
}

export const ContactFormBlock: Block = {
  slug: 'contactForm',
  interfaceName: 'ContactFormBlock',
  labels: {
    singular: 'Formulario de contacto',
    plural: 'Formularios de contacto',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Encabezado',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'submitLabel',
      type: 'text',
      label: 'Texto del botón enviar',
      defaultValue: 'Enviar mensaje',
    },
    {
      name: 'fieldLabels',
      type: 'group',
      label: 'Etiquetas de campos',
      fields: [
        { name: 'firstName', type: 'text', label: 'Nombre', defaultValue: 'Nombre' },
        { name: 'lastName', type: 'text', label: 'Apellido', defaultValue: 'Apellido' },
        { name: 'email', type: 'text', label: 'Email', defaultValue: 'Email' },
        { name: 'phone', type: 'text', label: 'Teléfono', defaultValue: 'Teléfono' },
        { name: 'comments', type: 'text', label: 'Comentarios', defaultValue: 'Comentarios' },
      ],
    },
  ],
}

export const MapSectionBlock: Block = {
  slug: 'mapSection',
  interfaceName: 'MapSectionBlock',
  labels: {
    singular: 'Mapa',
    plural: 'Mapas',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      defaultValue: 'Encuéntranos en',
    },
    {
      name: 'embedUrl',
      type: 'text',
      label: 'URL de embed',
      admin: {
        description: 'Opcional. Si está vacío, se usa la URL de la configuración del sitio.',
      },
    },
  ],
}

export const LegalContentBlock: Block = {
  slug: 'legalContent',
  interfaceName: 'LegalContentBlock',
  labels: {
    singular: 'Contenido legal',
    plural: 'Contenido legal',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Encabezado del artículo',
    },
    {
      name: 'lastUpdated',
      type: 'date',
      label: 'Fecha de última actualización',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Introducción',
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Contenido',
      required: true,
    },
  ],
}
