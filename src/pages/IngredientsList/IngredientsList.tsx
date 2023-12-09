import { FC } from 'react';
import { useHistory } from 'react-router';
import { IonButton, IonCol, IonRow } from '@ionic/react';

const IngredientsList: FC = () => {
  const history = useHistory();

  return (
    <>
      <IonRow className='ion-justify-content-between'>
        <IonCol>
          <h1>Liste des ingrédients</h1>
        </IonCol>
        <IonCol>
          <IonButton color='tertiary' onClick={() => history.push('/ingredients/new')}>Créer</IonButton>
        </IonCol>
      </IonRow>
    </>
  );
};

export default IngredientsList;