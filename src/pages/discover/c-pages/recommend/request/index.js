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
