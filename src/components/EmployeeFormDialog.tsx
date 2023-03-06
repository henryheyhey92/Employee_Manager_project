import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { TextField, Grid } from '@mui/material';
import { Employee } from '../Constant/constants';
import { InitialState, ErrorState, ErrorType } from '../Constant/constants';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { firstNameAndLastValidation, validateEmail, validatePhoneNumber } from '../validation/validation';
import FormHelperText from '@mui/material/FormHelperText';

interface EmployeeFormDialogProps {
    firstNameValError: boolean;
    lastNameValError: boolean;
    emailValError: boolean;
    phoneNumValError: boolean;
    genderInputError: boolean;
    joinDateInputError: boolean;
    addNewEmployee: any;
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
}

const genderName = ['Male', 'Female', 'Other'];
const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');
const todayStartOfTheDay = today.startOf('day');

const EmployeeFormDialog: React.FC<EmployeeFormDialogProps> = (props: EmployeeFormDialogProps) => {
    const { firstNameValError, lastNameValError, emailValError, phoneNumValError, genderInputError, joinDateInputError, addNewEmployee, onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef<HTMLElement>(null);
    const [addEmployee, setEmployee] = useState(InitialState);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        setEmployee(InitialState);
        onClose();
        setdateValue(dayjs(''));
    };

    const handleOk = () => {
        addNewEmployee(addEmployee);
        // onClose(value);
        // setEmployee(InitialState);
        // setdateValue(dayjs(''));
    };

    const onUpdateFormField = (e: any) => {
        setEmployee({
            ...addEmployee,
            [e.target.name]: e.target.value
        });
    };

    //dayjs('2014-08-18T21:11:54')
    const [dateValue, setdateValue] = React.useState<Dayjs | null>();

    const handleChange = (newValue: Dayjs | any) => {
        const date = new Date(newValue);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const result = `${day}/${month}/${year}`;
        addEmployee.joinDate = result;
        setEmployee({ ...addEmployee });
    };

    return (
        <Dialog sx={{ '& .MuiDialog-paper': { width: '100%', height: '100%' } }} fullWidth={true} TransitionProps={{ onEntering: handleEntering }} open={open} {...other}>
            <DialogTitle>Add Employee</DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="firstName"
                            label="FirstName"
                            variant="outlined"
                            name="firstName"
                            value={addEmployee.firstName}
                            onChange={onUpdateFormField}
                            error={firstNameValError}
                            helperText={firstNameValError ? 'Please enter a minimum 6 and maximum of 10 characters' : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="lastName"
                            label="LastName"
                            variant="outlined"
                            name="lastName"
                            value={addEmployee.lastName}
                            onChange={onUpdateFormField}
                            error={lastNameValError}
                            helperText={lastNameValError ? 'Please enter a minimum 6 and maximum of 10 characters' : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={addEmployee.email}
                            onChange={onUpdateFormField}
                            error={emailValError}
                            helperText={emailValError ? 'Invalid email address' : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="phoneNumber"
                            label="Phone Number"
                            variant="outlined"
                            name="phoneNumber"
                            value={addEmployee.phoneNumber}
                            onChange={onUpdateFormField}
                            error={phoneNumValError}
                            helperText={phoneNumValError ? 'Invalid SG phone number' : ''}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl error={genderInputError}>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup defaultValue="Male" row ref={radioGroupRef} aria-label="gender" name="gender" value={addEmployee.gender} onChange={onUpdateFormField}>
                                {genderName.map((option) => (
                                    <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                            <FormHelperText>{genderInputError ? 'Please select a input' : ''}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <TextField fullWidth id="joinDate" label="Join Date" variant="outlined" name="joinDate" value={addEmployee.joinDate} onChange={onUpdateFormField} /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DatePicker label="Join Date" defaultValue={today} value={dateValue} onChange={handleChange} disableFuture />
                            </Stack>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EmployeeFormDialog;
