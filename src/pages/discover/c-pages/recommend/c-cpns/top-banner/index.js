import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import * as actions from "../../store/actionCreators";

export default memo(function MKTopBanner() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners")
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const bannerRef =  useRef();

  useEffect(() => {
    dispatch(actions.getTopBannersAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  },[])

  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item) => {
                return (
                  <div key={item.targetId}>
                    <img src={item.imageUrl + "?imageView&quality=89"} className="image" alt={item.typeTitle}/>
                  </div>
                );
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <div className="download sprite_download">
            <a className="sprite_download" href="/">下载客户端</a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            <span className="sprite_banner shadow l"></span>
            <span className="sprite_banner shadow r"></span>
          </div>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e=>{bannerRef.current.prev()}}></button>
          <button className="btn right" onClick={e=>{bannerRef.current.next()}}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
