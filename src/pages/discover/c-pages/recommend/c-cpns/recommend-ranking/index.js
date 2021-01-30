import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import GYThemeRCM from "@/components/theme-header-rcm";
import { getTopListAction } from '../../store/actionCreators'

import GYTopRanking from '@/components/top-rankings';

import { RankingWrapper } from './style';

export default memo(function GYRecommendRanking() {
    //redux hooks
    const { upRankings, newRankings, originRankings } = useSelector((state => ({
        upRankings: state.getIn(["recommend", "upRankings"]),
        newRankings: state.getIn(["recommend", "newRankings"]),
        originRankings: state.getIn(["recommend", "originRankings"])
    })), shallowEqual)
    const dispatch = useDispatch();
    //react hooks
    useEffect(() => {
        dispatch(getTopListAction(0)); //dispatch进去一个函数就会来执行 actionCreator里的函数了
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    }, [dispatch])

    return (
        <RankingWrapper>
            <GYThemeRCM title="榜单" />
            <div className="tops">
                <GYTopRanking info={upRankings}/>
                <GYTopRanking info={newRankings}/>
                <GYTopRanking info={originRankings}/>
            </div>
        </RankingWrapper>
    )
})
