/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-08-31 00:16:22
 * @LastEditors: monster
 * @LastEditTime: 2021-09-01 00:40:47
 */
import styled from "styled-components";

export const SongCoverWrapper = styled.div`
  width: 140px;
  height: 204px;
  margin-bottom: 30px;
  margin-left: ${props => ("0px"&&props.left)};
  
  .cover-top {
    height: 140px;
    width: 140px;
    position: relative;

    &>img {
      width: 140px;
      height: 140px;
    }

    .cover {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      color: #ccc;

      .icon-headset {
        float: left;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin: 8px 5px 8px 10px;
      }
      .play-count {
        float: left;
        margin-top: 6px;
      }
      .icon-play {
        float: right;
        margin: 5px 10px 5px 0px;
        width: 16px;
        height: 17px;
        background-position: 0 0;
      }
    }
  }

  .cover-bottom {
    margin: 8px 0 3px;
    font-size: 14px;
  }

  .cover-source {
    
  }
`
