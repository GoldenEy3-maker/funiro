import { v4 as uuidv4 } from 'uuid'

export interface ISidebarNavSubmenuData {
  id: string
  title: string
  href: string
}

export interface ISidebarNavData {
  id: string
  isSubmenu: boolean
  title: string
  href?: string
  submenu?: ISidebarNavSubmenuData[]
}

export const getSidebarNavData = (): ISidebarNavData[] => {
  return [
    {
      id: uuidv4(),
      isSubmenu: false,
      title: 'Home',
      href: '/'
    },
    {
      id: uuidv4(),
      isSubmenu: true,
      title: 'Products',
      submenu: [
        {
          id: uuidv4(),
          title: 'Product 1',
          href: '/'
        },
        {
          id: uuidv4(),
          title: 'Product 2',
          href: '/'
        },
        {
          id: uuidv4(),
          title: 'Product 3',
          href: '/'
        }
      ]
    },
    {
      id: uuidv4(),
      isSubmenu: true,
      title: 'Rooms',
      submenu: [
        {
          id: uuidv4(),
          title: 'Room 1',
          href: '/'
        },
        {
          id: uuidv4(),
          title: 'Room 2',
          href: '/'
        },
        {
          id: uuidv4(),
          title: 'Room 3',
          href: '/'
        }
      ]
    },
    {
      id: uuidv4(),
      isSubmenu: false,
      title: 'Inspirations',
      href: '/'
    },

    {
      id: uuidv4(),
      isSubmenu: false,
      title: 'Cart',
      href: '/'
    },
    {
      id: uuidv4(),
      isSubmenu: false,
      title: 'Favorites',
      href: '/'
    },
    {
      id: uuidv4(),
      isSubmenu: false,
      title: 'Profile',
      href: '/'
    },
    {
      id: uuidv4(),
      isSubmenu: false,
      title: 'Settings',
      href: '/'
    }
  ]
}