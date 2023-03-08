import { createContext, useContext, useState } from 'react';


export const LoadingContext = createContext({
    loading: false,
    setLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

const LoadingContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContextProvider;
