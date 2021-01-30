/**
 * 合并reducer
 */
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

//组合reducer的时候，也需要每次返回一个新的对象（每次修改完后，另外的地方要做出一个更新），如果通过...的方式进行拷贝，也不是特别合适
// 所以要引入一个新的库 redux-immutable  redux->redux-immutable ，新的combineReducers可以将普通的对象转换为immutable对象
//不过因为这里最外层的state也变成一个immutable了，所以自己再用的时候就不能state.recommend拿到了
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";

// import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
});

export default cReducer;