/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-15 21:42:59
 * @LastEditors: monster
 * @LastEditTime: 2021-09-15 23:39:00
 */

import request from "@/services/request";

/**
 * 获取歌曲详情
 * @param {歌曲id} ids 
 * @returns 
 */
export function getSongDetail(ids) {
  return request({
    url: "song/detail",
    params: {
      ids
    }
  })
}