// RegisterForm.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/AuthService";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const navigate = useNavigate();
  const COMPANY_NAME = "mycompany.com"
  

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // 비밀번호와 비밀번호 확인이 일치하지 않을 경우 처리할 로직 추가
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    if (!validateUsername(username)) {
      setUsernameError("유효한 사용자명을 입력해주세요. ex) test@mycomany.com -> test");
      return;
    }
    try {
      await AuthService.register(username, password);
      // 회원가입 성공 후 처리할 로직 추가
      alert("회원가입이 성공적으로 완료되었습니다.");
      navigate('/');
    } catch (error) {
      // 회원가입 실패 시 처리할 로직 추가
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };
  const validateUsername = (username) => {
    // 사용자명 유효성 검사 로직 추가
    const usernameRegex = /^[a-zA-Z0-9._-]+$/;
    return usernameRegex.test(username);
  };
  return (
    <form onSubmit={handleRegister}>
      <div>
        {" "}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameError("");
          }}
        />
        @{COMPANY_NAME}
        {usernameError && <span className="error">{usernameError}</span>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
