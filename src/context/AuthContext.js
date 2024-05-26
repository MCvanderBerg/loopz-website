import { createContext, useReducer, useEffect, useContext  } from "react"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    console.log(action.type)
    switch(action.type){
        case 'LOGIN': 
            console.log(action.payload)
            return {
                session: action.payload,
            }
        case 'LOGOUT':
            console.log('here')

            return {
                session: null
            }
        default: return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        session: JSON.parse(localStorage.getItem("session")) || null,
    })

    useEffect(()=> {
        const session = JSON.parse(localStorage.getItem('session'))
        if (session) {
            dispatch({ type: "LOGIN", payload: session })
        }

        console.log(session)
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