import { useState } from "react";
import { useNavigation } from "../context/NavigationContext"
import { useAuthContext } from "../context/AuthContext";

const UserInfo = () => {
    const {session:{user}} = useAuthContext()
    const [username, setUsername] = useState(user.name);
    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
    const [email, setEmail] = useState(user.email_address);
    const {goBack} = useNavigation()

    const onSubmit = (e) => {
        e.preventDefault();
    
        // console.log({email_address:email, username, name, surname, phone_number: phoneNumber});
       // signin({email_address:email, username, name, surname, phone_number: phoneNumber})
      };

    const changeEmail = (e) => {
    setEmail(e.target.value);
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

    return(
        <div>
            <label color="blue" onClick={() => goBack()}> go Back </label>

            <form className="signup" onSubmit={onSubmit}>
                <h1>User information</h1>
                <label>Email</label>
                <input type="email" onChange={changeEmail} value={email} />
                <label>UserName</label>
                <input type="text" onChange={changeUsername} value={username} />
                <label>Name</label>
                <input type="text" onChange={changeName} value={name} />
                <label>Surname</label>
                <input type="text" onChange={changeSurname} value={surname} />
                <label>Phone number</label>
                <input type="text" onChange={changePhoneNumber} value={phoneNumber} />    
                <button>Edit User information</button>
            </form>

          </div>
    )
}

export default UserInfo