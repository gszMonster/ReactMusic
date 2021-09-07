/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-06 22:03:17
 * @LastEditors: monster
 * @LastEditTime: 2021-09-07 22:58:24
 */
import styled from "styled-components";

const small = {
  width: 100,
  size: 100,
  bgp: 0
}

export const AlbumCoverWrapper = styled.div`
  width: 118px;
  height: 150px;
  background-position: -260px 100px;
  
  .cover {
    width: 100px;
    height: 100px;
    margin-bottom: 7px;
    position: relative;

    img {
      display: block;
      height: 100%;
      width: 100%;
    }
  }

  .msk {
    width: 118px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background-position: 0 -570px;
  }

  p {
    width: 90%;
    line-height: 18px;

    a {
      display: inline-block;
      width: 100%;
    }
  }
  .song-name {
    color: #000;
  }
  .author {
    color: #666;
  }
`
