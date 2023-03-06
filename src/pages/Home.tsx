import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import EmployeeDetails from '../components/EmployeeDetails';
import { Box } from '@mui/system';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import { Employee, InitialState } from '../Constant/constants';
import EmployeeForm from '../components/EmployeeForm';
import { BASE_URL } from '../Constant/constants';
import EmployeeFormDialog from '../components/EmployeeFormDialog';
import { firstNameAndLastValidation, validateEmail, validatePhoneNumber, validateGender, validateJoinDate } from '../validation/validation';
import ConfirmationDialog from '../components/ConfirmationDialog';

interface HomeProps {
    employeeData: Employee[] | any;
    setEmployeeData: React.Dispatch<React.SetStateAction<Employee[] | any>>;
    passEmployeeData: Employee[] | any;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const { employeeData, setEmployeeData, passEmployeeData } = props;
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid } = React.useContext(LoginContext);

    useEffect(() => {}, []);

    const [firstNameValidation, setFirstNameValidation] = useState(false);
    const [lastNameValidation, setLastNameValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [phoneNumValidation, setPhoneNumValidation] = useState(false);
    const [genderValidation, setGenderValidation] = useState(false);
    const [joinDateValidation, setJoinDateValidation] = useState(false);
    const [openConfirmationDialog, setConfirmationDialog] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [confirmDialogValue, setConfirmDialogValue] = useState('Dione');
    const [removeIndex, setRemoveIndex] = useState<number>(0);
    const [editIndex, setEditIndex] = useState<number>(0);
    const [editEmployeeData, setEditEmployeeData] = useState<Employee[] | any>([]);
    const [dialogTitle, setDialogTitle] = useState('Add Employee');

    const defaultValidState = (data: Employee) => {
        const { firstName, lastName, email, gender, phoneNumber, joinDate } = data;
        const isValidFirstName = firstNameAndLastValidation(firstName);
        const isValidLastName = firstNameAndLastValidation(lastName);
        const isValidEmail = validateEmail(email);
        const isValidPhoneNum = validatePhoneNumber(phoneNumber);
        const isValidGender = validateGender(gender);
        const isValidJoinDate = validateJoinDate(joinDate);
        const obj = { isValidFirstName, isValidLastName, isValidEmail, isValidPhoneNum, isValidGender, isValidJoinDate };
        return obj;
    };

    const validationRefractorFunc = (isValidFirstName: boolean, isValidLastName: boolean, isValidEmail: boolean, isValidPhoneNum: boolean, isValidGender: boolean, isValidJoinDate: boolean) => {
        if (!isValidFirstName) {
            setFirstNameValidation(true);
        }
        if (!isValidLastName) {
            setLastNameValidation(true);
        }
        if (!isValidEmail) {
            setEmailValidation(true);
        }
        if (!isValidPhoneNum) {
            setPhoneNumValidation(true);
        }
        if (!isValidGender) {
            setGenderValidation(true);
        }
        if (!isValidPhoneNum) {
            setJoinDateValidation(true);
        }
    };

    const validationDefaultFunc = () => {
        setFirstNameValidation(false);
        setLastNameValidation(false);
        setEmailValidation(false);
        setPhoneNumValidation(false);
        setGenderValidation(false);
        setJoinDateValidation(false);
    };

    const updateEmployeeList = async (data: Employee, mode: string) => {
        const obj = defaultValidState(data);
        const { isValidFirstName, isValidLastName, isValidEmail, isValidPhoneNum, isValidGender, isValidJoinDate } = obj;
        if (mode === 'Add') {
            if (isValidFirstName && isValidLastName && isValidEmail && isValidPhoneNum && isValidJoinDate) {
                employeeData?.unshift(data);
                setEmployeeData(employeeData);
                let response = await axios.post(BASE_URL + 'api/updatedata', employeeData);
                if (response) {
                    setOpen(false);
                }

                //set validation to default state
                validationDefaultFunc();
            } else {
                validationRefractorFunc(isValidFirstName, isValidLastName, isValidEmail, isValidPhoneNum, isValidGender, isValidJoinDate);
            }
        } else if (mode === 'Edit') {
            if (isValidFirstName && isValidLastName && isValidEmail && isValidPhoneNum && isValidJoinDate) {
                employeeData[editIndex] = data;
                console.log('🚀 ~ file: Home.tsx:105 ~ updateEmployeeList ~ data:', data);
                console.log('🚀 ~ file: Home.tsx:106 ~ updateEmployeeList ~ employeeData:', employeeData);
                setEmployeeData(employeeData);
                let response = await axios.post(BASE_URL + 'api/updatedata', employeeData);
                if (response) {
                    setOpen(false);
                }
                //set validation to default state
                validationDefaultFunc();
            } else {
                validationRefractorFunc(isValidFirstName, isValidLastName, isValidEmail, isValidPhoneNum, isValidGender, isValidJoinDate);
            }
        }
    };

    //
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
        setDialogTitle('Add Employee');
        setOpen(true);
    };

    const handleClose = (newValue?: string) => {
        setOpen(false);
        setFirstNameValidation(false);
        setLastNameValidation(false);
        setEmailValidation(false);
        setPhoneNumValidation(false);
        setGenderValidation(false);
        setJoinDateValidation(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    const handleDelete = async (removeIndex: number) => {
        console.log('🚀 ~ file: Home.tsx:123 ~ handleDelete ~ removeIndex:', removeIndex);
        let deepcopy = JSON.parse(JSON.stringify(employeeData));
        const result = deepcopy.filter((element: any, index: number) => removeIndex !== index);
        const response = await axios.post(BASE_URL + 'api/updatedata', result);
        console.log('What is the response :', response);
        setEmployeeData(result);
        setOpenDialog(false);
    };

    const confirmDelete = (removeIndex: number) => {
        setConfirmationDialog(true);
        setOpenDialog(true);
        setRemoveIndex(removeIndex);
    };

    const handleCloseDialog = (newValue?: string) => {
        if (newValue) {
            handleDelete(removeIndex);
        } else {
            setOpenDialog(false);
        }
    };

    const handleEdit = (editIndex: number) => {
        setEditIndex(editIndex);
        let deepcopy = JSON.parse(JSON.stringify(employeeData));
        const result = deepcopy.find((element: any, index: number) => editIndex === index);
        setEditEmployeeData(result);
        setDialogTitle('Edit Employee Details');
        setOpen(true);
    };

    return (
        <React.Fragment>
            {
                <>
                    <Grid container>
                        <Grid item xs={5}>
                            <h1>The employee information</h1>
                        </Grid>
                        <Grid item xs={5}></Grid>
                        <Grid item xs={2}>
                            <Fab variant="extended" color="primary" aria-label="add" sx={{ mt: 3 }} onClick={handleClickListItem}>
                                <AddIcon sx={{ mr: 1 }} />
                                Add New
                            </Fab>
                        </Grid>
                    </Grid>
                    <div>
                        {employeeData?.map((element: Employee, index: number) => {
                            return <EmployeeDetails employeeData={element} setEmployeeData={setEmployeeData} detailIndex={index} handleDelete={confirmDelete} handleEdit={handleEdit} />;
                        })}
                    </div>
                </>
            }
            {
                <EmployeeFormDialog
                    editEmployeeData={editEmployeeData}
                    addNewEmployee={updateEmployeeList}
                    id="addNewEmployee"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                    firstNameValError={firstNameValidation}
                    lastNameValError={lastNameValidation}
                    emailValError={emailValidation}
                    phoneNumValError={phoneNumValidation}
                    genderInputError={genderValidation}
                    joinDateInputError={joinDateValidation}
                    dialogTitle={dialogTitle}
                />
            }
            {<ConfirmationDialog id="ringtone-menu" keepMounted open={openDialog} onClose={handleCloseDialog} value={confirmDialogValue} />}
        </React.Fragment>
    );
};

export default Home;
