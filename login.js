import React, { useState } from 'react';
import './login.css'; // 你可以创建一个CSS文件来美化你的登录表单

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在这里添加你的登录逻辑，比如调用后端API
    // 暂时我们只打印输入的邮箱和密码
    console.log('Email:', email);
    console.log('Password:', password);

    // 假设验证失败，设置一个错误消息
    setError('Invalid credentials'); // 这只是为了演示，你应该根据实际的验证结果来设置错误消息

    // 清除表单（可选）
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
