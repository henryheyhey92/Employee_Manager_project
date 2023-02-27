import React from 'react';

export interface AuthContextType {
    isAdmin: boolean;
    login: (isAdmin: boolean) => void;
    logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
    isAdmin: false,
    login: (isAdmin: boolean) => { },
    logout: () => { }
});

export default AuthContext;