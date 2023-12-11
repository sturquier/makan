import { FC, useState } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonText, IonTextarea } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { useToast } from '@/utils/toasts';
import { RecipeServings } from '@/models/recipes';
import { GET_RECIPES } from '@/graphql/queries/recipes';
import { CREATE_RECIPE, ICreateRecipeMutation, ICreateRecipePayload } from '@/graphql/mutations/recipes';
import Spinner from '@/components/Spinner/Spinner';
import InstructionsForm from '@/components/InstructionsForm/InstructionsForm';

const RecipeForm: FC = () => {
  const history = useHistory();
  const showToast = useToast();

  const [instructions, setInstructions] = useState<string[]>([]);

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
      variables: {
        ...payload,
        instructions
      }
    }).then((_) => {
      history.goBack();
      showToast({
        color: 'success',
        message: 'La recette a bien été créée'
      });
    }).catch((error: ApolloError) => {
      if (error.message.includes('Uniqueness violation')) {
        showToast({
          color: 'danger',
          message: 'Ce nom de recette existe déjà'
        });  
        return;
      }

      console.log(error)
      showToast({
        color: 'danger',
        message: "Une erreur est survenue lors de la création de la recette"
      });
    })
  }
  
  return (
    loading ? (
      <Spinner />
    ) : (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className='ion-margin'>Informations générales</h4>
        <IonList lines='none'>
          <IonItem>
            <IonLabel>
              Nom <IonText color="danger">*</IonText>
            </IonLabel>
            <IonInput
              fill='solid'
              label='Entrez un nom'
              labelPlacement='floating'
              {...register('name', { required: true })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Description</IonLabel>
            <IonTextarea
              fill='solid'
              autoGrow={true}
              maxlength={200}
              counter={true}
              counterFormatter={(inputLength: number, maxLength: number) => `${maxLength - inputLength} caractères restants`}
              label='Entrez une description'
              labelPlacement='floating'
              {...register('description')}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Temps de préparation ( en minutes ) <IonText color="danger">*</IonText></IonLabel>
            <IonInput
              fill='solid'
              type='number'
              label='Entrez un temps de préparation'
              labelPlacement='floating'
              {...register('preparation_time', { required: true })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Temps de cuisson ( en minutes ) <IonText color="danger">*</IonText></IonLabel>
            <IonInput
              fill='solid'
              type='number'
              label='Entrez un temps de cuisson'
              labelPlacement='floating'
              {...register('cooking_time', { required: true })}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Portions <IonText color="danger">*</IonText></IonLabel>
            <IonSelect
              fill='solid'
              label='Sélectionnez un nombre de portions'
              labelPlacement='floating'
              cancelText='Annuler'
              okText='Confirmer'
              {...register('servings', { required: true })}
            >
              {Object.values(RecipeServings)
                .filter((servings: string | RecipeServings) => typeof servings == 'number')
                .map((servings: string | RecipeServings) => (
                  <IonSelectOption key={servings} value={servings}>{servings}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <InstructionsForm instructions={instructions} onInstructionsChangeCallback={setInstructions} />
        </IonList>
        <IonButton
          type='submit'
          disabled={!isValid}
        >
          Créer une recette
        </IonButton>
      </form>
    )
  )
};

export default RecipeForm;