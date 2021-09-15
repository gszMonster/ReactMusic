/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-11 15:10:43
 * @LastEditors: monster
 * @LastEditTime: 2021-09-15 23:34:05
 */

import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getSongDetailAction } from "../store/actionCreators";

import { Slider } from "antd";
import {
  SongsPlayerBarWrapper,
  Control,
  PlayInfo,
  Operate
} from "./style"

export default memo(function MKSongsPlayerBar() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction("401722038"));
  }, [dispatch])

  return (
    <SongsPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control>
          <button className="prev sprite_playbar"></button>
          <button className="play sprite_playbar"></button>
          <button className="next sprite_playbar"></button>
        </Control>
        <PlayInfo>
          <div className="header">
            <img src="http://p3.music.126.net/-0t74uqbsV5aSMktFn0SPA==/109951165830998491.jpg?param=34y34" alt="图片正在加载..."></img>
          </div>
          <div className="play">
            <div className="song-info">
              <a href="/todo" className="song-name text-nowrap">不醉不会</a>
              <a href="/todo" className="singer-name text-nowrap">徐佳莹</a>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">04:52</span>
                <span className="divider">/</span>
                <span className="duration-time">6:32</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operate>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operate>
      </div>
    </SongsPlayerBarWrapper>
  )
})

