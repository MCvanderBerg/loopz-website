import { useAuthContext } from "../context/AuthContext"


const useLogout = () => {
    const { dispatch: authDispatch } = useAuthContext()

    const logout = () => {
        authDispatch({ type: "LOGOUT" })
        localStorage.removeItem('session')
    }

    return { logout }
}

export default useLogout