import { gql } from '@apollo/client';

import { IIngredient } from '@/models/ingredients';

export const GET_INGREDIENTS = gql`
  query GetIngredients {
    ingredients {
      id,
      name
    }
  }
`;

export interface IIngredientsQuery {
  ingredients: IIngredient[];
};