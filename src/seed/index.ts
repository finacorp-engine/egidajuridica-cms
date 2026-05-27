import 'dotenv/config'

import config from '@payload-config'
import { getPayload, type Payload } from 'payload'

import type { Page, Service, TeamMember, Testimonial } from '../payload-types'

import { pageMediaImages } from './data/mediaImages'
import { servicesData } from './data/services'
import { siteSettingsData } from './data/siteSettings'
import { teamMembersData } from './data/teamMembers'
import { featuredTestimonialsData, testimonialsPageData } from './data/testimonials'
import { lexicalFromSections, lexicalRoot, lexicalText } from './helpers/lexical'
import { imageWithAlt, seedMediaFromUrl } from './helpers/seedMediaFromUrl'

type IdMap = Record<string, string>

const upsertService = async (
  payload: Payload,
  slug: string,
  data: Omit<Service, 'id' | 'createdAt' | 'updatedAt' | 'slug'>,
) => {
  const existing = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
    pagination: false,
  })

  if (existing.docs[0]?.id) {
    return payload.update({
      collection: 'services',
      id: existing.docs[0].id,
      data,
    })
  }

  return payload.create({
    collection: 'services',
    data: {
      ...data,
      slug,
    },
  })
}

const upsertPage = async (
  payload: Payload,
  slug: string,
  data: Omit<Page, 'id' | 'createdAt' | 'updatedAt' | 'slug' | '_status'>,
) => {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    pagination: false,
  })

  if (existing.docs[0]?.id) {
    return payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data,
      draft: false,
    })
  }

  return payload.create({
    collection: 'pages',
    data: {
      ...data,
      slug,
      _status: 'published',
    },
    draft: false,
  })
}

const upsertBySlug = async (
  payload: Payload,
  collection: 'services' | 'pages',
  slug: string,
  data:
    | Omit<Service, 'id' | 'createdAt' | 'updatedAt' | 'slug'>
    | Omit<Page, 'id' | 'createdAt' | 'updatedAt' | 'slug' | '_status'>,
) => {
  if (collection === 'services') {
    return upsertService(
      payload,
      slug,
      data as Omit<Service, 'id' | 'createdAt' | 'updatedAt' | 'slug'>,
    )
  }

  return upsertPage(
    payload,
    slug,
    data as Omit<Page, 'id' | 'createdAt' | 'updatedAt' | 'slug' | '_status'>,
  )
}

const upsertByAuthor = async (
  payload: Payload,
  author: string,
  data: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>,
) => {
  const existing = await payload.find({
    collection: 'testimonials',
    where: { author: { equals: author } },
    limit: 1,
    pagination: false,
  })

  if (existing.docs[0]?.id) {
    return payload.update({
      collection: 'testimonials',
      id: existing.docs[0].id,
      data,
    })
  }

  return payload.create({
    collection: 'testimonials',
    data,
  })
}

const upsertTeamMember = async (
  payload: Payload,
  name: string,
  data: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>,
) => {
  const existing = await payload.find({
    collection: 'team-members',
    where: { name: { equals: name } },
    limit: 1,
    pagination: false,
  })

  if (existing.docs[0]?.id) {
    return payload.update({
      collection: 'team-members',
      id: existing.docs[0].id,
      data,
    })
  }

  return payload.create({
    collection: 'team-members',
    data,
  })
}

