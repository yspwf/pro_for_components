import React from 'react';

const YHeader = ({children}) => {
  return (
    <>
    {children}
    {/* <NavBar/> */}
      {/* <div style={box}>
        <input type="text" style={input} placeholder="请输入商品" />
        <input type="button" value="搜索" style={button} />
      </div> */}
    </>
  )
}

YHeader.prototype.name = 'YHeader';

export default YHeader;