/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-12 00:29:13
 * @LastEditors: monster
 * @LastEditTime: 2021-09-08 22:44:47
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

//新碟上架
const changeNewAlbumsAction = (res) => ({
  type: types.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

export const getNewAlbumsAction = (limit) => {
  return dispatch => {
    request.getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbumsAction(res));
    })
  }
}

//榜单
const changeTopRankingsAction = (res) => ({
  type: types.CHANGE_TOP_RANKINGS,
  topRankings: res.playlist
})
const changeNewRankingsAction = (res) => ({
  type: types.CHANGE_NEW_RANKINGS,
  newRankings: res.playlist
})
const changeOriginRankingsAction = (res) => ({
  type: types.CHANGE_ORIGIN_RANKING,
  originRankings: res.playlist
})

export const getTopRankingsAction = (id) => {
  return dispatch => {
    request.getTopRankings(id).then(res => {
      switch(id) {
        case "19723756":
          dispatch(changeTopRankingsAction(res));
          break;
        case "3779629":
          dispatch(changeNewRankingsAction(res));
          break;
        case "2884035":
          dispatch(changeOriginRankingsAction(res));
          break;
        default:
      }
    })
  }
}

