import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"
import { Router } from '../types/Types';


const useLogout = () => {
    const { dispatch: authDispatch } = useAuthContext()
    const navigate = useNavigate()

    const logout = () => {
        authDispatch({ type: "LOGOUT" })
        localStorage.clear()
        navigate(Router.login)
    }

    return { logout }
}

export default useLogout