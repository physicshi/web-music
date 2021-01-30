import React, { memo } from 'react';
import { shallowEqual, useDispatch,useSelector } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/constants';

import GYThemeRCM from '@/components/theme-header-rcm';
import GYSongsCover from '@/components/songs-cover';

import {
    HotRecommendWrapper
} from './style';
import { useEffect } from 'react';

import { getHotRecommendAction } from '../../store/actionCreators';

export default memo(function GYHotRecommend() {
    //state
    
    //redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual);
    const dispatch = useDispatch();

    //other hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
    }, [dispatch])

    return (
        <HotRecommendWrapper>
            <GYThemeRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]} />
            <div className="recommend-list">
                {
                    hotRecommends.map((item,index)=>{
                        return (
                        <div>
                            <GYSongsCover key={item.id} info={item}/>
                        </div>
                        )
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
