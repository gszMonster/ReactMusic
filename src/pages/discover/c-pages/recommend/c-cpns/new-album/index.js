/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-02 23:25:58
 * @LastEditors: monster
 * @LastEditTime: 2021-09-07 23:03:53
 */
import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector,shallowEqual } from "react-redux"

import { getNewAlbumsAction } from "../../store/actionCreators"
import { NEW_ALBUM_LIMIT } from "@/common/constants";

import { Carousel } from "antd";
import ThemeHeader from "@/components/theme-header-rcm";
import AlbumCover from "@/components/album-cover";
import { NewAlbumWrapper } from "./style";

export default memo(function MKNewAlbum() {

  const dispatch = useDispatch();
  const { newAlbums } = useSelector((state)=>({
    newAlbums: state.getIn(["recommend","newAlbums"])
  }),shallowEqual);

  const pageRef = useRef();
  useEffect(()=>{
    dispatch(getNewAlbumsAction(NEW_ALBUM_LIMIT));
  },[dispatch])

  return (
    <NewAlbumWrapper>
      <ThemeHeader title="新碟上架" />
      <div className="content">
        <div className="inner-content">
          <button className="arrow arrow-left sprite_02" 
            onClick={e=>pageRef.current.prev()}>
          </button>
          <div className="roll">
            <Carousel dots={false} ref={pageRef}>
              {
                [0,1].map(item=>(
                  <div key={item} className="roll-item">
                    {
                      newAlbums.slice(item*5,(item+1)*5)
                      .map(iten=>(
                        <AlbumCover info={iten} key={iten.id}/>
                      ))
                    }
                  </div>
                ))
              }
            </Carousel>
          </div>
          <button className="arrow arrow-right sprite_02" 
            onClick={e=>pageRef.current.next()}>
          </button>
        </div>
      </div>
    </NewAlbumWrapper>
  )
});
