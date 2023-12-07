import { ComponentType } from 'react';
import { fishOutline, restaurantOutline } from 'ionicons/icons';

import Recipes from '@/pages/Recipes/Recipes';

export interface IPage {
  title: string;
  path: string;
  component: ComponentType;
  menuTitle?: string;
  menuIcon?: string;
}

export const pages: IPage[] = [
  {
    title: 'Liste des recettes',
    path: '/recipes',
    component: Recipes,
    menuTitle: 'Recettes',
    menuIcon: restaurantOutline,
  },
  {
    title: 'Ajouter une recette',
    path: '/recipes/add',
    component: Recipes,
  },
  {
    title: 'Détails de la recette',
    path: '/recipes/:id',
    component: Recipes,
  },
  {
    title: 'Liste des ingrédients',
    path: '/ingredients',
    component: Recipes,
    menuTitle: 'Ingrédients',
    menuIcon: fishOutline,
  },
  {
    title: 'Ajouter un ingrédient',
    path: '/ingredients/add',
    component: Recipes,
  },
];