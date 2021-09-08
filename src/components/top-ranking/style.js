/*
 * @Descripttion: 
 * @version: 
 * @Author: monster
 * @Date: 2021-09-08 22:26:22
 * @LastEditors: monster
 * @LastEditTime: 2021-09-09 00:26:54
 */
import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  width: 230px;
  height: 100%;

  .top-content {
    height: 120px;
    padding: 20px 0 0 19px;
    display: flex;
    
    .cover {
      width: 80px;
      height: 80px;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
      }
      .a-cover {
        width: 100%;
        height: 100%;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        background-position: -145px -57px;
        text-indent: -9999px;
      }
    }
    .title {
      margin: 6px 0 0 10px;
      width: 116px;

      h3 {
        font-size: 14px;
      }

      .btn-content {
        margin-top: 10px;

        .btn {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          padding: 0;
          cursor: pointer;
        }
        .play {
          background-position: -267px -205px;
        }
        .favor {
          background-position: -300px -205px;
        }
        .play:hover {
          background-position: -267px -235px;
        }
        .favor:hover {
          background-position: -300px -235px;
        }
      }

    }
  }
  .list {
    height: 320px;

    .list-item {
      height: 32px;
      line-height: 32px;
      display: flex;

      :nth-child(-n+3) .rank{
        color: #c10d0c;
      }

      .rank {
        height: 100%;
        width: 35px;
        font-size: 16px;
        margin-left: 15px;
        text-align: center;
        color: #666;
      }
      .info {
        width: 170px;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
        }

        .operate {
          align-items: center;
          display: none;
          width: 82px;
          margin-left: 8px;
          .btn {
            width: 17px;
            height: 17px;
            margin-right: 10px;
            padding: 0;
            cursor: pointer;

            :nth-child(2) {
              margin: 4px 6px 0 0;
            }
          }
          
          .play {
            background-position: -267px -268px;
            :hover {
              background-position: -267px -288px;
            }
          }
          .add {
            background-position: 0 -700px;
            :hover {
              background-position: -22px -700px;
            }
          }
          .favor {
            background-position: -297px -268px;
            :hover {
              background-position: -297px -288px;
            }
          }
        }

      }

      :hover {
        .operate {
          display: flex;
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }
`
