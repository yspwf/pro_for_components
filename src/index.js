import React, { useState,Suspense, useEffect, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import '../common';
import '../components/HiView';
import './index.css';

import {NavBar, YCard, YButton, YCheck, YRadio, YLoading} from '../components';

import { BrowserRouter, Routes, Route, Link, useSearchParams, Outlet } from 'react-router-dom';

// import About from './about';
// import Service from './service';
// import Contact from './contact';
// import Login from './login';

const About = lazy(()=> import('./about' ));
const Service = lazy(()=> import('./service'));
const Contact = lazy(()=> import('./contact'));
const Login = lazy(()=> import('./login'));


function LoadingFallback({ delay = 200 }) {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    console.log("LoadingFallback")
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!showLoading) {
    return null;
  }

  return <YLoading view={showLoading} />;
}

const Loader = () => {
  return (
    <div>loading ......</div>
  )
}

const LazyLoad = (Comp) => (
  <Suspense fallback={<Loader/>}>{Comp}</Suspense>
)

const style2 = {
  "border": "none", 
  // "padding": "50px 90px"
  "width": '20%',
  "background": "linear-gradient(80deg, #537cee, #b9e2ed)",
  "padding": "25px",
}

const style3 = {
  "border": "none", 
  // "padding": "50px 90px"
  "width": '20%',
  "background": "linear-gradient(45deg, #537cee, #b9e2ed)",
  "padding": "25px",
}

const style4 = {
  "border": "none", 
  // "padding": "50px 90px"
  "width": '20%',
  "background": "linear-gradient(120deg, #537cee, #b9e2ed)",
  "padding": "25px",
}



