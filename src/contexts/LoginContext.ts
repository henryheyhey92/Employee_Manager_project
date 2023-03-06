import React, { Dispatch, SetStateAction } from 'react';
import { Employee } from '../Constant/constants';

type ContextProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    isNotValid: boolean;
    setIsNotValid: Dispatch<SetStateAction<boolean>>;
    employeeData: Employee[] | any;
    setEmployeeData: Dispatch<React.SetStateAction<Employee[] | any>>;
    userType: string;
    setUserType: React.Dispatch<React.SetStateAction<string>>;
};

export const LoginContext = React.createContext<Partial<ContextProps>>({});
