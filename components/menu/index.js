import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const YMenu = ({menu=[]}) => {

  const [menuList, setMenuList] = useState(() => {
    if(menu.length>0){
      return menu.map((item) => {
        if(item.child) {
          item.openStatus = true;
        }
        return item;
      })
    }
    return [];
  })


  const levelOne = (val) => {
    menuList.map((menuEle) => {
      if(menuEle.default === val.default) {
        menuEle.openStatus = !menuEle.openStatus;
      }
      return menuEle;
    });
    setMenuList([...menuList]);
  }


  const ChildMenu = ({menuBody=[], openStatus}) => {
    return <ul style={{ display: openStatus?'block':'none'}} className="menuBody">
            { 
              menuBody.length>0 && menuBody.map((bodyEle, index) => {
                console.log()
                return <li key={index}>
                  <Link to={bodyEle.path} className="menuLink">{bodyEle.title}</Link>
                  </li>
              }) 
            }
          </ul>
  }

  return <div className="menuBox">
    <ul className="menu">
      {
        menuList.length>0 && menuList.map((menuEle, index) => {
         
          return <li className="menuTitle" key={index}>
                  <div onClick={() => { levelOne(menuEle) }} className="menuLink menuCategory">{menuEle.title}</div>
                  {
                    // menuEle?.child && (
                    //   <ul className="menuBody">
                    //     {
                    //       menuEle.child.map((childEle, index) => {
                    //         return <li key={index}><a className="menuLink">{childEle.title}</a></li>
                    //       })
                    //     }
                    //   </ul>
                    // )
                    menuEle?.child && <ChildMenu openStatus={menuEle?.openStatus} menuBody={menuEle?.child}/>
                  }
                </li>
        })
      }
    </ul>
  </div>
}

export default YMenu;