import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import './nav.css';

import { Link } from 'react-router-dom';

const Navbar = ({links}) => {
  // console.log(links)
  // const [menuItems, setMenuItems] = useState([]);
  // // const location = useLocation();

  // useEffect(() => {
  //   // 模拟从API或配置文件中获取导航菜单数据
  //   const fetchMenuItems = async () => {
  //     const items = [
  //       { path: '/', label: 'Home' },
  //       { path: '/about', label: 'About' },
  //       { path: '/services', label: 'Services' },
  //       { path: '/contact', label: 'Contact' }
  //     ];
  //     setMenuItems(items);
  //   };
  //   fetchMenuItems();
  // }, []);

  return (
    // <nav className="navbar">
    //   {/* <div className="brand">
    //     {/* <Link to="/">My App</Link> 
    //     My App
    //   </div> */}
    //   <ul className="menu">
    //     {menuItems.map((item) => (
    //       <li key={item.path} className="menu-item">
    //         <a to={item.path} className={'/' === item.path ? 'active' : ''}>
    //           {item.label}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <>
        {/* <div className="logo">
            <a href="#">MyWebsite</a>
        </div> */}
        <nav>
            <ul>
              {
                links.map(({text, path}, index) => {
                  return  <li key={index}><Link to={path}>{text}</Link></li>
                })
              }
            </ul>
        </nav>
        {/* <div className="auth-buttons">
            <a href="#" className="login">登录</a>
            <a href="#" className="signup">注册</a>
        </div> */}
    </>
  );
};

export default Navbar;