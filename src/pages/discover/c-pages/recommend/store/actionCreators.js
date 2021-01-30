import * as actionTypes from "./constants";

import { getNewAlbums } from '@/services/recommend';

import {
    getTopBanners,
    getHotRecommends,
    getTopList
} from '@/services/recommend';

//dispatch传入函数就会执行函数，传入对象，就来到reducer了
//定义的返回的action对象
const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

const changeNewAlbumsAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.albums
})

const changeUpRanking=(res)=>({
    type:actionTypes.CHANGE_UP_RANKING,
    upRankings:res.playlist
})

const changeNewRanking=(res)=>({
    type:actionTypes.CHANGE_NEW_RANKING,
    newRankings:res.playlist
})

const changeOriginRanking=(res)=>({
    type:actionTypes.CHANGE_ORIGIN_RANKING,
    originRankings:res.playlist
})


//定义的返回的action函数，内部回调的时候会传过来一个dispatch(redux-hooks useDispatch)
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            //console.log(res);拿到的数据要放到reducer里面
            dispatch(changeTopBannerAction(res))//一旦派发这个action就会来到reducer里面
        })
    }
}

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}

export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        // 到时候会把这个函数传进去，redux内部会主动调用这个函数（因为dispatch了），然后在这个函数里执行网络请求，拿到对应的结果
        getNewAlbums(limit).then(res => {
            // console.log(res); dispatch传入函数就会执行函数，传入对象，就来到reducer了，执行rducer就会把action对象拿过来，见reducer.js
            dispatch(changeNewAlbumsAction(res));//一定要传albums不然别的地方拿不到啊
        })
    }
}

export const getTopListAction=(idx)=>{
    // 内部回调的时候会传过来一个dispatch(来自redux-hooks useDispatch)
    return dispatch=>{
        getTopList(idx).then(res=>{
            switch (idx){
                case 0:
                    dispatch(changeUpRanking(res))
                    break;
                case 2:
                    dispatch(changeNewRanking(res))
                    break;
                case 3:
                    dispatch(changeOriginRanking(res))
                    break;
                default:

            }
        })
    }
}