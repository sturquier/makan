import { FC } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { useToast } from '@/utils/toasts';
import { RecipeServings } from '@/models/recipes';
import { GET_RECIPES } from '@/graphql/queries/recipes';
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

  const [createRecipe, { loading }] = useMutation<ICreateRecipeMutation>(CREATE_RECIPE, {
    refetchQueries: [{ query: GET_RECIPES }]
  });

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
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <IonItem>
            <IonLabel>Nom *</IonLabel>
            <IonInput
              label='Entrez un nom'
              labelPlacement='floating'
              {...register('name', { required: true })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Description</IonLabel>
            <IonInput
              label='Entrez une description'
              labelPlacement='floating'
              {...register('description')}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Temps de préparation ( en minutes ) *</IonLabel>
            <IonInput
              type='number'
              label='Entrez un temps de préparation'
              labelPlacement='floating'
              {...register('preparation_time', { required: true })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Temps de cuisson ( en minutes ) *</IonLabel>
            <IonInput
              type='number'
              label='Entrez un temps de cuisson'
              labelPlacement='floating'
              {...register('cooking_time', { required: true })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Portions *</IonLabel>
            <IonSelect
              label='Sélectionnez un nombre de portions'
              labelPlacement='floating'
              {...register('servings', { required: true })}
            >
              {Object.values(RecipeServings)
                .filter((servings: string | RecipeServings) => typeof servings == 'number')
                .map((servings: string | RecipeServings) => (
                  <IonSelectOption key={servings} value={servings}>{servings}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonButton
            color='tertiary'
            type='submit'
            disabled={!isValid}
            >
              Créer une recette
            </IonButton>
        </form>
      )}
    </>
  )
};

export default RecipeForm;