import gql from 'graphql-tag'

export const CREATE_RECIPE_MUTATION = gql`
  mutation CreateRecipeMutation(
    $title: String!,
    $description: String,
    $categoryIds: [ID]!,
    $ingredientIds: [ID]!
  ) {
    createRecipe(recipe: {
      title: $title,
      description: $description,
      categoryIds: $categoryIds,
      ingredientIds: $ingredientIds
    }) {
      id,
      title
    }
  }
`
