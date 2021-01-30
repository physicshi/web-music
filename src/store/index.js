import { createStore, applyMiddleware, compose } from 'redux';
//发送异步的请求
import thunk from 'redux-thunk';
import reducer from './reducer';

//为了能在开发者工具redux-devtools看到redux状态
//在redux中继承devtools的中间件；
/**
 * redux-thunk可以让dispatch(action函数)，action可以是一个函数（原来是一个对象）；
 * 该函数会被调用，并且会传给这个函数一个dispatch函数和getState函数；
 *      dispatch函数用于我们之后再次派发action；
 *      getState函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态；
 */

//前者是从浏览器拿的，后者是redux给的
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;