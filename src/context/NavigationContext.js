import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Step 1: Create a Navigation Context
const NavigationContext = createContext();

// Step 2: Create a Provider Component to wrap your components
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

// Step 3: Create a custom hook to access navigation functions
export const useNavigation = () => {
    return useContext(NavigationContext);
};
