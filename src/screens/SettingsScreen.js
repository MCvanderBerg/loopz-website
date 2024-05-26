import { useNavigate } from "react-router-dom"
import { Router } from "../types/Types"

const SettingsScreen = () => {
    const navigate = useNavigate()

    const onUserInfoClick = () => {
        navigate(Router.userInfo)
    }

    return (
        <div>
            <h1>Settings</h1>

            <div>
            <div onClick={onUserInfoClick}>
                User information
            </div>
            </div>
            <div onClick={onUserInfoClick}>
                Delete account
            </div>
        </div>
    )
}

export default SettingsScreen