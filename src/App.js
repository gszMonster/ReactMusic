import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Provider } from "react-redux";

import store from "./store";
import routers from './router';

import MKAppHeader from "components/app-header";
import MKAppFooter from "components/app-footer";
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <Provider store={ store }>
      <HashRouter>
        <MKAppHeader />
        { renderRoutes(routers) }
        <MKAppFooter />
      </HashRouter>
    </Provider>
  )
})
