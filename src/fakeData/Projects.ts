import { ProjectType } from "../entities/types/Project";

export const projects: ProjectType[] = [
    {
      id: 4,
      name: 'Sklum',
      description: 'Proyecto de traducciones de tienda sklum',
      contexts: [
        {
          id: 555,
          name: 'email',
          description: 'traducciones de emails',
          grids: [
            {
              id: 1,
              name: 'customer'
            },
            {
              id: 2,
              name: 'order'
            }
          ]
        },
        {
          id: 251,
          name: 'ecommerce',
          description: 'traducciones del ecommerce',
          grids: [
            {
              id: 1,
              name: 'pdp'
            }
          ]
        }
      ]
    },
    {
      id: 33,
      name: 'The masie',
      description: 'Proyecto de traducciones de tienda the masie',
      contexts: [
        {
          id: 5456,
          name: 'email',
          description: 'traducciones de emails',
          grids: [
            {
              id: 3,
              name: 'customer'
            },
            {
              id: 4,
              name: 'order'
            }
          ]
        },
        {
          id: 14521,
          name: 'ecommerce',
          description: 'traducciones del ecommerce',
          grids: [
            {
              id: 5,
              name: 'pdp'
            }
          ]
        }
      ]
    },
    {
      id: 55,
      name: 'Create Store',
      description: 'Proyecto de traducciones de tienda create store',
      contexts: [
        {
          id: 889,
          name: 'email',
          description: 'traducciones de emails',
          grids: [
            {
              id: 6,
              name: 'customer'
            },
            {
              id: 7,
              name: 'order'
            }
          ]
        },
        {
          id: 424,
          name: 'ecommerce',
          description: 'traducciones del ecommerce',
          grids: [
            {
              id: 8,
              name: 'pdp'
            }
          ]
        }
      ]
    }
  ]