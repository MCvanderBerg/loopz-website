import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { Router } from "../types/Types";
import { useNavigate } from "react-router-dom";


const useLogin = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const { dispatch }  = useAuthContext()
    const navigate = useNavigate();


    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)


        const response = await fetch(`api/user/login`,{
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email_address:email, password})
        })

        const json = await response.json()
        console.log("response: ",json)

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            localStorage.setItem('session', JSON.stringify(json))
            dispatch({ type: "LOGIN", payload: json })
            navigate(Router.events)
            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}

export default useLogin