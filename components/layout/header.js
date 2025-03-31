import React from 'react';

const box = {
  width:"500px",
  height:"40px",
  border:"2px solid red",
  margin:"auto",
}

const input = {
  float:"left",
  width:'400px',/*宽400*/
  height:"100%",/*高38（因为文本框内外边框要占用1像素所以总体高度减2，其他盒子同理）*/
  outline:"none",
  border:"none",/*取消文本框内外边框*/
}

const button = {
	float:"left",
	width:"96px",
	height:"100%",
	color:"white",
	backgroundColor:"red",/*将按钮背景设置为红色，字体设置为白*/
	border:"none",
	outline:"none",/*取消边框和外边框将按钮边框去掉*/
}

// import NavBar from './navbar';


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

export default YHeader;