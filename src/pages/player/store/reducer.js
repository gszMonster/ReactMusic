/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-15 21:41:54
 * @LastEditors: monster
 * @LastEditTime: 2021-09-15 23:29:22
 */

import { Map } from "immutable";

import * as types from "./constants";

const defaultState = Map({
  currentSong: {}
})

function reducer(state = defaultState, action){
  switch(action.type){
    case types.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    default:
      return state;
  }
}

export default reducer;
