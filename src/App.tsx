import { FC } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { IPage, pages } from './config/router';
import Menu from './components/Menu/Menu';
import Page from './layouts/Page/Page';

const App: FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/recipes" />
            </Route>
            {pages.map((page: IPage, index: number) => (
              <Route key={index} path={page.path} exact={true}>
                <Page title={page.title}>
                  <page.component />
                </Page>
              </Route>
            ))}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
