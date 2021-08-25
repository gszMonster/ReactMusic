/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-12 00:29:13
 * @LastEditors: monster
 * @LastEditTime: 2021-08-26 00:48:58
 */
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

const changeHotRecommendsAction = (res) => ({
    type: types.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})
export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    request.getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendsAction(res))
    })
  }
}

