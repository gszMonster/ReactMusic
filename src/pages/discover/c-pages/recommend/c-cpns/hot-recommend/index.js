/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-25 00:19:27
 * @LastEditors: monster
 * @LastEditTime: 2021-09-01 00:41:17
 */

import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotRecommendsAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import SongCover from '@/components/song-cover';
import { HotRecommentWrapper } from "./style"

export default memo(function MKHotRecomment() {

  const dispatch = useDispatch();

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend","hotRecommends"])
  }),shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommentWrapper>
      <ThemeHeaderRcm title="热门推荐" keywords={['华语','流行','摇滚','民谣','电子']}/>
      <div className="recomment-content">
        {
          hotRecommends.map((item,index) => (
            <SongCover key={item.id} info={item}/>
          ))
        }
      </div>
    </HotRecommentWrapper>
  )
})
