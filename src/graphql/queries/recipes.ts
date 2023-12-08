import { gql } from '@apollo/client';

import { IRecipe } from '@/models/recipes';

export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
    }
  }
`;

export interface IRecipesQuery {
  recipes: IRecipe[];
};