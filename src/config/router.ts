import { fishOutline, restaurantOutline } from 'ionicons/icons';

export interface IPage {
  title: string;
  url: string;
  icon: string;
}

export const pages: IPage[] = [
  {
    title: 'Recettes',
    url: '/recipes',
    icon: restaurantOutline,
  },
  {
    title: 'Ingrédients',
    url: '/ingredients',
    icon: fishOutline,
  }
];