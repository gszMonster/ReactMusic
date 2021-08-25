import React, { memo } from 'react'
// // import { connect } from "react-redux";
// import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import * as actions from "./store/actionCreators"

import TopBanner from "./c-cpns/top-banner";
import HotRecommend from './c-cpns/hot-recommend';
import { 
  RecommendWrapper,
  Content,
  RecommentRight,
  RecommentLeft
} from "./style"

function MKRecommend(props) {

  return (
    <RecommendWrapper>
      <TopBanner/>
      <Content className="wrap-v2">
        <RecommentRight>
          <HotRecommend/>
        </RecommentRight>
        <RecommentLeft>right</RecommentLeft>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(MKRecommend);

// function MKRecommend(props) {

//   const { topBanners } = useSelector(state => ({
//     // topBanners: state.get("recommend").get("topBanners")
//     topBanners: state.getIn(["recommend","topBanners"])
//   }), shallowEqual);
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     dispatch(actions.getTopBannersAction());
//   }, [dispatch])

//   return (
//     <div>
//       MKRecommend { topBanners.length}
//     </div>
//   )
// }

// export default memo(MKRecommend);



// function MKRecommend(props) {
//   const { getBanners } = props;
  
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       MKRecommend
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(actions.getTopBannersAction())
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(MKRecommend));
