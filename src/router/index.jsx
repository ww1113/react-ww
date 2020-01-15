import React from 'react'
import {BrowserRouter as Router, Redirect,Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable'


/**
 * 组件异步加载装置 => react-loadable
 * @param {String} filename
 */
const loadable = (filename) => Loadable({
  loader:() => import(`@/page/${filename}`),
  loading:() => <div></div>
});



/**
 * 根路由集合
 */
const rootRouters = [
  {
    //根路由匹配
    path:'/',
    exact:true,
    component:() => <Redirect to='/home'/>
  },
  {
    // 404 匹配
    path:'*',
    component:loadable('404')
  }
];

/**
 *  嵌套路由集合
 */
const routers = [
  {
    // 404 匹配
    path:'/',
    component:(null)
  },
  {
    path:'/home',
    component:loadable('home/index.jsx')
  },
  {
    path:'/mine',
    component:loadable('home/mine.jsx')
  },
  {
    // 404 匹配
    path:'*',
    component:loadable('404')
  }
];


export {
  rootRouters,
  routers,
}
