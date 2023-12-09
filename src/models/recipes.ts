import { IIngredient } from '@/models/ingredients';

export interface IRecipe {
  id: number;
  name: string;
  description?: string;
  preparation_time: number;
  cooking_time: number;
  servings: RecipeServings;
  ingredients: IIngredient[];
  instructions: string[];
}

export enum RecipeServings {
  ONE = 1,
  TWO = 2,
  FOUR = 4,
  SIX = 6,
  EIGHT = 8
}