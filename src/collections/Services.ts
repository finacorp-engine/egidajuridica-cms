import { slugField } from 'payload'
import type { CollectionConfig } from 'payload'

import { isAuthenticated } from '../access/isAuthenticated'
import { ctaButtonField } from '../fields/ctaButton'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Servicio',
    plural: 'Servicios',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Contenido reutilizable',
    defaultColumns: ['title', 'order', 'updatedAt'],
    description: 'Servicios y especialidades jurídicas usados en carruseles y grids.',
  },
  access: {
    read: () => true,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
    },
    slugField({
      useAsSlug: 'title',
    }),
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo',
      admin: {
        description: 'Texto corto para el carrusel (ej. "Derecho laboral").',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Descripción corta',
      admin: {
        description: 'Para grids de especialidades.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen',
    },
    ctaButtonField(),
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
