import React, { Dispatch, SetStateAction } from 'react';
import { Employee } from '../Constant/constants';

type ContextProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    isNotValid: boolean;
    setIsNotValid: Dispatch<SetStateAction<boolean>>;
    employeeData: Employee[];
    setEmployeeData: Dispatch<React.SetStateAction<Employee[]>>;
};

export const LoginContext = React.createContext<Partial<ContextProps>>({});
