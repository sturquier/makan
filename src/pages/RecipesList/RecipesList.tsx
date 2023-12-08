import { FC } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import { IonButton, IonCol, IonRow } from '@ionic/react';

import { GET_RECIPES, IRecipesQuery } from '@/graphql/queries/recipes';
import Spinner from '@/components/Spinner/Spinner';

const RecipesList: FC = () => {
  const history = useHistory();
  const { loading, data } = useQuery<IRecipesQuery>(GET_RECIPES);

  return (
    <>
      <IonRow className='ion-justify-content-between'>
        <IonCol>
          <h1>Rechercher des recettes</h1>
        </IonCol>
        <IonCol>
          <IonButton color='tertiary' onClick={() => history.push('/recipes/add')}>Ajouter</IonButton>
        </IonCol>
      </IonRow>
      {loading ? (
        <Spinner />
      ) : (
        data?.recipes.length === 0 ? (
          <p>Aucune recette à afficher</p>
        ) : (
          <p>TODO</p>
        )
      )}
    </>
  );
};

export default RecipesList;