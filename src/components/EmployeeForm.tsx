import React, { useState } from 'react';
import { Box, Paper, TextField, Grid, Button, DialogTitle, DialogContent, DialogActions, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Employee } from '../Constant/constants';
import { LoginContext } from '../contexts/LoginContext';

interface EmployeeFormProps {
    closeForm: any;
    addNewEmployee: any;
}

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    joinDate: ''
};

const EmployeeForm: React.FC<EmployeeFormProps> = (props: EmployeeFormProps) => {
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid, employeeData, setEmployeeData, userType, setUserType } = React.useContext(LoginContext);

    const [addEmployee, setEmployee] = useState(initialState);
    const { closeForm, addNewEmployee } = props;
    const handleClose = () => {
        setEmployee(initialState);
        closeForm(true);
    };

    const handleSubmit = () => {
        addNewEmployee(addEmployee);
    };

    const onUpdateFormField = (e: any) =>
        setEmployee({
            ...addEmployee,
            [e.target.name]: e.target.value
        });

    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: 20 }}>
                <CloseIcon fontSize="large" onClick={handleClose} />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="firstName"
                        label="firstName"
                        variant="outlined"
                        name="firstName"
                        value={addEmployee.firstName}
                        onChange={onUpdateFormField}
                        // className="textfield-image-url"
                        // error={!props.errorForm.img[0]}
                        // helperText={props.errorForm.img[1]}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="lastName"
                        label="lastName"
                        variant="outlined"
                        name="lastName"
                        value={addEmployee.lastName}
                        onChange={onUpdateFormField}
                        // className="textfield-image-url"
                        // error={!props.errorForm.img[0]}
                        // helperText={props.errorForm.img[1]}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="email"
                        label="email"
                        variant="outlined"
                        name="email"
                        value={addEmployee.email}
                        onChange={onUpdateFormField}
                        // className="textfield-image-url"
                        // error={!props.errorForm.img[0]}
                        // helperText={props.errorForm.img[1]}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="phoneNumber"
                        label="phoneNumber"
                        variant="outlined"
                        name="phoneNumber"
                        value={addEmployee.phoneNumber}
                        onChange={onUpdateFormField}
                        // className="textfield-image-url"
                        // error={!props.errorForm.img[0]}
                        // helperText={props.errorForm.img[1]}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="gender"
                        label="gender"
                        variant="outlined"
                        name="gender"
                        value={addEmployee.gender}
                        onChange={onUpdateFormField}
                        // className="textfield-image-url"
                        // error={!props.errorForm.img[0]}
                        // helperText={props.errorForm.img[1]}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="joinDate"
                        label="joinDate"
                        variant="outlined"
                        name="joinDate"
                        value={addEmployee.joinDate}
                        onChange={onUpdateFormField}
                        // className="textfield-image-url"
                        // error={!props.errorForm.img[0]}
                        // helperText={props.errorForm.img[1]}
                    />
                </Grid>
            </Grid>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 20 }}>
                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </Box>
    );
};

export default EmployeeForm;
