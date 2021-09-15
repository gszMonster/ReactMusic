/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-11 15:10:53
 * @LastEditors: monster
 * @LastEditTime: 2021-09-15 00:39:51
 */

import styled from "styled-components";

export const SongsPlayerBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 53px;
  z-index: 1002;
  background-position: 0 0;
  background-repeat: repeat-x;
  display: flex;
  align-items: flex-end;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 47px;
  }

`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
    :hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    cursor: pointer;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
    :hover {
      background-position-x: -40px;
    }
  }

  .next {
    background-position: -80px -130px;
    :hover {
      background-position: -110px -130px;
    }
  }

`

export const PlayInfo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 642px;

  .header {
    width: 34px;
    height: 34px;
    position: relative;
    margin-right: 15px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }

  .play {
    height: 100%;
    width: 581px;
    .song-info {
      height: 28px;
      
      line-height: 28px;
      .song-name {
        max-width: 300px;
        color: #e8e8e8;
      }
      .singer-name {
        max-width: 220px;
        color: #9b9b9b;
        margin-left: 15px;
      }
    }

    .progress {
      display: flex;
      /* align-items: center; */

      .ant-slider {
        width: 493px;
        padding: 0;
        margin: 0;
        /* margin-top: 4px; */
        margin-right: 10px;
        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;

          :focus {
            box-shadow: 0 0 0 0;
          }
        }
        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png").default}) left -66px;
        }
      }

      .time {
        margin-top: -5px;
        font-size: 12px;
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
          color: #797979;
        }
        .duration-time {
          color: #797979;
        }
      }
    }
  }

`

export const Operate = styled.div`
    display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: -66px -248px;
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
