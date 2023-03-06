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

    const [newEmployee, setNewEmployee] = useState(false);
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

    // const handleAddEmployee = () => {
    //     setNewEmployee(true);
    // };

    // const handleCloseForm = (confirm: boolean) => {
    //     if (confirm) {
    //         setNewEmployee(false);
    //     }
    // };

    const updateEmployeeList = async (data: Employee) => {
        const { firstName, lastName, email, gender, phoneNumber, joinDate } = data;
        console.log('🚀 ~ file: Home.tsx:52 ~ updateEmployeeList ~ joinDate:', joinDate);
        console.log('🚀 ~ file: Home.tsx:48 ~ updateEmployeeList ~ phoneNumber:', phoneNumber);
        setFirstNameValidation(false);
        setLastNameValidation(false);
        setEmailValidation(false);
        setPhoneNumValidation(false);
        setGenderValidation(false);
        setJoinDateValidation(false);

        const isValidFirstName = firstNameAndLastValidation(firstName);
        console.log('🚀 ~ file: Home.tsx:61 ~ updateEmployeeList ~ isValidFirstName:', isValidFirstName);
        const isValidLastName = firstNameAndLastValidation(lastName);
        console.log('🚀 ~ file: Home.tsx:63 ~ updateEmployeeList ~ isValidLastName:', isValidLastName);
        const isValidEmail = validateEmail(email);
        console.log('🚀 ~ file: Home.tsx:65 ~ updateEmployeeList ~ isValidEmail:', isValidEmail);
        const isValidPhoneNum = validatePhoneNumber(phoneNumber);
        console.log('🚀 ~ file: Home.tsx:67 ~ updateEmployeeList ~ isValidPhoneNum:', isValidPhoneNum);
        const isValidGender = validateGender(gender);
        console.log('🚀 ~ file: Home.tsx:69 ~ updateEmployeeList ~ isValidGender:', isValidGender);
        const isValidJoinDate = validateJoinDate(joinDate);
        console.log('🚀 ~ file: Home.tsx:71 ~ updateEmployeeList ~ isValidJoinDate:', isValidJoinDate);

        if (isValidFirstName && isValidLastName && isValidEmail && isValidPhoneNum && isValidJoinDate) {
            employeeData?.unshift(data);
            setEmployeeData(employeeData);
            let response = await axios.post(BASE_URL + 'api/updatedata', employeeData);
            console.log('What is the response :', response);
            setNewEmployee(false);

            //set validation to default state
            setFirstNameValidation(false);
            setLastNameValidation(false);
            setEmailValidation(false);
            setPhoneNumValidation(false);
            setGenderValidation(false);
            setJoinDateValidation(false);
        } else {
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
        }
    };

    //
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
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

    return (
        <React.Fragment>
            {
                <>
                    <Grid container>
                        <Grid item xs={5}>
                            <h1>The employee information</h1>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={1}>
                            <Fab color="primary" aria-label="add" onClick={handleClickListItem}>
                                <AddIcon />
                            </Fab>
                        </Grid>
                    </Grid>
                    <div>
                        {employeeData?.map((element: Employee, index: number) => {
                            return <EmployeeDetails employeeData={element} setEmployeeData={setEmployeeData} detailIndex={index} handleDelete={confirmDelete} />;
                        })}
                    </div>
                </>
            }
            {/* {newEmployee && <EmployeeForm closeForm={handleCloseForm} addNewEmployee={updateEmployeeList} />} */}
            {
                <EmployeeFormDialog
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
                />
            }
            {<ConfirmationDialog id="ringtone-menu" keepMounted open={openDialog} onClose={handleCloseDialog} value={confirmDialogValue} />}
        </React.Fragment>
    );
};

export default Home;
