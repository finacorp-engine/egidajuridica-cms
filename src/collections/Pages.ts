import { slugField } from 'payload'
import type { CollectionConfig } from 'payload'

import { isAuthenticated } from '../access/isAuthenticated'
import { publishedOnly } from '../access/publishedOnly'
import { pageBlocks } from '../blocks'
import { seoTab } from '../fields/seo'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Página',
    plural: 'Páginas',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Páginas',
    defaultColumns: ['title', 'slug', 'pageType', '_status', 'updatedAt'],
    description: 'Páginas del sitio con secciones reordenables.',
    listSearchableFields: ['title', 'slug'],
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  access: {
    read: publishedOnly,
    create: isAuthenticated,
    update: isAuthenticated,
    delete: isAuthenticated,
  },
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
      name: 'pageType',
      type: 'select',
      label: 'Tipo de página',
      required: true,
      defaultValue: 'standard',
      options: [
        { label: 'Inicio', value: 'home' },
        { label: 'Estándar', value: 'standard' },
        { label: 'Contacto', value: 'contact' },
        { label: 'Legal', value: 'legal' },
        { label: '404', value: 'notFound' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Ayuda a organizar las secciones disponibles.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenido',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              label: 'Secciones',
              blocks: pageBlocks,
              admin: {
                initCollapsed: false,
                description: 'Arrastra para reordenar. Agrega o quita secciones según necesites.',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [seoTab],
        },
      ],
    },
  ],
}
