import { FC } from 'react';
import { ApolloError, useMutation } from '@apollo/client';
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory } from 'react-router';

import { useToast } from '@/utils/toasts';
import { GET_INGREDIENTS } from '@/graphql/queries/ingredients';
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

  const [createIngredient, { loading }] = useMutation<ICreateIngredientMutation>(CREATE_INGREDIENT, {
    refetchQueries: [{ query: GET_INGREDIENTS }]
  });

  const onSubmit: SubmitHandler<ICreateIngredientPayload> = (payload: ICreateIngredientPayload) => {
    createIngredient({
      variables: payload
    }).then((_) => {
      history.goBack();
      showToast({
        color: 'success',
        message: "L'ingrédient a bien été créé"
      });
    }).catch((error: ApolloError) => {
      if (error.message.includes('Uniqueness violation')) {
        showToast({
          color: 'danger',
          message: "Ce nom d'ingrédient existe déjà"
        });  
        return;
      }

      showToast({
        color: 'danger',
        message: "Une erreur est survenue lors de la création de l'ingrédient"
      });
    })
  }
  
  return (
    loading ? (
      <Spinner />
    ) : (
      <form onSubmit={handleSubmit(onSubmit)}>
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
        </IonList>
        <IonButton
          type='submit'
          disabled={!isValid}
        >
          Créer un ingrédient
        </IonButton>
      </form>
    )
  )
};

export default IngredientForm;