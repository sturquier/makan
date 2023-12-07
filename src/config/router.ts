import { fishOutline, restaurantOutline } from 'ionicons/icons';

export interface IPage {
  title?: string;
  url: string;
  icon?: string;
  subPages?: IPage[]
}

export const pages: IPage[] = [
  {
    title: 'Recettes',
    url: '/recipes',
    icon: restaurantOutline,
    subPages: [
      {
        url: '/recipes/add'
      },
      {
        url: '/recipes/:id'
      }
    ]
  },
  {
    title: 'Ingrédients',
    url: '/ingredients',
    icon: fishOutline,
    subPages: [
      {
        url: '/ingredients/add'
      }
    ]
  }
];