import { FC } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { IRecipe } from '@/models/recipes';

interface ICardProps {
  recipe: IRecipe;
}

const Card: FC<ICardProps> = ({ recipe }) => {
  return (
    <IonCard>
      <img alt='Default card image' src='/assets/images/card-default.png' />
      <IonCardHeader>
        <IonCardTitle>{recipe.name}</IonCardTitle>
        <IonCardSubtitle>Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>Lorem ipsum</IonCardContent>
    </IonCard>
  )
};

export default Card;