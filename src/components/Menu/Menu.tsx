import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';

import { IPage, pages } from '../../config/router';
import './Menu.scss';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="pages-list">
          <IonListHeader>Makan</IonListHeader>
          <IonNote>Makan</IonNote>
          {pages.map((page: IPage, index: number) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === page.url ? 'selected' : ''}
                routerLink={page.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon aria-hidden="true" slot="start" icon={page.icon} />
                <IonLabel>{page.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
            )
          )}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
