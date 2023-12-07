import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { IPage, pages } from './config/router';
import Page from './pages/Page';
import Menu from './components/Menu/Menu';

const App: React.FC = () => {
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
              <Route key={index} path={page.url} exact={true}>
                <Page />
                {page.subPages?.map((subPage: IPage, subIndex: number) => (
                  <Route key={subIndex} path={subPage.url} exact={true}>
                    <Page />
                  </Route>
                ))}
              </Route>
            ))}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
