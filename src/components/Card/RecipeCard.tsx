import { FC } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { IRecipe } from '@/models/recipes';
import './Card.scss';

interface IRecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard: FC<IRecipeCardProps> = ({ recipe }) => {
  return (
    <IonCard>
      <img alt='Default recipe card image' src='/assets/images/card-default.png' />
      <IonCardHeader>
        <IonCardTitle>{recipe.name}</IonCardTitle>
        <IonCardSubtitle>Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>Lorem ipsum</IonCardContent>
    </IonCard>
  )
};

export default RecipeCard;