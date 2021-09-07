/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-02 23:26:08
 * @LastEditors: monster
 * @LastEditTime: 2021-09-07 23:06:48
 */
import styled from "styled-components";

export const NewAlbumWrapper = styled.div`

  .content {
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
  }
  .inner-content {
    height: 184px;
    border: 1px solid #fff;
    box-sizing: border-box;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .arrow {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
  .arrow-left {
    background-position: -260px -75px;
  }
  .arrow-left:hover {
    background-position: -280px -75px;
  }
  .arrow-right {
    background-position: -300px -75px;
  }
  .arrow-right:hover {
    background-position: -320px -75px;
  }
  
  .roll {
    width: 645px;
    height: 150px;
  }
  .roll-item {
    display: flex !important;
    justify-content: space-around;
  }
`

