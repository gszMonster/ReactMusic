/*
 * @Descripttion: 推荐页面-榜单
 * @version: 
 * @Author: monster
 * @Date: 2021-09-08 20:42:45
 * @LastEditors: monster
 * @LastEditTime: 2021-09-08 22:47:12
 */
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopRankingsAction } from "../../store/actionCreators";

import ThemeHeaderRcm from "@/components/theme-header-rcm";
import TopRanking from "@/components/top-ranking";
import { RcdRankingWrapper } from './style';

export default memo(function MKRcdRanking() {

  const dispatch = useDispatch();

  const { topRankings, newRankings, originRankings } = useSelector(state => ({
    topRankings: state.getIn(["recommend","topRankings"]),
    newRankings: state.getIn(["recommend","newRankings"]),
    originRankings: state.getIn(["recommend", "originRankings"])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopRankingsAction("19723756"));
    dispatch(getTopRankingsAction("3779629"));
    dispatch(getTopRankingsAction("2884035"));
  }, [dispatch])

  return (
    <RcdRankingWrapper>
      <ThemeHeaderRcm title="榜单"/>
      <div className="blist">
        <TopRanking info= {topRankings}/>
        <TopRanking info={newRankings}/>
        <TopRanking info={originRankings}/>
      </div>
    </RcdRankingWrapper>
  )
})
