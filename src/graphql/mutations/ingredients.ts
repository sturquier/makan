import { gql } from '@apollo/client';

import { IIngredient } from '@/models/ingredients';

export const CREATE_INGREDIENT = gql`
  mutation CreateIngredient($name: String!) {
    insert_ingredients_one(object: { name: $name }) {
      id,
      name
    }
  }
`;

export interface ICreateIngredientMutation {
  insert_ingredients_one: IIngredient;
};

export type ICreateIngredientPayload = Pick<IIngredient, "name">