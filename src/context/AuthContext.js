import { createContext, useReducer, useEffect, useContext  } from "react"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN': 
            return {
                session: action.payload,
            }
        case 'LOGOUT':
            return {
                session: null
            }
        default: return state

    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        session: null,
    })

    useEffect(()=> {
        const session = JSON.parse(localStorage.getItem('session'))
        if (session) {
            dispatch({ type: "LOGIN", payload: session })
        }
    },[])

    console.log(state)

    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context){
        throw Error("useAuthContext must be used in the authContextProvider")
    }

    return context;
}