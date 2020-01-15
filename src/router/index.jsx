import React from 'react'
import {BrowserRouter as Router, Redirect,Route, Switch } from "react-router-dom";
import Home from '@/page/home/index.jsx'
import Mine from '@/page/home/mine.jsx'
import Four from '@/page/404.jsx'

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
// const rootRouters = [
//   {
//     //根路由匹配
//     path:'/',
//     exact:true,
//     component:() => <Redirect to='/home'/>
//   },
//   {
//     // 404 匹配
//     path:'*',
//     component:loadable('404')
//   }
// ];

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
    component:Home
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    // 404 匹配
    path:'*',
    component:Four
  }
];


export {
  routers,
}

