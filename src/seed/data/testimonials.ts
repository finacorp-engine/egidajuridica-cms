export type TestimonialSeed = {
  quote: string
  author: string
  rating: number
  featured: boolean
  order: number
}

export const featuredTestimonialsData: TestimonialSeed[] = [
  {
    quote:
      'Recibí un trato profesional y claro desde el primer momento. Supieron orientarme con honestidad y resolver mi situación de forma eficaz.',
    author: 'Julian Marco',
    rating: 5,
    featured: true,
    order: 1,
  },
  {
    quote:
      'Destaco su rigor jurídico y la tranquilidad que transmiten durante todo el proceso. Un equipo serio y comprometido con su trabajo.',
    author: 'Michael Zarate',
    rating: 5,
    featured: true,
    order: 2,
  },
  {
    quote:
      'Gracias a su asesoramiento pude tomar decisiones importantes con seguridad. Comunicación directa y soluciones bien planteadas.',
    author: 'Samantha Rodriguez',
    rating: 5,
    featured: true,
    order: 3,
  },
  {
    quote:
      'Un despacho en el que se nota la experiencia. Analizaron mi caso con detalle y me ofrecieron una estrategia clara desde el inicio.',
    author: 'Erick Ortiz',
    rating: 5,
    featured: true,
    order: 4,
  },
]

export const testimonialsPageData: TestimonialSeed[] = [
  {
    quote:
      'Desde el primer contacto recibí un trato muy profesional y cercano. Me explicaron con claridad las opciones legales que tenía y me acompañaron durante todo el proceso. Sentí en todo momento que mi caso estaba bien estudiado y en manos de personas con experiencia.',
    author: 'Carlos M.',
    rating: 5,
    featured: false,
    order: 5,
  },
  {
    quote:
      'Lo que más valoro de su trabajo es la seriedad y el rigor con el que analizan cada situación. No prometen soluciones rápidas, sino estrategias realistas y bien fundamentadas. Gracias a su asesoramiento pude resolver un problema legal que llevaba tiempo preocupándome.',
    author: 'Laura G.',
    rating: 5,
    featured: false,
    order: 6,
  },
  {
    quote:
      'Me ofrecieron una orientación clara desde el primer momento y mantuvieron una comunicación constante durante todo el procedimiento. Su forma de trabajar transmite confianza y profesionalidad. Sin duda, un despacho en el que se nota la experiencia.',
    author: 'Miguel R.',
    rating: 5,
    featured: false,
    order: 7,
  },
  {
    quote:
      'Acudí a ellos por recomendación y quedé muy satisfecho con el trato recibido. Analizaron mi caso con detalle y me explicaron cada paso de forma sencilla. Su acompañamiento fue clave para tomar decisiones importantes con tranquilidad.',
    author: 'Ana P.',
    rating: 5,
    featured: false,
    order: 8,
  },
  {
    quote:
      'Destaco especialmente su compromiso y su capacidad para ofrecer soluciones claras en situaciones complejas. Me sentí escuchado y bien asesorado desde el principio hasta el final. Es un equipo serio, accesible y muy bien preparado.',
    author: 'Javier S.',
    rating: 5,
    featured: false,
    order: 9,
  },
  {
    quote:
      'Desde la primera consulta percibí un alto nivel de profesionalidad. Me ofrecieron una visión clara del problema y de las posibles soluciones, lo que me dio mucha seguridad para seguir adelante con el proceso.',
    author: 'Sofía L.',
    rating: 5,
    featured: false,
    order: 10,
  },
  {
    quote:
      'Valoro mucho la transparencia con la que trabajaron mi caso. En todo momento supe en qué punto estaba el procedimiento y qué pasos se iban a dar a continuación. Eso me dio mucha tranquilidad.',
    author: 'Daniel T.',
    rating: 5,
    featured: false,
    order: 11,
  },
  {
    quote:
      'El equipo mostró una gran capacidad para entender mi situación y ofrecer una estrategia adaptada a mis necesidades. Su trato fue cercano y profesional durante todo el tiempo que duró el proceso.',
    author: 'María R.',
    rating: 5,
    featured: false,
    order: 12,
  },
  {
    quote:
      'Me sentí acompañado y bien asesorado desde el inicio hasta el final. Supieron explicarme aspectos legales complejos de forma sencilla y siempre estuvieron disponibles para resolver mis dudas.',
    author: 'Pablo C.',
    rating: 5,
    featured: false,
    order: 13,
  },
  {
    quote:
      'Recomiendo este despacho por su seriedad, su compromiso y la forma clara en la que trabajan. Gracias a su apoyo pude afrontar un problema legal importante con mayor seguridad y confianza.',
    author: 'Elena V.',
    rating: 5,
    featured: false,
    order: 14,
  },
]

export const testimonialsData = [...featuredTestimonialsData, ...testimonialsPageData]
