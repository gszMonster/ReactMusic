/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-06-27 23:39:22
 * @LastEditors: monster
 * @LastEditTime: 2021-09-13 22:38:06
 */
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Provider } from "react-redux";

import store from "./store";
import routers from './router';

import MKAppHeader from "components/app-header";
import MKAppFooter from "components/app-footer";
import MKSongsPlayerBar from "./pages/player/songs-player-bar";
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <Provider store={ store }>
      <HashRouter>
        <MKAppHeader />
        { renderRoutes(routers) }
        <MKAppFooter />
        <MKSongsPlayerBar />
      </HashRouter>
    </Provider>
  )
})
