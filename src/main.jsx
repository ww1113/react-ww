import React from 'react'
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import finalCreateStore from './store/configureStore'  //引入store配置
// import reducer from './reducers/index';
import App from './app.jsx';



// 创建 Redux 的 store 对象
//const store = finalCreateStore(reducer);
render(
  <App/>,
  document.getElementById('root')
)
