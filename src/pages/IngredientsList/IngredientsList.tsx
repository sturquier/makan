import { FC } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import { IonButton, IonCol, IonRow, IonGrid, IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';

import { GET_INGREDIENTS, IIngredientsQuery } from '@/graphql/queries/ingredients';
import { IIngredient } from '@/models/ingredients';
import Spinner from '@/components/Spinner/Spinner';
import IngredientCard from '@/components/Card/IngredientCard';

const IngredientsList: FC = () => {
  const history = useHistory();

  const { loading, data } = useQuery<IIngredientsQuery>(GET_INGREDIENTS);

  return (
    <>
      <IonRow>
        <IonCol>
          <IonButton
            className='ion-float-right'
            onClick={(): void => history.push('/ingredients/new')}
          >
            <IonIcon slot="start" icon={addCircle} />
            Créer
          </IonButton>
        </IonCol>
      </IonRow>
      {loading ? (
        <Spinner />
      ) : (
        data?.ingredients.length === 0 ? (
          <p>TODO : Aucun ingrédient à afficher</p>
        ) : (
          <IonGrid>
            <IonRow>
              {data?.ingredients.map((ingredient: IIngredient, index: number) => (
                <IonCol key={index} size='6'>
                  <IngredientCard ingredient={ingredient} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )
      )}
    </>
  );
};

export default IngredientsList;