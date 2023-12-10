import { FC } from 'react';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

import { IIngredient } from '@/models/ingredients';
import './Card.scss';

interface IIngredientCardProps {
  ingredient: IIngredient;
}

const IngredientCard: FC<IIngredientCardProps> = ({ ingredient }) => {
  return (
    <IonCard>
      <img alt='Default ingredient card image' src='/assets/images/card-default.png' />
      <IonCardHeader>
        <IonCardTitle>{ingredient.name}</IonCardTitle>
      </IonCardHeader>
    </IonCard>
  )
};

export default IngredientCard;