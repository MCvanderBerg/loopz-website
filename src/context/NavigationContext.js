import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';
import { Router } from '../types/Types';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const navigate = useNavigate(); // Get navigation function from react-router-dom
    const { session } = useAuthContext()
    const { pathname } = useLocation();
    const noNavBarRequired = [Router.login, Router.signup];

    useEffect(() => {
        console.log(pathname)
        if (!session && !noNavBarRequired.includes(pathname)) {
            navigate(Router.login)
        }
    },[])


    // Define functions to be provided by the context
    const goToPage = (page) => {
        navigate(page);
    };

    // Define the context value
    const contextValue = {
        goToPage,
    };

    // Return the provider with children
    return (
        <NavigationContext.Provider value={contextValue}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    return useContext(NavigationContext);
};
