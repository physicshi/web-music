
import * as actionType from './constants'

//使用Immutable
import { Map } from 'immutable';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],

    upRankings: {},
    newRankings: {},
    originRankings: {}
})


//常量就去constants里找
function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_TOP_BANNERS:
            // return { ...state, topBanners: action.topBanners }
            //这时候就有了数据 （在上一层的index里的topBanners里拿到数据 topBanner: state.recommend.topBanners ）

            //immutable会返回一个新的对象
            return state.set("topBanners", action.topBanners);
        case actionType.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.hotRecommends);
        case actionType.CHANGE_NEW_ALBUMS:
            return state.set("newAlbums", action.newAlbums);

        case actionType.CHANGE_UP_RANKING:
            return state.set("upRankings", action.upRankings);
        case actionType.CHANGE_NEW_RANKING:
            return state.set("newRankings", action.newRankings);
        case actionType.CHANGE_ORIGIN_RANKING:
            return state.set("originRankings", action.originRankings);
        default:
            return state;
    }
}

export default reducer;