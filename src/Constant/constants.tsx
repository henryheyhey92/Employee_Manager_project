import React, { FC } from 'react';

export const adminDetails = {
    email: 'admin@gmail.com',
    password: 'admin1234'
};

export const standardDetails = {
    email: 'standard@gmail.com',
    password: 'standard1234'
};

export type Employee = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    joinDate: string;
};

export const InitialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    joinDate: ''
};

export const BASE_URL = 'http://localhost:5000/';

interface constantsProps {}

const constants: React.FC<constantsProps> = (props) => {
    return <div>constants</div>;
};

export default constants;
