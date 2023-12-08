import { FC, ReactNode } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Page.scss';

interface IPageProps {
  title: string;
  children: ReactNode;
}

const Page: FC<IPageProps> = ({ title, children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="page-content">
          <>{children}</>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
