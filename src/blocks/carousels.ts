import type { Block } from 'payload'

export const ServicesCarouselBlock: Block = {
  slug: 'servicesCarousel',
  interfaceName: 'ServicesCarouselBlock',
  labels: {
    singular: 'Carrusel de servicios',
    plural: 'Carruseles de servicios',
  },
  fields: [
    {
      name: 'introTitle',
      type: 'text',
      label: 'Título introductorio',
      defaultValue: 'Especialistas en áreas clave del derecho',
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Servicios',
      admin: {
        description: 'Orden de selección determina el orden en el carrusel.',
      },
    },
  ],
}

export const TeamCarouselBlock: Block = {
  slug: 'teamCarousel',
  interfaceName: 'TeamCarouselBlock',
  labels: {
    singular: 'Carrusel de equipo',
    plural: 'Carruseles de equipo',
  },
  fields: [
    {
      name: 'introTitle',
      type: 'text',
      label: 'Título',
      defaultValue: 'Un equipo jurídico a tu lado',
    },
    {
      name: 'introText',
      type: 'textarea',
      label: 'Texto introductorio',
    },
    {
      name: 'members',
      type: 'relationship',
      relationTo: 'team-members',
      hasMany: true,
      label: 'Miembros',
    },
  ],
}

export const SuccessStoriesCarouselBlock: Block = {
  slug: 'successStoriesCarousel',
  interfaceName: 'SuccessStoriesCarouselBlock',
  labels: {
    singular: 'Historias de éxito',
    plural: 'Historias de éxito',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      defaultValue: 'Historias de éxito',
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      label: 'Testimonios',
      admin: {
        description: 'Si está vacío, se muestran los testimonios marcados como destacados.',
      },
    },
  ],
}

export const TestimonialsListBlock: Block = {
  slug: 'testimonialsList',
  interfaceName: 'TestimonialsListBlock',
  labels: {
    singular: 'Lista de testimonios',
    plural: 'Listas de testimonios',
  },
  fields: [
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      label: 'Testimonios',
      admin: {
        description: 'Si está vacío, se muestran todos los testimonios.',
      },
    },
  ],
}
