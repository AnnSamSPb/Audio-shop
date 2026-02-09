import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css'
import { store } from './app/store/store.ts';
import App from './app/App.tsx';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container!);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <BrowserRouter basename="/Audio-shop/"> */}
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
