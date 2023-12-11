import { FC } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/client';
import { IonButton, IonCol, IonRow, IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';

import { GET_RECIPES, IRecipesQuery } from '@/graphql/queries/recipes';
import { IRecipe } from '@/models/recipes';
import Spinner from '@/components/Spinner/Spinner';
import RecipeCard from '@/components/Card/RecipeCard';

const RecipesList: FC = () => {
  const history = useHistory();

  const { loading, data } = useQuery<IRecipesQuery>(GET_RECIPES);

  return (
    <>
      <IonRow>
        <IonCol>
          <IonButton
            color='tertiary'
            className='ion-float-right'
            onClick={() => history.push('/recipes/new')}
          >
            <IonIcon slot="start" icon={addCircle} />
            Créer
          </IonButton>
        </IonCol>
      </IonRow>
      {loading ? (
        <Spinner />
      ) : (
        data?.recipes.length === 0 ? (
          <p>TODO : Aucune recette à afficher</p>
        ) : (
          data?.recipes.map((recipe: IRecipe, index: number) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        )
      )}
    </>
  );
};

export default RecipesList;