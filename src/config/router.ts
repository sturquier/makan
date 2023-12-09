import { ComponentType } from 'react';
import { fishOutline, restaurantOutline } from 'ionicons/icons';

import RecipesList from '@/pages/RecipesList/RecipesList';
import RecipeForm from '@/pages/RecipeForm/RecipeForm';
import RecipeDetails from '@/pages/RecipeDetails/RecipeDetails';
import IngredientsList from '@/pages/IngredientsList/IngredientsList';
import IngredientForm from '@/pages/IngredientForm/IngredientForm';

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
    component: RecipesList,
    menuTitle: 'Recettes',
    menuIcon: restaurantOutline,
  },
  {
    title: 'Créer une recette',
    path: '/recipes/new',
    component: RecipeForm,
  },
  {
    title: 'Détails de la recette',
    path: '/recipes/details/:id',
    component: RecipeDetails,
  },
  {
    title: 'Liste des ingrédients',
    path: '/ingredients',
    component: IngredientsList,
    menuTitle: 'Ingrédients',
    menuIcon: fishOutline,
  },
  {
    title: 'Créer un ingrédient',
    path: '/ingredients/new',
    component: IngredientForm,
  },
];