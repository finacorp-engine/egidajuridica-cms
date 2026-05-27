export type ServiceSeed = {
  slug: string
  title: string
  subtitle: string
  description: string
  shortDescription: string
  imageKey: string
  imageUrl: string
  imageAlt: string
  cta: { text: string; href: string }
  order: number
}

export const servicesData: ServiceSeed[] = [
  {
    slug: 'derecho-laboral',
    title: 'Asesoramiento en relaciones laborales',
    subtitle: 'Derecho laboral',
    description:
      'Asesoramos y representamos tanto a trabajadores como a empresas en conflictos laborales, despidos, reclamaciones, contratos y protección de derechos laborales.',
    shortDescription:
      'Asesoramos y representamos en conflictos laborales, despidos, contratos y defensa de derechos tanto de trabajadores como de empresas.',
    imageKey: 'service-laboral',
    imageUrl: 'https://images.pexels.com/photos/7222955/pexels-photo-7222955.jpeg',
    imageAlt: 'Asesoramiento en derecho laboral',
    cta: { text: 'VER SERVICIO', href: 'https://wa.me/51964943865' },
    order: 1,
  },
  {
    slug: 'derecho-empresarial',
    title: 'Soluciones para empresas y profesionales',
    subtitle: 'Derecho empresarial',
    description:
      'Acompañamos a empresas en la toma de decisiones legales, prevención de riesgos jurídicos y resolución de conflictos mercantiles.',
    shortDescription:
      'Acompañamos a empresas y profesionales en la toma de decisiones jurídicas, la prevención de riesgos legales y la resolución de conflictos mercantiles.',
    imageKey: 'service-empresarial',
    imageUrl: 'https://images.pexels.com/photos/7876290/pexels-photo-7876290.jpeg',
    imageAlt: 'Asesoramiento en derecho empresarial',
    cta: { text: 'VER SERVICIO', href: 'https://wa.me/51964943865' },
    order: 2,
  },
  {
    slug: 'derecho-civil',
    title: 'Asesoramiento legal en asuntos civiles',
    subtitle: 'Derecho civil',
    description:
      'Ofrecemos apoyo jurídico en contratos, reclamaciones, responsabilidad civil y otras cuestiones de ámbito personal y patrimonial.',
    shortDescription:
      'Ofrecemos asesoramiento en contratos, reclamaciones, responsabilidad civil y otras cuestiones jurídicas de ámbito personal y patrimonial.',
    imageKey: 'service-civil',
    imageUrl: 'https://images.pexels.com/photos/8112231/pexels-photo-8112231.jpeg',
    imageAlt: 'Asesoramiento en derecho civil',
    cta: { text: 'VER SERVICIO', href: 'https://wa.me/51964943865' },
    order: 3,
  },
  {
    slug: 'otros-servicios',
    title: 'Asesoramiento jurídico integral especializado',
    subtitle: 'Otros servicios',
    description:
      'Además de nuestras áreas principales, ofrecemos apoyo legal en otras materias jurídicas según las necesidades específicas de cada cliente.',
    shortDescription:
      'Apoyo legal en otras materias jurídicas según las necesidades específicas de cada cliente.',
    imageKey: 'service-otros',
    imageUrl: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg',
    imageAlt: 'Asesoramiento jurídico integral',
    cta: { text: 'CONSULTAR', href: 'https://wa.me/51964943865' },
    order: 4,
  },
]
