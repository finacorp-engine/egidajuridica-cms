export type TeamMemberSeed = {
  name: string
  role: string
  imageKey: string
  imageUrl: string
  imageAlt: string
  order: number
}

export const teamMembersData: TeamMemberSeed[] = [
  {
    name: 'Nathan Starley',
    role: 'Principal Broker, Realtor®',
    imageKey: 'team-nathan',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fotografía de Nathan Starley',
    order: 1,
  },
  {
    name: 'Jared West',
    role: 'Director of Sales, Realtor®',
    imageKey: 'team-jared',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fotografía de Jared West',
    order: 2,
  },
  {
    name: 'Linzi Almond',
    role: 'Realtor®, Transaction Coordinator',
    imageKey: 'team-linzi',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fotografía de Linzi Almond',
    order: 3,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Senior Realtor®',
    imageKey: 'team-sarah',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fotografía de Sarah Jenkins',
    order: 4,
  },
]
