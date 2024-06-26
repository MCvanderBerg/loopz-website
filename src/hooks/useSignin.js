import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Router } from "../types/Types"

const useSignin = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const { dispatch }  = useAuthContext()
    const navigate = useNavigate();
    
    const signin = async (obj) => {
        setIsLoading(true)
        setError(null)


        const response = await fetch(`api/user/signup`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })

        const json = await response.json()

        console.log("response: ", json)


        if (!response.ok){
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

    return { signin, isLoading, error }
}

export default useSignin