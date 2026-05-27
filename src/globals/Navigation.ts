import type { GlobalConfig } from 'payload'

import { isAuthenticated } from '../access/isAuthenticated'

const navItemFields = [
  {
    name: 'label',
    type: 'text' as const,
    label: 'Etiqueta',
    required: true,
  },
  {
    name: 'page',
    type: 'relationship' as const,
    relationTo: 'pages' as const,
    label: 'Página',
  },
  {
    name: 'externalUrl',
    type: 'text' as const,
    label: 'URL externa',
    admin: {
      description: 'Opcional. Usar solo si no hay página interna.',
    },
  },
]

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navegación',
  admin: {
    group: 'Sitio',
    description: 'Enlaces del header, footer y controles globales de UI.',
  },
  access: {
    read: () => true,
    update: isAuthenticated,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Header',
          fields: [
            {
              name: 'headerNavItems',
              type: 'array',
              label: 'Enlaces del menú',
              fields: navItemFields,
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            {
              name: 'footerNavItems',
              type: 'array',
              label: 'Enlaces del footer',
              fields: navItemFields,
            },
            {
              name: 'legalLinks',
              type: 'array',
              label: 'Enlaces legales',
              fields: navItemFields,
            },
          ],
        },
        {
          label: 'UI global',
          fields: [
            {
              name: 'showWhatsappButton',
              type: 'checkbox',
              label: 'Mostrar botón de WhatsApp',
              defaultValue: true,
            },
            {
              name: 'showUpButton',
              type: 'checkbox',
              label: 'Mostrar botón scroll arriba',
              defaultValue: true,
            },
          ],
        },
      ],
    },
  ],
}
