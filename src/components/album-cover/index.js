/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-06 22:03:10
 * @LastEditors: monster
 * @LastEditTime: 2021-09-07 22:55:44
 */
import React, { memo } from 'react';

import { getImgSize } from "@/utils/format-utils";

import { AlbumCoverWrapper } from './style';

export default memo(function MKAlbumCover(props) {
  const {info} = props;
  return (
    <AlbumCoverWrapper className="sprite_02">
      <div className="cover">
        <img src={getImgSize(info.picUrl,100)} alt="图片正在加载..."></img>
        <a href="todo" className="msk sprite_cover"></a>
      </div>
      <p>
        <a href="todo" className="song-name text-nowrap">{info.name}</a>
      </p>
      <p>
        <a href="todo" className="author text-nowrap">{info.artist.name}</a>
      </p>
    </AlbumCoverWrapper>
  )
})
