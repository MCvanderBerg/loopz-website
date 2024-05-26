import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Router } from "../types/Types";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const goToLogin = () => {
    navigate(Router.login);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="signup" onSubmit={onSubmit}>
      <h3>Signup</h3>
      <label>Email</label>
      <input type="email" onChange={changeEmail} value={email} />
      <label>Password</label>
      <input type="text" onChange={changePassword} value={password} />
      <label>UserName</label>
      <input type="text" onChange={changePassword} value={password} />
      <label>Name</label>
      <input type="text" onChange={changePassword} value={password} />
      <label>Surname</label>
      <input type="text" onChange={changePassword} value={password} />
      <label>Phone number</label>
      <input type="text" onChange={changePassword} value={password} />
      <div>
        <button type="button" onClick={goToLogin}>
          Go to login
        </button>
        <button>Signup</button>
      </div>
    </form>
  );
};

export default SignupScreen;