const buildPages = (
  media: IdMap,
  services: IdMap,
  team: IdMap,
  testimonials: IdMap,
) => {
  const allServiceIds = [
    services['derecho-laboral'],
    services['derecho-empresarial'],
    services['derecho-civil'],
    services['otros-servicios'],
  ].filter(Boolean)

  const specialtyServiceIds = [
    services['derecho-laboral'],
    services['derecho-empresarial'],
    services['derecho-civil'],
  ].filter(Boolean)

  const teamIds = Object.values(team)
  const featuredTestimonialIds = featuredTestimonialsData
    .map((item) => testimonials[item.author])
    .filter(Boolean)
  const allTestimonialIds = [...featuredTestimonialsData, ...testimonialsPageData]
    .map((item) => testimonials[item.author])
    .filter(Boolean)

  return [
    {
      slug: 'home',
      title: 'Inicio',
      pageType: 'home',
      seo: {
        title: 'Egida Jurídica — Firma legal especializada en derecho laboral, empresarial y civil',
        description:
          'Egida Jurídica es una firma legal con más de 20 años de experiencia, especializada en derecho laboral, empresarial y civil. Asesoramiento riguroso, estrategia legal clara y soluciones adaptadas a cada caso.',
        keywords: siteSettingsData.defaultKeywords,
        canonical: siteSettingsData.website,
        robots: 'index, follow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'heroHome',
          title: 'Protegemos tus intereses laborales y empresariales.',
          subtitle: 'Asesoramiento claro. Estrategia legal eficaz.',
          imageWithAlt: imageWithAlt(media['hero-home'], 'Hero principal de Egida Jurídica'),
          primaryCta: { text: 'Solicita asesoramiento', href: '/contacto' },
          secondaryCta: { text: 'Nuestros servicios', href: '/servicios' },
          showScrollIndicator: true,
        },
        {
          blockType: 'about',
          backgroundText: '¿Qué hacemos?',
          subtitle: '¿Qué hacemos?',
          title: lexicalRoot([
            {
              type: 'paragraph',
              children: [lexicalText('Asesoramiento jurídico claro y eficaz')],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ]),
          description:
            'Prestamos servicios legales orientados a resolver conflictos, prevenir riesgos y acompañar a nuestros clientes en decisiones jurídicas relevantes. Nuestro enfoque combina conocimiento técnico, análisis estratégico y un trato directo y transparente.',
          linkText: 'Conoce más sobre nosotros',
          linkHref: '/acerca',
          imageWithAlt: imageWithAlt(
            media['about-home-1'],
            'Equipo profesional de abogados trabajando en un caso',
          ),
          reverseLayout: false,
        },
        {
          blockType: 'servicesCarousel',
          introTitle: 'Especialistas en áreas clave del derecho',
          services: allServiceIds,
        },
        {
          blockType: 'teamCarousel',
          introTitle: 'Un equipo jurídico a tu lado',
          introText:
            'Contamos con un equipo de abogados especializados que combinan experiencia, formación continua y un enfoque estratégico para ofrecer soluciones jurídicas eficaces.',
          members: teamIds,
        },
        {
          blockType: 'successStoriesCarousel',
          title: 'Historias de éxito',
          testimonials: featuredTestimonialIds,
        },
        {
          blockType: 'about',
          backgroundText: 'Especialización',
          subtitle: 'Áreas de práctica',
          title: lexicalRoot([
            {
              type: 'paragraph',
              children: [lexicalText('Enfocados en lo que mejor sabemos hacer')],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ]),
          description:
            'Nos especializamos en áreas clave del derecho para ofrecer un asesoramiento más preciso, eficaz y adaptado a cada caso. La especialización nos permite profundizar en cada materia y aportar soluciones jurídicas con mayor rigor y seguridad.',
          linkText: 'Conoce nuestras áreas de práctica',
          linkHref: '/servicios',
          imageWithAlt: imageWithAlt(
            media['about-home-2'],
            'Documentos legales y libros de derecho',
          ),
          reverseLayout: true,
        },
        {
          blockType: 'instagram',
          title: 'Síguenos en @egidajuridica',
        },
      ],
    },
    {
      slug: 'acerca',
      title: 'Acerca',
      pageType: 'standard',
      seo: {
        title: 'Sobre nosotros — Egida Jurídica | Firma legal con más de 20 años de experiencia',
        description:
          'Conoce a Egida Jurídica: una firma legal sólida, con más de 20 años de ejercicio profesional. Equipo comprometido, enfoque riguroso y trato directo. Especialistas en derecho laboral, empresarial y civil.',
        keywords:
          'sobre nosotros, equipo jurídico, abogados con experiencia, firma legal Perú, trayectoria legal, equipo profesional, Egida Jurídica, despacho de abogados',
        canonical: `${siteSettingsData.website}/acerca`,
        robots: 'index, follow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'hero',
          title: 'Comprometidos con la defensa de tus derechos.',
          description:
            'En Egida Jurídica somos una firma legal orientada a ofrecer soluciones jurídicas sólidas, claras y eficaces. Nuestro trabajo se basa en el rigor profesional, la cercanía con el cliente y una estrategia legal adaptada a cada caso.',
          imageWithAlt: imageWithAlt(
            media['hero-acerca'],
            'Profesional jurídica consultando documentos legales',
          ),
          buttons: [],
        },
        {
          blockType: 'expertise',
          title: 'Nuestra forma de ejercer el derecho',
          description:
            'Trabajamos con un enfoque estratégico, transparente y orientado a resultados. Cada caso se analiza de forma individual, priorizando siempre la seguridad jurídica y los intereses del cliente.',
          bullets: [
            { label: 'Rigor jurídico', text: 'Análisis profundo y fundamentado de cada asunto.' },
            { label: 'Trato directo', text: 'Comunicación clara, sin tecnicismos innecesarios.' },
            {
              label: 'Estrategia personalizada',
              text: 'No usamos soluciones estándar para problemas distintos.',
            },
            {
              label: 'Compromiso profesional',
              text: 'Defendemos cada caso como si fuera propio.',
            },
          ],
          imageWithAlt: imageWithAlt(
            media['expertise-acerca'],
            'Abogada trabajando en escritorio profesional',
          ),
          cta: { text: 'CONTÁCTANOS', href: '/contacto' },
        },
        {
          blockType: 'teamCarousel',
          introTitle: 'Un equipo jurídico a tu lado',
          introText:
            'Contamos con un equipo de abogados especializados que combinan experiencia, formación continua y un enfoque estratégico para ofrecer soluciones jurídicas eficaces.',
          members: teamIds,
        },
        {
          blockType: 'successStoriesCarousel',
          title: 'Historias de éxito',
          testimonials: featuredTestimonialIds,
        },
        {
          blockType: 'about',
          subtitle: 'Nuestra trayectoria',
          title: lexicalRoot([
            {
              type: 'paragraph',
              children: [lexicalText('Una firma con recorrido')],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ]),
          description:
            'Con más de 20 años de experiencia en el ámbito jurídico, Egida Jurídica se ha consolidado como una firma comprometida con la excelencia profesional y la defensa de los intereses de sus clientes.',
          imageWithAlt: imageWithAlt(
            media['about-acerca'],
            'Escritorio profesional con documentos legales',
          ),
          reverseLayout: false,
        },
      ],
    },
    {
      slug: 'servicios',
      title: 'Servicios',
      pageType: 'standard',
      seo: {
        title: 'Servicios — Egida Jurídica | Derecho laboral, empresarial y civil',
        description:
          'Servicios jurídicos especializados en derecho laboral, empresarial y civil. Asesoramiento riguroso, estrategia legal clara y soluciones adaptadas a cada cliente. Egida Jurídica.',
        keywords:
          'servicios legales, derecho laboral, derecho empresarial, derecho civil, abogados especialistas, asesoramiento jurídico, despidos, contratos, reclamaciones, conflictos mercantiles, responsabilidad civil, Egida Jurídica',
        canonical: `${siteSettingsData.website}/servicios`,
        robots: 'index, follow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'hero',
          title: 'Asesoramiento jurídico especializado',
          description:
            'Ofrecemos asesoramiento legal especializado en derecho laboral, civil y empresarial, con un enfoque profesional, estratégico y orientado a proteger los intereses de nuestros clientes.',
          imageWithAlt: imageWithAlt(
            media['hero-servicios'],
            'Abogados especializados en consulta profesional',
          ),
          buttons: [{ text: 'Solicitar consulta', href: '/contacto' }],
        },
        {
          blockType: 'phrase',
          backgroundText: 'creemos',
          description:
            'Creemos que un buen asesoramiento jurídico nace del conocimiento profundo de cada materia y del análisis riguroso de cada caso. Por eso trabajamos desde la especialización, ofreciendo soluciones legales claras, realistas y adaptadas a las necesidades concretas de cada cliente.',
        },
        {
          blockType: 'specialties',
          title: 'Expertos en las áreas clave del derecho',
          imageWithAlt: imageWithAlt(
            media['specialties-servicios'],
            'Profesionales del derecho en reunión de estrategia',
          ),
          services: specialtyServiceIds,
        },
        {
          blockType: 'servicesCarousel',
          introTitle: 'Especialistas en áreas clave del derecho',
          services: allServiceIds,
        },
        {
          blockType: 'about',
          subtitle: 'Nuestro enfoque',
          backgroundText: 'enfoque',
          title: lexicalRoot([
            {
              type: 'paragraph',
              children: [lexicalText('Experiencia y criterio')],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          ]),
          description:
            'Combinamos años de ejercicio profesional con un enfoque riguroso y personalizado. Cada asunto se aborda con atención, estrategia y una comunicación clara, garantizando un acompañamiento constante durante todo el proceso legal.',
          imageWithAlt: imageWithAlt(
            media['about-servicios'],
            'Balanza de la justicia representando el rigor jurídico',
          ),
          reverseLayout: false,
        },
        {
          blockType: 'successStoriesCarousel',
          title: 'Historias de éxito',
          testimonials: featuredTestimonialIds,
        },
        {
          blockType: 'instagram',
          title: 'Síguenos en @egidajuridica',
        },
      ],
    },
    {
      slug: 'contacto',
      title: 'Contacto',
      pageType: 'contact',
      seo: {
        title: 'Contacto — Egida Jurídica | Consulta jurídica profesional',
        description:
          'Contacta con Egida Jurídica para recibir orientación legal clara y profesional. Asesoramiento en derecho laboral, empresarial y civil adaptado a tu situación.',
        keywords:
          'contacto abogados, consulta jurídica, asesoría legal, contactar abogado, derecho laboral contacto, Egida Jurídica contacto, consulta legal Perú',
        canonical: `${siteSettingsData.website}/contacto`,
        robots: 'index, follow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'hero',
          title: 'Hablemos de tu caso.',
          description:
            'Contacta con nuestro equipo y recibe orientación legal clara, profesional y adaptada a tu situación. Estamos listos para ayudarte a tomar la mejor decisión jurídica.',
          imageWithAlt: imageWithAlt(
            media['hero-contacto'],
            'Profesional jurídica atendiendo a un cliente por teléfono',
          ),
          buttons: [],
        },
        {
          blockType: 'contactForm',
          heading: 'Contáctanos',
          description: 'Completa el formulario y nos pondremos en contacto contigo.',
          submitLabel: 'Enviar mensaje',
        },
        {
          blockType: 'mapSection',
          title: 'Encuéntranos en',
        },
      ],
    },
    {
      slug: 'testimonios',
      title: 'Testimonios',
      pageType: 'standard',
      seo: {
        title: 'Testimonios — Egida Jurídica | La confianza de nuestros clientes',
        description:
          'Descubre los testimonios de clientes de Egida Jurídica. Opiniones reales sobre nuestro asesoramiento en derecho laboral, empresarial y civil. Resultados que avalan nuestra forma de trabajar.',
        keywords:
          'testimonios, opiniones clientes, reseñas abogados, clientes satisfechos, resultados legales, Egida Jurídica testimonios, opiniones firma legal',
        canonical: `${siteSettingsData.website}/testimonios`,
        robots: 'index, follow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'hero',
          title: 'La confianza de nuestros clientes nos avala',
          description:
            'Los resultados obtenidos y la satisfacción de nuestros clientes son la mejor muestra de nuestro enfoque profesional y de nuestra forma de ejercer el derecho.',
          imageWithAlt: imageWithAlt(
            media['hero-testimonios'],
            'Profesionales del equipo de Egida Jurídica en reunión',
          ),
          buttons: [],
        },
        {
          blockType: 'testimonialsList',
          testimonials: allTestimonialIds,
        },
      ],
    },
    {
      slug: 'terminos',
      title: 'Términos y Condiciones',
      pageType: 'legal',
      seo: {
        title: 'Términos y Condiciones — Egida Jurídica',
        description:
          'Consulta los términos y condiciones de uso de los servicios de Egida Jurídica. Información sobre derechos, obligaciones y condiciones de nuestro asesoramiento jurídico.',
        keywords:
          'términos y condiciones, condiciones de uso, términos legales, Egida Jurídica, aviso legal, condiciones del servicio',
        canonical: `${siteSettingsData.website}/terminos`,
        robots: 'index, follow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'hero',
          title: 'Términos y condiciones',
          imageWithAlt: imageWithAlt(
            media['hero-legal'],
            'Estantería de libros jurídicos en un despacho de abogados',
          ),
          buttons: [],
        },
        {
          blockType: 'legalContent',
          heading: 'Términos y Condiciones',
          lastUpdated: '2025-11-28',
          intro:
            'Bienvenido a Egida Jurídica, una firma legal especializada en derecho laboral, empresarial y civil. Al acceder a nuestro sitio web, utilizar nuestros servicios de asesoramiento jurídico o cualquier funcionalidad asociada, reconoces haber leído, entendido y aceptado estos Términos y Condiciones de Servicio, así como nuestra Política de Privacidad y cualquier otro aviso legal aplicable.',
          body: lexicalFromSections([
            {
              heading: '1. Aceptación de los Términos',
              paragraphs: [
                'El uso del Servicio constituye tu aceptación expresa de estos Términos. Si no estás de acuerdo con ellos, debes abstenerte de utilizar los servicios de Egida Jurídica.',
                'Declaras ser mayor de edad y tener facultades para celebrar acuerdos vinculantes. Si contratas los servicios en representación de una organización, garantizas que cuentas con autorización para vincularla.',
              ],
            },
            {
              heading: '2. Servicios jurídicos',
              paragraphs: [
                'Egida Jurídica ofrece servicios de asesoramiento y representación legal en derecho laboral, empresarial y civil. La información del sitio web tiene carácter informativo y no constituye asesoramiento jurídico personalizado hasta que exista una relación profesional formalizada.',
              ],
            },
            {
              heading: '3. Relación profesional',
              paragraphs: [
                'La relación abogado-cliente se establece mediante contrato o aceptación expresa de encargo profesional. Hasta ese momento, cualquier comunicación se entiende como consulta preliminar sin compromiso.',
              ],
            },
            {
              heading: '4. Contacto',
              paragraphs: [
                'Para consultas sobre estos términos puedes contactarnos en egidajuridica.developers@gmail.com o a través de https://egidajuridica.com.',
              ],
            },
          ]),
        },
      ],
    },
    {
      slug: 'privacidad',
      title: 'Política de Privacidad',
      pageType: 'legal',
      seo: {
        title: 'Política de Privacidad — Egida Jurídica',
        description:
          'Consulta la política de privacidad de Egida Jurídica. Conoce cómo recopilamos, utilizamos y protegemos tu información personal al usar nuestros servicios jurídicos.',
        keywords:
          'política de privacidad, protección de datos, privacidad, datos personales, Egida Jurídica, firma legal privacidad',
        canonical: `${siteSettingsData.website}/privacidad`,
        robots: 'index, follow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'hero',
          title: 'Política de privacidad',
          imageWithAlt: imageWithAlt(
            media['hero-legal'],
            'Estantería de libros jurídicos en un despacho de abogados',
          ),
          buttons: [],
        },
        {
          blockType: 'legalContent',
          heading: 'Política de Privacidad',
          lastUpdated: '2025-11-28',
          intro:
            'En Egida Jurídica respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad explica qué información recopilamos, cómo la utilizamos y cuáles son tus derechos.',
          body: lexicalFromSections([
            {
              heading: '1. Responsable del tratamiento',
              paragraphs: [
                'El responsable del tratamiento de tus datos personales es Egida Jurídica, con domicilio en Torre Galena 234, Piso 10, y correo de contacto egidajuridica.developers@gmail.com.',
              ],
            },
            {
              heading: '2. Datos que recopilamos',
              paragraphs: [
                'Podemos recopilar datos de identificación y contacto (nombre, email, teléfono), información proporcionada en formularios o consultas, y datos técnicos de navegación cuando visitas nuestro sitio web.',
              ],
            },
            {
              heading: '3. Finalidad del tratamiento',
              paragraphs: [
                'Utilizamos tus datos para gestionar consultas, prestar servicios jurídicos, mantener comunicación profesional, cumplir obligaciones legales y mejorar nuestros servicios.',
              ],
            },
            {
              heading: '4. Derechos del titular',
              paragraphs: [
                'Puedes ejercer tus derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad contactándonos en egidajuridica.developers@gmail.com.',
              ],
            },
          ]),
        },
      ],
    },
    {
      slug: '404',
      title: 'Página no encontrada',
      pageType: 'notFound',
      seo: {
        title: 'Página no encontrada — Egida Jurídica',
        description:
          'La página que buscas no existe o ha sido movida. Vuelve al inicio de Egida Jurídica para encontrar la información que necesitas sobre nuestros servicios jurídicos.',
        keywords: 'página no encontrada, error 404, Egida Jurídica',
        canonical: `${siteSettingsData.website}/404`,
        robots: 'noindex, nofollow',
        type: 'website',
      },
      layout: [
        {
          blockType: 'hero',
          title: 'Página no encontrada',
          description:
            'La página que buscas no existe o ha sido movida. Vuelve al inicio para continuar navegando.',
          imageWithAlt: imageWithAlt(media['hero-404'], 'Espacio de oficina elegante'),
          buttons: [{ text: 'Volver al inicio', href: '/' }],
          className: 'h-screen',
        },
      ],
    },
  ]
}

