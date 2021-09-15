/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-12 00:13:40
 * @LastEditors: monster
 * @LastEditTime: 2021-09-15 21:57:19
 */
// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store"
import { reducer as playerReducer } from "../pages/player/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
});

export default cReducer;
