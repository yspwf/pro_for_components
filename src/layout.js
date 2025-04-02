import React, {useState} from 'react';
import {NavBar} from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [links, setLinks] = useState([
    {
      path:'/',
      text:"首页"
    },
    {
      path:'/service',
      text:"服务"
    },
    {
      path:'/about',
      text:"关于我们"
    },
    {
      path:'/contact',
      text:"联系我们"
    },
    {
      path:'/login',
      text:"登录"
    }
  ]);

  return <>
    <div className="header" style={{"background": "linear-gradient(180deg, rgb(70 111 225), rgb(112 125 242))"}}>
      <div style={{"width":"80%", "margin":"0 auto", "display":"flex", "color": "rgb(228 228 228)"}}>
        <div style={{"padding": "10px 20px 10px 0", "marginRight":"50%", "fontSize": "16px"}}>Hi.ui</div>
        <NavBar links={links}/>
      </div>
    </div>
    <Outlet/>
  </>
}

export default Layout;