import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const navigate = useNavigate(); // Get navigation function from react-router-dom

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
