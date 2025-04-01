import React, { useState } from 'react';
// import './login.css'; // 你可以创建一个CSS文件来美化你的登录表单

import {YInput, YCard, YButton, YCheck, YRadio} from '../components';
import { useNavigate } from 'react-router-dom'; 

const style={
  margin:"15px 0px"
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin', {
      replace: true
    })
    
    // 在这里添加你的登录逻辑，比如调用后端API
    // 暂时我们只打印输入的邮箱和密码
    // console.log('Email:', email);
    // console.log('Password:', password);

    // // 假设验证失败，设置一个错误消息
    // setError('Invalid credentials'); // 这只是为了演示，你应该根据实际的验证结果来设置错误消息

    // // 清除表单（可选）
    // setEmail('');
    // setPassword('');
  };



  return <div style={{"position":"absolute", "left":"50%", "top":"50%", "transform":"translate(-50%, -50%)"}}>
    <YCard style={{"width": "40vw"}}>
      {/* <form style={{"width": "20vw"}}> */}
        <div style={style}>
          <label>账号:</label>
          {/* <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /> */}
          <YInput/>
        </div>
        <div style={style}>
          <label>密码:</label>
          {/* <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> */}
          <YInput/>
        </div>
        {/* {error && <div className="error">{error}</div>} */}
        {/* <button type="submit">Login</button> */}
        <div style={style}>
          <YButton text="登录" type="success" click={handleSubmit}/>
        </div>
      {/* </form> */}
    </YCard>
    </div>
};

export default Login;
