import * as types from "./constants";
import * as request from "../request"

const changeTopBannersActions = (res) => ({
  type: types.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannersAction = () => {
  return dispatch => {
    request.getTopBanners().then(res => {
      dispatch(changeTopBannersActions(res));
    });
  }
}

