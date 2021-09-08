/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-12 20:58:20
 * @LastEditors: monster
 * @LastEditTime: 2021-09-08 21:23:46
 */
import request from "@/services/request";

//获取轮播图数据
export function getTopBanners() {
  return request({
    url:"/banner"
  });
}

//获取热门推荐数据
export function getHotRecommends(limit) {
  return request({
    url: "personalized",
    params: {
      limit: limit
    }
  });
}

//新碟上架数据获取
export function getNewAlbums(limit) {
  return request({
    url: "album/new",
    params: {
      limit
    }
  })
}

//榜单数据获取
export function getTopRankings(id) {
  return request({
    url:"playlist/detail",
    params: {
      id
    }
  })
}
