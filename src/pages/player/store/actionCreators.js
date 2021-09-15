/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-15 21:41:35
 * @LastEditors: monster
 * @LastEditTime: 2021-09-15 23:34:34
 */
import * as types from "./constants";
import * as request from "../request"

const changeCurrentSongAction = (currentSong)=>({
  type: types.CHANGE_CURRENT_SONG,
  currentSong
})

export const getSongDetailAction = (ids) => {
  return dispatch => {
    request.getSongDetail(ids).then(res => {
      console.log(res)
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}
