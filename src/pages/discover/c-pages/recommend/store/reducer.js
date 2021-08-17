import { Map } from "immutable";

import * as types from "./constants";

const defaultState = Map({
  topBanners: []
});

function reducer(state = defaultState, action) {
  switch(action.type) {
    case types.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners};
      return state.set("topBanners", action.topBanners);
    default:
      return state;
  }
}

export default reducer;