const App = () => {

  return <>
    {/* <div className="header">
      <div style={{"width":"80%", "margin":"0 auto", "display":"flex"}}>
        <div style={{"padding": "10px 20px 10px 0", "marginRight":"55%", "fontSize": "16px"}}>Hi.ui</div>
        <NavBar links={links}/>
      </div>
    </div> */}
		<div className="main" style={{"width": "80%", "margin": "0 auto"}}>
      <h1 style={{"fontSize": "50px", "textAlign": "center", "padding": "100px 0","color": "#fff"}}>Hi.ui</h1>
      <div style={{"display":"flex", "justifyContent":"space-between", "padding":"90px 0"}}>
        <YCard classname="carp">
          <div style={{"color": "rgb(228 228 228)", "marginBottom": "5px"}}>组件丰富</div>
          <div style={{"position":"relative","padding": "0 0 35px 0"}}>
            <div className="carpIcon">
              <svg t="1743148536096" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2838" >
              <path d="M979.797333 386.048v163.925333l39.367111 45.226667-75.662222 65.735111-68.977778-65.706667 41.472-46.478222v-135.566222c-223.431111 91.392-284.017778 119.751111-333.511111 141.937778-49.578667 22.186667-85.248 22.101333-134.456889 3.726222-49.152-18.346667-272.014222-103.082667-388.152888-158.208-77.511111-36.778667-82.574222-60.16 1.336888-91.306667 109.368889-41.301333 279.153778-107.264 375.04-143.303111 56.775111-22.784 86.784-35.271111 138.894223-9.272889 93.041778 38.058667 294.456889 117.191111 400.128 160.512 92.017778 39.736889 30.151111 52.849778 4.551111 68.778667zM593.351111 623.217778c54.044444-22.158222 126.890667-58.766222 206.392889-92.501334v271.075556s-102.798222 108.373333-283.448889 108.373333c-194.56 0-299.662222-108.373333-299.662222-108.373333v-253.013333c61.297778 24.746667 130.161778 46.08 213.504 74.439111 51.342222 18.033778 116.536889 24.32 163.214222 0z" fill="#3ddedd" p-id="2839"></path>
              </svg>
            </div>
            <div className="carpText">丰富的组件助力你的开发</div>
          </div>
        </YCard>
        <YCard classname="carp">
          <div style={{"color": "rgb(228 228 228)", "marginBottom": "5px"}}>社区活跃</div>
          <div style={{"position":"relative","padding": "0 0 35px 0"}}>
              <div className="carpIcon">
                <svg t="1743149540141" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1527">
                  <path d="M969.6 436.48L547.8656 14.9504a50.944 50.944 0 0 0-71.68 0L54.4512 436.48a51.2 51.2 0 0 0 35.84 87.04h48.896v394.24A106.24 106.24 0 0 0 245.4272 1024h533.1456a106.1888 106.1888 0 0 0 106.0864-106.0864v-394.24h48.9472a51.2 51.2 0 0 0 35.84-87.04z m-166.5024 481.28a24.832 24.832 0 0 1-24.5248 24.4736H245.4272a24.832 24.832 0 0 1-24.4736-24.4736V496.128a41.3696 41.3696 0 0 0-0.768-6.7072 41.8304 41.8304 0 0 0 0.5632-6.7072 40.96 40.96 0 0 0-40.96-40.96h-15.36L512.0256 94.3104l347.5968 347.5968h-15.7184a40.704 40.704 0 0 0-39.2704 51.7632 40.96 40.96 0 0 0-1.536 10.9568z" p-id="1528" fill="#3ddedd"></path>
                  <path d="M595.9936 378.88a166.2464 166.2464 0 0 0-81.2032 21.248 166.2464 166.2464 0 0 0-247.552 145.0496c0 187.136 222.9248 285.44 232.3968 289.536a40.4992 40.4992 0 0 0 16.1792 3.328 40.96 40.96 0 0 0 20.48-5.4784c23.0912-13.4144 225.9968-135.3728 225.9968-287.3856A166.5024 166.5024 0 0 0 595.9936 378.88z m-82.432 371.8144c-46.4896-24.6272-164.7104-97.8944-164.7104-205.5168a84.5824 84.5824 0 0 1 139.4688-64.512 40.96 40.96 0 0 0 52.8896 0 84.5824 84.5824 0 0 1 139.4688 64.4608c0 80.2304-107.7248 166.912-167.1168 205.5168z" p-id="1529" fill="#3ddedd"></path>
                </svg>
              </div> 
              <div className="carpText">活跃的社区为你提供丰富的案列和解决方案</div>
          </div>
        </YCard>
        <YCard classname="carp">
          <div style={{"color": "rgb(228 228 228)", "marginBottom": "5px"}}>技术新颖</div>
          <div style={{"position":"relative","padding": "0 0 35px 0"}}>
            <div className="carpIcon">
              <svg t="1743149648005" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1634">
                <path d="M328 512l81.6 108.8a32 32 0 0 1-51.2 38.4l-96-128a32 32 0 0 1 0-38.4l96-128a32 32 0 1 1 51.2 38.4L328 512zM710.4 620.8a32 32 0 0 0 51.2 38.4l96-128a32 32 0 0 0 0-38.4l-96-128a32 32 0 1 0-51.2 38.4l81.6 108.8-81.6 108.8zM559.232 646.944a32 32 0 0 1-62.464-13.888l64-288a32 32 0 0 1 62.464 13.888l-64 288z" fill="#3ddedd" p-id="1635"></path>
                <path d="M874.56 739.904a32 32 0 1 1 41.984 48.32l-220.48 195.936a32 32 0 0 1-20.96 7.84H195.04C140.16 992 96 946.624 96 891.072V132.928C96 77.376 140.16 32 195.04 32h633.92C883.84 32 928 77.376 928 132.928v134.976a32 32 0 0 1-64 0V132.928C864 112.32 848.096 96 828.96 96H195.04C175.904 96 160 112.32 160 132.928v758.144C160 911.68 175.904 928 195.04 928h468.096l211.456-188.096z" fill="#3ddedd" p-id="1636"></path>
                <path d="M928 763.2a32 32 0 0 1-64 0V672a32 32 0 0 1 64 0v91.2z" fill="#3ddedd" p-id="1637"></path>
              </svg>
            </div>
            <div className="carpText">最新的技术为页面的运行保驾护航</div>
          </div>
        </YCard>
        <YCard classname="carp">
          <div style={{"color": "rgb(228 228 228)", "marginBottom": "5px"}}>知识库丰富</div>
          <div style={{"position":"relative","padding": "0 0 35px 0"}}>
            <div className="carpIcon">
              <svg t="1743149715243" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1502">
                <path d="M876.407224 954.162564H185.412484a46.694369 46.694369 0 0 1-46.899168-46.557836c0-25.66825 21.026119-46.489569 46.899168-46.489569h491.929272V0H138.513316C99.737875 0 68.266962 31.266112 68.266962 69.836753v837.767975A116.735922 116.735922 0 0 0 185.412484 1023.999317h690.99474a35.020777 35.020777 0 0 0 35.15731-34.884243 35.020777 35.020777 0 0 0-35.15731-34.95251z" fill="#3ddedd" p-id="1503"></path>
                <path d="M834.081919 0H730.862787v843.297571h103.219132c42.803171 0 77.482615-30.651713 77.482615-68.403154V68.334888C911.564534 30.651713 876.88509 0 834.081919 0z" fill="#3ddedd" p-id="1504"></path>
              </svg>
            </div>
            <div className="carpText">丰富的文档和案列</div>
          </div>
        </YCard>
      </div>
    </div>
	
    <div className="main" style={{"width": "80%", "margin": "0 auto", "display": "flex", "justifyContent": "space-between", "padding": "80px 0"}}>
      <YButton type="success" />
      <YCheck style={{"alignItems": "center", "color":" #fff"}} label="多选" checked={true}/>
      <YButton type="error" />
      <YRadio style={{"background":"none","color": "#fff"}} checked={true}/>
      <YButton type="warn" />
      <YButton type="danger" />
     
    </div>
    <div className="main" style={{"width": "80%", "margin": "0 auto", "color":"#fff", "textAlign": "center", "padding": "20px 0"}}><h1>版权信息</h1></div>
  </>
}

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

const root = document.getElementById('root');
createRoot(root).render(<BrowserRouter>
<Suspense fallback={<Loader/>}>
  <Routes>
    <Route path="/" element={LazyLoad(<Layout/>)} >
      <Route index element={LazyLoad(<App/>)} />
      <Route path="about" element={LazyLoad(<About/>)} />
      <Route path="service" element={LazyLoad(<Service/>)} />
      <Route path="contact" element={LazyLoad(<Contact/>)} />
    </Route>
    <Route path="login" element={<Login/>} />
  </Routes>
  </Suspense>
</BrowserRouter>);
