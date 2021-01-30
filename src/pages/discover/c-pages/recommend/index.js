import React, { memo } from 'react';

import GYTopBanner from './c-cpns/top-banner';
import GYHotRecommend from './c-cpns/hot-recommend';
import GYNewAlbum from './c-cpns/new-album';
import GYRecommendRanking from './c-cpns/recommend-ranking';

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style';

function GYRecommend(props) {

    return (
        <RecommendWrapper>
            <GYTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <GYHotRecommend/>
                    <GYNewAlbum/>
                    <GYRecommendRanking/>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(GYRecommend);


// function GYRecommend(props) {
//     /**
//      * 我们还需要在这里发送网络请求，需要用到redux-thunk中间件
//      * 我们需要把action（这时的action是函数了）写到actionCreator里
//      */

//     const {getBanners,topBanner}=props;
//     useEffect(() => {
//         getBanners();
//     }, [getBanners])


//     return (
//         <div>
//             <h3>GYRecommend:{topBanner.length}</h3>
//         </div>
//     )
// }

// /**
//  * mapStateToProps：用于将state映射到一个对象中，对象中包含我们需要的属性；
//  * mapDispatchToProps：用于将dispatch映射到对象中，对象中包含在组件中可能操作的函数；
//  *                     当调用该函数时，本质上其实是调用dispatch(对应的Action)；
//  */
// const mapStateToProps = state => ({
//     topBanner: state.recommend.topBanners //state是最外层的state（放到store里合并后的state）
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(GYRecommend));
