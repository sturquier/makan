import { gql } from '@apollo/client';

import { IRecipe } from '@/models/recipes';

export const CREATE_RECIPE = gql`
  mutation CreateRecipe(
    $name: String!,
    $description: String,
    $preparation_time: Int!,
    $cooking_time: Int!,
    $servings: Int!,
    $instructions: [String!]
  ) {
    insert_recipes_one(object: { 
      name: $name,
      description: $description,
      preparation_time: $preparation_time,
      cooking_time: $cooking_time,
      servings: $servings,
      instructions: $instructions
    }) {
      id,
      name
    }
  }
`;

export interface ICreateRecipeMutation {
  insert_recipes_one: IRecipe;
};

export type ICreateRecipePayload = Pick<IRecipe, "name" | "description" | "preparation_time" | "cooking_time" | "servings">