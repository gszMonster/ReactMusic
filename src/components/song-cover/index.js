/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-31 00:15:53
 * @LastEditors: monster
 * @LastEditTime: 2021-09-01 00:41:04
 */
import React, { memo } from "react";

import { getCount, getImgSize } from "@/utils/format-utils"

import { SongCoverWrapper } from "./style";

export default memo(function MKSongCover(props) {
  const { info, left } = props;
  return (
    <SongCoverWrapper left={left}>
      <div className="cover-top">
        <img src={getImgSize(info.picUrl,140)} alt=""/>
        <a href="/todo" title={info.name} className="cover sprite_cover"> </a>
        <div className="bottom sprite_cover">
          <span className="icon-headset sprite_icon"></span>
          <span className="play-count">{getCount(info.playCount)}</span>
          <span className="icon-play sprite_icon"></span>
        </div>
      </div>
      <div className="cover-bottom">
        <p>{info.name}</p>
      </div>
      <div className="cover-source"></div>
    </SongCoverWrapper>
  )
})
