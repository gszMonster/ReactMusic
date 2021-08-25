/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-12 00:28:38
 * @LastEditors: monster
 * @LastEditTime: 2021-08-26 00:48:24
 */
import { Map } from "immutable";

import * as types from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: []
});

function reducer(state = defaultState, action) {
  switch(action.type) {
    case types.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners};
      return state.set("topBanners", action.topBanners);
    case types.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends",action.hotRecommends);
    default:
      return state;
  }
}

export default reducer;
