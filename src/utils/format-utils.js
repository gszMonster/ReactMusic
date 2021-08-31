/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-31 23:57:51
 * @LastEditors: monster
 * @LastEditTime: 2021-09-01 00:17:17
 */

export function getCount(count) {
  if(count < 0) return;
  if(count < 10000) {
    return count;
  }else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万"; 
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
} 

export function getImgSize(imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`
}