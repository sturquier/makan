import { FC } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { IonButton, IonInput, IonItem } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { useToast } from '@/utils/toasts';
import { CREATE_INGREDIENT, ICreateIngredientMutation, ICreateIngredientPayload } from '@/graphql/mutations/ingredients';
import Spinner from '@/components/Spinner/Spinner';

const IngredientForm: FC = () => {
  const history = useHistory();
  const showToast = useToast();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ICreateIngredientPayload>();

  const [createIngredient, { loading }] = useMutation<ICreateIngredientMutation>(CREATE_INGREDIENT);

  const onSubmit: SubmitHandler<ICreateIngredientPayload> = (payload: ICreateIngredientPayload) => {
    createIngredient({
      variables: payload
    }).then((_) => {
      history.goBack();
      showToast("L'ingrédient a bien été créé", 'success');
    }).catch((error: ApolloError) => {
      if (error.message.includes('Uniqueness violation')) {
        showToast("Ce nom d'ingrédient existe déjà", 'danger');  
        return;
      }

      showToast("Une erreur est survenue lors de la création de l'ingrédient", 'danger');
    })
  }
  
  return (
    <>
      <h1>Créer un ingrédient</h1>
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

export default IngredientForm;