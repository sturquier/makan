import { gql } from '@apollo/client';

import { IRecipe } from '@/models/recipes';

export const CREATE_RECIPE = gql`
  mutation CreateRecipe($name: String!) {
    insert_recipes_one(object: { name: $name }) {
      id,
      name
    }
  }
`;

export interface ICreateRecipeMutation {
  insert_recipes_one: IRecipe;
};

export type ICreateRecipePayload = Pick<IRecipe, "name">