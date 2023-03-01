import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import EmployeeDetails from '../components/EmployeeDetails';
import { Box } from '@mui/system';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Grid } from '@mui/material';
import axios from 'axios';
import { Employee } from '../Constant/constants';
import EmployeeForm from '../components/EmployeeForm';
interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid, employeeData, setEmployeeData } = React.useContext(LoginContext);

    const [newEmployee, setNewEmployee] = useState(false);

    const handleAddEmployee = () => {
        setNewEmployee(true);
    };

    const handleCloseForm = (confirm: boolean) => {
        if (confirm) {
            setNewEmployee(false);
        }
    };

    return (
        <React.Fragment>
            {!newEmployee && (
                <>
                    <Grid container>
                        <Grid item xs={5}>
                            <h1>The employee information</h1>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={1}>
                            <Fab color="primary" aria-label="add" onClick={handleAddEmployee}>
                                <AddIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                    <div>
                        {employeeData?.map((element: Employee, index: any) => {
                            return <EmployeeDetails employeeData={element} setEmployeeData={setEmployeeData} />;
                        })}
                    </div>
                </>
            )}
            {newEmployee && <EmployeeForm closeForm={handleCloseForm} />}
        </React.Fragment>
    );
};

export default Home;
