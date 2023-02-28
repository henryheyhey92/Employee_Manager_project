import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import EmployeeDetails from '../components/EmployeeDetails';
interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid } = React.useContext(LoginContext);
    const [employeeData, setEmployeeData] = useState([
        {
            id: 1,
            firstName: 'Harry',
            lastName: 'Lim',
            email: 'harry@email.com',
            phoneNumber: '90909090',
            gender: 'male',
            joinDate: '01/01/2020'
        },
        {
            id: 2,
            firstName: 'Larry',
            lastName: 'Lim',
            email: 'Larry@email.com',
            phoneNumber: '90909999',
            gender: 'male',
            joinDate: '01/02/2021'
        },
        {
            id: 3,
            firstName: 'Marry',
            lastName: 'Lee',
            email: 'Marry@email.com',
            phoneNumber: '95559090',
            gender: 'female',
            joinDate: '01/01/2019'
        },
        {
            id: 4,
            firstName: 'Gary',
            lastName: 'Wu',
            email: 'Garry@email.com',
            phoneNumber: '90456790',
            gender: 'male',
            joinDate: '01/01/2019'
        }
    ]);

    return (
        <React.Fragment>
            <h1>The employee information</h1>
            <div>
                {employeeData?.map((element, index) => {
                    return <EmployeeDetails employeeData={element} setEmployeeData={setEmployeeData} />;
                })}
            </div>
        </React.Fragment>
    );
};

export default Home;
