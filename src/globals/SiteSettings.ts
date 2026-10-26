import type { GlobalConfig } from 'payload'

import { isAuthenticated } from '../access/isAuthenticated'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Configuración del sitio',
  admin: {
    group: 'Sitio',
    description: 'Datos globales del sitio: identidad, contacto, redes y SEO.',
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
          label: 'Identidad',
          fields: [
            { name: 'name', type: 'text', label: 'Nombre', required: true },
            { name: 'legalName', type: 'text', label: 'Razón social' },
            { name: 'tagline', type: 'text', label: 'Eslogan' },
            { name: 'description', type: 'textarea', label: 'Descripción' },
            { name: 'website', type: 'text', label: 'Sitio web' },
            { name: 'foundingYear', type: 'number', label: 'Año de fundación' },
            { name: 'yearsOfExperience', type: 'text', label: 'Años de experiencia (texto)' },
          ],
        },
        {
          label: 'Contacto',
          fields: [
            { name: 'email', type: 'email', label: 'Email' },
            { name: 'phone', type: 'text', label: 'Teléfono' },
            { name: 'address', type: 'text', label: 'Dirección' },
            { name: 'openingHours', type: 'text', label: 'Horario (Schema.org)' },
            { name: 'openingHoursDisplay', type: 'text', label: 'Horario (visible)' },
            { name: 'googleMapsEmbedUrl', type: 'textarea', label: 'URL embed Google Maps' },
          ],
        },
        {
          label: 'Redes sociales',
          fields: [
            { name: 'whatsapp', type: 'text', label: 'WhatsApp' },
            { name: 'facebook', type: 'text', label: 'Facebook' },
            { name: 'linkedin', type: 'text', label: 'LinkedIn' },
            { name: 'instagram', type: 'text', label: 'Instagram' },
            { name: 'tiktok', type: 'text', label: 'TikTok' },
            { name: 'youtube', type: 'text', label: 'YouTube' },
            { name: 'linktree', type: 'text', label: 'Linktree' },
            { name: 'googleReviews', type: 'text', label: 'Google Reviews' },
          ],
        },
        {
          label: 'SEO y marca',
          fields: [
            { name: 'defaultKeywords', type: 'textarea', label: 'Palabras clave por defecto' },
            { name: 'comparisonKeywords', type: 'textarea', label: 'Palabras clave comparativas' },
            { name: 'priceRange', type: 'text', label: 'Rango de precio (Schema.org)' },
            {
              name: 'values',
              type: 'array',
              label: 'Valores de marca',
              fields: [{ name: 'value', type: 'text', required: true }],
            },
            {
              name: 'methodology',
              type: 'array',
              label: 'Metodología de trabajo',
              fields: [{ name: 'step', type: 'text', required: true }],
            },
          ],
        },
      ],
    },
  ],
}
