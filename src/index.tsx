import React from 'react';
import {createRoot} from "react-dom/client";
import App from '@/App';
import {Provider} from "react-redux";
import {store} from "@/store";

const rootEl = document.getElementById('root')
if(!rootEl) throw new Error('cannot access root element')
const root = createRoot(rootEl)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)