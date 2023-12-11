import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { setupIonicReact } from '@ionic/react';
import { ApolloProvider } from '@apollo/client';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { GraphQLClient } from '@/config/apollo';
import App from '@/App';
import './theme/variables.scss';
import './theme/layout.scss';

setupIonicReact();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ApolloProvider client={GraphQLClient}>
      <App />
    </ApolloProvider>
  </StrictMode>
);