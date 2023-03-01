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
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid, employeeData, setEmployeeData } = React.useContext(LoginContext);
    {
        console.log('🚀 ~ file: Home.tsx:32 ~ {employeeData?.map ~ employeeData:', employeeData);
    }
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={5}>
                    <h1>The employee information</h1>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={1}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Grid>
            </Grid>
            <div>
                {employeeData?.map((element: Employee, index: any) => {
                    return <EmployeeDetails employeeData={element} setEmployeeData={setEmployeeData} />;
                })}
            </div>
        </React.Fragment>
    );
};

export default Home;
