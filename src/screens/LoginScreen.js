import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Router } from "../types/Types";
import useLogin from "../hooks/useLogin";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoading, error } = useLogin();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await login(email, password);
  };

  const onRegisterClick = () => {
    navigate(Router.Signup);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="Login" onSubmit={onSubmit}>
      <h3>Login</h3>
      <label>Email</label>
      <input type="email" onChange={changeEmail} value={email} />
      <label>Password</label>
      <input type="text" onChange={changePassword} value={password} />
      <div>
        <button disabled={isLoading}>Login</button>
        <button disabled={isLoading} type="button" onClick={onRegisterClick}>
          Register
        </button>
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default LoginScreen;
