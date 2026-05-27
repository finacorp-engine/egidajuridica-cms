import type { CollectionConfig } from 'payload'

import { isAuthenticated } from '../access/isAuthenticated'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: {
    singular: 'Miembro del equipo',
    plural: 'Equipo',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Contenido reutilizable',
    defaultColumns: ['name', 'role', 'order', 'updatedAt'],
    description: 'Miembros del equipo mostrados en el carrusel de equipo.',
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
      name: 'name',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Cargo',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Fotografía',
    },
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
