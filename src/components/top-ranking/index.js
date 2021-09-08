/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-08 22:26:13
 * @LastEditors: monster
 * @LastEditTime: 2021-09-09 00:27:32
 */

import React, { memo } from 'react';

import { getImgSize } from "@/utils/format-utils"

import { TopRankingWrapper } from './style';

export default memo(function MKTopRanking(props) {
  
  const { info } = props;
  const { tracks=[] } = info;

  return (
    <TopRankingWrapper>
      <div className="top-content">
        <div className="cover">
          <img src={ getImgSize(info.coverImgUrl, 80)} alt="图片正在加载..." className="bg"/>
          <a href="/todo" className="a-cover sprite_cover" title={info.name}>{info.name}</a>
        </div>
        <div className="title">
          <a href="/todo">
            <h3 title={info.title}>{info.name}</h3>
          </a>
          <div className="btn-content">
            <button className="btn sprite_02 play" title="播放"></button>
            <button className="btn sprite_02 favor" title="收藏"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play" title="播放"></button>
                  <button className="btn sprite_icon2 add" title="添加到播放列表"></button>
                  <button className="btn sprite_02 favor" title="收藏"></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className="footer">
        <a href="/todo">查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  )
})

