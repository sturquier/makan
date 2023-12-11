import { FC } from 'react';
import { IonButton, IonTextarea, IonItem, IonLabel, IonRow, IonText, IonIcon } from '@ionic/react';
import { trashOutline } from 'ionicons/icons';

interface IInstructionsFormProps {
  instructions: string[];
  onInstructionsChangeCallback: (instructions: string[]) => void;
}

const InstructionsForm: FC<IInstructionsFormProps> = ({ instructions, onInstructionsChangeCallback }) => {
  const addInstruction = () => {
    const newInstructions = [...instructions, ''];

    onInstructionsChangeCallback(newInstructions);
  };

  const deleteInstruction = (index: number) => {
    const newInstructions = [...instructions.filter((_: string, i: number) => i !== index)];

    onInstructionsChangeCallback(newInstructions);
  };

  return (
    <>
      <IonRow className='ion-margin ion-justify-content-between'>
        <h4>Instructions</h4>
        <IonButton color='tertiary' fill='outline' onClick={addInstruction}>Ajouter</IonButton>
      </IonRow>
      {instructions.map((_: string, index: number) => (
        <IonItem key={index}>
          <IonLabel>Instruction {index + 1} <IonText color="danger">*</IonText></IonLabel>
          <IonIcon icon={trashOutline} color='danger' onClick={(): void => deleteInstruction(index)}/>
          <IonTextarea
              fill='solid'
              autoGrow={true}
              maxlength={200}
              counter={true}
              counterFormatter={(inputLength: number, maxLength: number) => `${maxLength - inputLength} caractères restants`}
              label='Entrez une instruction'
              labelPlacement='floating'
            />
        </IonItem>
      ))}
    </>
  );
};

export default InstructionsForm;
