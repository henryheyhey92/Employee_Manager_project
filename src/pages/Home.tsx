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
import { BASE_URL } from '../Constant/constants';
import EmployeeFormDialog from '../components/EmployeeFormDialog';
interface HomeProps {
    employeeData: Employee[] | any;
    setEmployeeData: React.Dispatch<React.SetStateAction<Employee[] | any>>;
    passEmployeeData: Employee[] | any;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const { employeeData, setEmployeeData, passEmployeeData } = props;
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid } = React.useContext(LoginContext);

    useEffect(() => {}, []);

    const [newEmployee, setNewEmployee] = useState(false);

    const handleAddEmployee = () => {
        setNewEmployee(true);
    };

    const handleCloseForm = (confirm: boolean) => {
        if (confirm) {
            setNewEmployee(false);
        }
    };

    const updateEmployeeList = async (data: any) => {
        console.log('This is data', data);
        employeeData?.unshift(data);
        setEmployeeData(employeeData);
        let response = await axios.post(BASE_URL + 'api/updatedata', employeeData);
        console.log('What is the response :', response);
        setNewEmployee(false);
    };

    //
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue?: string) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
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
            {newEmployee && <EmployeeForm closeForm={handleCloseForm} addNewEmployee={updateEmployeeList} />}
            {/* {newEmployee && <EmployeeFormDialog id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={value} />} */}
        </React.Fragment>
    );
};

export default Home;