const seed = async () => {
  if (!process.env.PAYLOAD_SECRET || !process.env.DATABASE_URL) {
    throw new Error('Faltan PAYLOAD_SECRET o DATABASE_URL en el entorno.')
  }

  const payload = await getPayload({ config })

  const existingPages = await payload.find({ collection: 'pages', limit: 1 })
  if (existingPages.totalDocs > 0 && process.env.SEED_FORCE !== 'true') {
    console.log('La base de datos ya contiene páginas. Usa SEED_FORCE=true para re-sembrar.')
    process.exit(0)
  }

  console.log('Sembrando configuración del sitio...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: siteSettingsData,
  })

  console.log('Sembrando medios...')
  const mediaMap: IdMap = {}
  for (const image of pageMediaImages) {
    mediaMap[image.key] = await seedMediaFromUrl(payload, image.key, image.url, image.alt)
  }

  console.log('Sembrando servicios...')
  const servicesMap: IdMap = {}
  for (const service of servicesData) {
    const imageId = await seedMediaFromUrl(
      payload,
      service.imageKey,
      service.imageUrl,
      service.imageAlt,
    )
    const doc = await upsertBySlug(payload, 'services', service.slug, {
      title: service.title,
      subtitle: service.subtitle,
      description: service.description,
      shortDescription: service.shortDescription,
      image: imageId,
      cta: service.cta,
      order: service.order,
    })
    servicesMap[service.slug] = doc.id
  }

  console.log('Sembrando equipo...')
  const teamMap: IdMap = {}
  for (const member of teamMembersData) {
    const photoId = await seedMediaFromUrl(
      payload,
      member.imageKey,
      member.imageUrl,
      member.imageAlt,
    )
    const doc = await upsertTeamMember(payload, member.name, {
      name: member.name,
      role: member.role,
      photo: photoId,
      order: member.order,
    })
    teamMap[member.name] = doc.id
  }

  console.log('Sembrando testimonios...')
  const testimonialsMap: IdMap = {}
  for (const testimonial of [...featuredTestimonialsData, ...testimonialsPageData]) {
    const doc = await upsertByAuthor(payload, testimonial.author, {
      quote: testimonial.quote,
      author: testimonial.author,
      rating: testimonial.rating,
      featured: testimonial.featured,
      order: testimonial.order,
    })
    testimonialsMap[testimonial.author] = doc.id
  }

  console.log('Sembrando páginas...')
  const pagesData = buildPages(mediaMap, servicesMap, teamMap, testimonialsMap)
  const pagesMap: IdMap = {}

  for (const page of pagesData) {
    const doc = await upsertBySlug(payload, 'pages', page.slug, {
      title: page.title,
      pageType: page.pageType as Page['pageType'],
      layout: page.layout as Page['layout'],
      seo: page.seo as Page['seo'],
    })
    pagesMap[page.slug] = doc.id
  }

  console.log('Sembrando navegación...')
  await payload.updateGlobal({
    slug: 'navigation',
    data: {
      headerNavItems: [
        { label: 'Inicio', page: pagesMap.home },
        { label: 'Acerca', page: pagesMap.acerca },
        { label: 'Servicios', page: pagesMap.servicios },
        { label: 'Testimonios', page: pagesMap.testimonios },
        { label: 'Contáctanos', page: pagesMap.contacto },
      ],
      footerNavItems: [
        { label: 'Inicio', page: pagesMap.home },
        { label: 'Acerca', page: pagesMap.acerca },
        { label: 'Servicios', page: pagesMap.servicios },
        { label: 'Testimonios', page: pagesMap.testimonios },
        { label: 'Contáctanos', page: pagesMap.contacto },
      ],
      legalLinks: [
        { label: 'Términos y condiciones', page: pagesMap.terminos },
        { label: 'Política de privacidad', page: pagesMap.privacidad },
      ],
      showWhatsappButton: true,
      showUpButton: true,
    },
  })

  console.log('Seed completado correctamente.')
  process.exit(0)
}

seed().catch((error) => {
  console.error('Error durante el seed:', error)
  process.exit(1)
})
