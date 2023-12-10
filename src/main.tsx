import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import store from './store/store.ts';
import { Provider } from 'react-redux';
import './assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
