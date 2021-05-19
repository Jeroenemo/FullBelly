import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from './context/fullbellyContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'));

registerServiceWorker();

