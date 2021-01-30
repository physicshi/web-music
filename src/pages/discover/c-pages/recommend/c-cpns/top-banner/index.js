import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

export default memo(function GYTopBanner() {
    //state
    const [currentIndex, setcurrentIndex] = useState(0);

    //reduxHooks的使用
    //组件与redux关联，获取数据和进行操作
    const dispatch = useDispatch();


    //拿到数据，利用useSelector这个Hook，第一个参数传入回调函数，返回一个数据组成的对象
    //但是这里返回的数据（或者说状态）是===来比较的，所以每次通过字面量创建出来的必不是同一个对象
    //所以每次都会重新渲染
    //所以可以传入第二个参数进行浅层比较
    const { topBanners } = useSelector(state => ({
        // topBanners : state.recommend.topBanners 因为换了immutable对象了，所以这里取不到了
        // topBanners : state.recommend.get("topBanners")
        // topBanners : state.get("recommend").get("topBanners") 等价的写法如下
        topBanners: state.getIn(["recommend", "topBanners"])//先取第一层，再取第二层
    }), shallowEqual)
    //发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    const bannerRef = useRef();

    const beforeChange = useCallback((from, to) => {
        setTimeout(() => {
            setcurrentIndex(to);
        }, 0)
    }, [])

    //其他业务逻辑
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")


    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2" >
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={beforeChange}>
                        {topBanners.map((item, index) => {
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                </div>
                            )
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className="left btn" onClick={e => bannerRef.current.prev()}></button>
                    <button className="right btn" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
