import { FC, ReactNode } from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useLocation } from 'react-router-dom';

import { IPage, pages } from '@/config/router';
import './Page.scss';

interface IPageProps {
  title: string;
  children: ReactNode;
}

const Page: FC<IPageProps> = ({ title, children }) => {
  const location = useLocation();

  const currentPage = pages.find((page: IPage) => page.path === location.pathname);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {currentPage?.menuTitle && currentPage.menuIcon ? <IonMenuButton /> : <IonBackButton />}
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
