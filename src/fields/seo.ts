import type { Field } from 'payload'

export const seoFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    label: 'Título SEO',
    required: true,
  },
  {
    name: 'description',
    type: 'textarea',
    label: 'Descripción SEO',
    required: true,
  },
  {
    name: 'keywords',
    type: 'textarea',
    label: 'Palabras clave',
  },
  {
    name: 'canonical',
    type: 'text',
    label: 'URL canónica',
  },
  {
    name: 'robots',
    type: 'select',
    label: 'Robots',
    defaultValue: 'index, follow',
    options: [
      { label: 'Index, follow', value: 'index, follow' },
      { label: 'No index, follow', value: 'noindex, follow' },
      { label: 'No index, no follow', value: 'noindex, nofollow' },
    ],
  },
  {
    name: 'type',
    type: 'select',
    label: 'Tipo Open Graph',
    defaultValue: 'website',
    options: [
      { label: 'Website', value: 'website' },
      { label: 'Article', value: 'article' },
    ],
  },
]

export const seoTab: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  fields: seoFields,
}
