import { FC } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { IonButton, IonInput, IonItem, ToastOptions, useIonToast } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { CREATE_RECIPE, ICreateRecipeMutation, ICreateRecipePayload } from '@/graphql/mutations/recipes';
import Spinner from '@/components/Spinner/Spinner';

const RecipeForm: FC = () => {
  const history = useHistory();
  const [present] = useIonToast();

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
      presentToast('La recette a bien été ajoutée', 'success');
    }).catch((error: ApolloError) => {
      if (error.message.includes('Uniqueness violation')) {
        presentToast('Ce nom de recette existe déjà', 'danger');  
        return;
      }

      presentToast("Une erreur est survenue lors de l'ajout de la recette", 'danger');
    })
  }
  
  const presentToast = (message: string, color: ToastOptions['color']): void => {
    present({
      position: 'bottom',
      duration: 3000,
      color,
      message
    })
  }

  return (
    <>
      <h1>Ajouter une recette</h1>
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
              Ajouter
            </IonButton>
        </form>
      )}
    </>
  )
};

export default RecipeForm;