import React, {useState, useEffect} from 'react';

/* 
endTime: 目标时间，格式为时间戳
endTimeUp: 倒计时结束的回调
 */
const YCountDown = ({ endTime, endTimeUp }) => {
  const [day, setDay] = useState(0)
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  useEffect(() => {
      let sys_second = (endTime - new Date().getTime());
      const timerId = setInterval(() => {
          //防止倒计时出现负数
          if (sys_second > 1000) {
              sys_second -= 1000;
              let day = Math.floor((sys_second / 1000 / 3600) / 24);
              let hour = Math.floor((sys_second / 1000 / 3600) % 24);
              let minute = Math.floor((sys_second / 1000 / 60) % 60);
              let second = Math.floor(sys_second / 1000 % 60);
              setDay(day);
              setHour(hour < 10 ? "0" + hour : hour);
              setMinute(minute < 10 ? "0" + minute : minute);
              setSecond(second < 10 ? "0" + second : second);
          } else {
              clearInterval(timerId);
              //倒计时结束时触发方法
              !!endTimeUp && endTimeUp();
          }
      }, 1000);
      return () => {  //返回一个回调函数用来清除定时器
          clearInterval(timerId)
      };
  }, [endTime]);

  return (
      <span className='count-down'>
          <span className='red'>{day}</span>
          <span className='time'>天</span>
          <span className='red'>{hour}</span>
          <span className='time'>小时</span>
          <span className='red'>{minute}</span>
          <span className='time'>分</span>
          <span className='red'>{second}</span>
          <span className='time'>秒</span>
      </span>
  )
}

export default React.memo(YCountDown);