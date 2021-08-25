import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  
  .banner {
    height: 100%;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .image {
    height: 285px;
    width: 730px;
  }
`

export const BannerRight = styled.div`
  height: 100%;
  flex: 1;
  position: relative;

  .download {
    width: 100%;
    height: 285px;
    background-position: 0 0;
    overflow: hidden;
  }

  a {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
  }
  a:hover {
    background-position: 0 -290px;
  }
  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }
  .shadow {
    display: block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 285px;
    .l {
      left: -20px;
      background-position: -1px 0;
    }
    .r{
      right: -20px;
      background-position: -20px 0;
    }
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png").default});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`