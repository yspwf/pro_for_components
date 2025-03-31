import React from 'react';
import useCountDown from './countDownhook';


import YButton from '../button';

const TimeCount = () => {
  const { countdown, isCounting, startCountDown } = useCountDown(10);

  const handleGetCode = () => {
    if(isCounting)return
    startCountDown()
  }

  return <YButton click={handleGetCode} text={isCounting ? `${countdown}秒后重试` : '获取验证码'}></YButton>
}

export default TimeCount;