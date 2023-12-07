import { FC } from 'react';
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

const Menu: FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="pages-list">
          <IonListHeader>Makan</IonListHeader>
          <IonNote>Makan</IonNote>
          {pages.filter((page: IPage) => page.menuTitle && page.menuIcon).map((page: IPage, index: number) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === page.path ? 'selected' : ''}
                routerLink={page.path}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon aria-hidden="true" slot="start" icon={page.menuIcon} />
                <IonLabel>{page.menuTitle}</IonLabel>
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
