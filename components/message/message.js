import React from 'react';
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react';
import './message.css';

// interface Props {
//   /**
//    * 提示信息
//    */
//   msg: string;

//   /**
//    * 提示类型 success 成功/error 失败/info 常规
//    */
//   type: "success" | "error" | "info" | "waring";

//   /**
//    * 提示高度
//    */
//   top: number;
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// let timer1: NodeJS.Timeout;
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// let timer2: NodeJS.Timeout;

let timer1;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let timer2;

function Message(props) {
  const { msg } = props;
  const _type = props.type || 'info';
  const [is_show, setIsShow] = useState(false); // 是否显示
  useEffect(() => {
    if (is_show) return;
    timer1 = setTimeout(() => {
      setIsShow(true);
    }, 10);
    timer2 = setTimeout(() => {
      setIsShow(false);
    }, 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  });

  return (
    <div
      style={{ top: props.top }}
      className={`${!is_show ? 'opacity' : ''} ${is_show ? _type : ''} container`}
    >
       <span className='text'>{msg}</span>
    </div>
  );
}

let count = 0 // 消息框显示数量
let _count = 0 // 当前消息框显示数量

export default function YMessage(
  message,
  type = 'info'
)  {
  let timer;
  const top = 42 + 58 * count
  const el = document.createElement('div')
  document.body.appendChild(el)
  const root = ReactDOM.createRoot(el)
  root.render(<Message msg={message} top={top} type={type} />)  // 渲染到对应的div里面
  count++
  _count++
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timer = setTimeout(() => {
    _count--
    // 如果当前没有消息框显示，则重置消息框数量
    if (_count === 0) count = 0
    document.body.removeChild(el)
  }, 3500) // 3.5s后自动关闭，设置时间要比在Message组件的timeout时间多一点
}
