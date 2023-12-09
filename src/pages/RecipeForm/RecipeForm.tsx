import { FC } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { IonButton, IonInput, IonItem } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { useToast } from '@/utils/toasts';
import { CREATE_RECIPE, ICreateRecipeMutation, ICreateRecipePayload } from '@/graphql/mutations/recipes';
import Spinner from '@/components/Spinner/Spinner';

const RecipeForm: FC = () => {
  const history = useHistory();
  const showToast = useToast();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ICreateRecipePayload>();

  const [createRecipe, { loading }] = useMutation<ICreateRecipeMutation>(CREATE_RECIPE);

  const onSubmit: SubmitHandler<ICreateRecipePayload> = (payload: ICreateRecipePayload) => {
    createRecipe({
      variables: payload
    }).then((_) => {
      history.goBack();
      showToast('La recette a bien été créée', 'success');
    }).catch((error: ApolloError) => {
      if (error.message.includes('Uniqueness violation')) {
        showToast('Ce nom de recette existe déjà', 'danger');  
        return;
      }

      showToast("Une erreur est survenue lors de la création de la recette", 'danger');
    })
  }
  
  return (
    <>
      <h1>Créer une recette</h1>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonInput
              label='Nom *'
              labelPlacement='floating'
              {...register('name', { required: true })}
            />
          </IonItem>
          <IonButton
            color='tertiary'
            type='submit'
            disabled={!isValid}
            >
              Créer
            </IonButton>
        </form>
      )}
    </>
  )
};

export default RecipeForm;