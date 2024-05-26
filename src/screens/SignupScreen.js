import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Router } from "../types/Types";
import useSignin from "../hooks/useSignin"

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const { signin, isLoading, error } = useSignin()


  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({email_address:email, password, username, name, surname, phone_number: phoneNumber});
    signin({email_address:email, password, username, name, surname, phone_number: phoneNumber})
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

  const changeUsername = (e) => {
    setUsername(e.target.value)
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeSurname = (e) => {
    setSurname(e.target.value)
  }

  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }



  return (
    <form className="signup" onSubmit={onSubmit}>
      <h3>Signup</h3>
      <label>Email</label>
      <input type="email" onChange={changeEmail} value={email} />
      <label>Password</label>
      <input type="text" onChange={changePassword} value={password} />
      <label>UserName</label>
      <input type="text" onChange={changeUsername} value={username} />
      <label>Name</label>
      <input type="text" onChange={changeName} value={name} />
      <label>Surname</label>
      <input type="text" onChange={changeSurname} value={surname} />
      <label>Phone number</label>
      <input type="text" onChange={changePhoneNumber} value={phoneNumber} />
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
