import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ContextProvider } from "./context/fullbellyContext";
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root'));

registerServiceWorker();

