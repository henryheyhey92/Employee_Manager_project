import React, { useState } from 'react';
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
import { InitialState } from '../Constant/constants';

interface EmployeeFormDialogProps {
    addNewEmployee: any;
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
}

const genderName = ['Male', 'Female', 'Other'];

const EmployeeFormDialog: React.FC<EmployeeFormDialogProps> = (props: EmployeeFormDialogProps) => {
    const { addNewEmployee, onClose, value: valueProp, open, ...other } = props;
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
    };

    const handleOk = () => {
        addNewEmployee(addEmployee);
        onClose(value);
        setEmployee(InitialState);
    };

    const onUpdateFormField = (e: any) => {
        setEmployee({
            ...addEmployee,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Dialog sx={{ '& .MuiDialog-paper': { width: '100%', height: '100%' } }} fullWidth={true} TransitionProps={{ onEntering: handleEntering }} open={open} {...other}>
            <DialogTitle>Phone Ringtone</DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2} sx={{ mt: 2 }}>
                                First Name :
                            </Grid>
                            <Grid item xs={10}>
                                <TextField fullWidth id="firstName" label="FirstName" variant="outlined" name="firstName" value={addEmployee.firstName} onChange={onUpdateFormField} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="lastName" label="LastName" variant="outlined" name="lastName" value={addEmployee.lastName} onChange={onUpdateFormField} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="email" label="Email" variant="outlined" name="email" value={addEmployee.email} onChange={onUpdateFormField} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="phoneNumber" label="Phone Number" variant="outlined" name="phoneNumber" value={addEmployee.phoneNumber} onChange={onUpdateFormField} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup row ref={radioGroupRef} aria-label="gender" name="gender" value={addEmployee.gender} onChange={onUpdateFormField}>
                                {genderName.map((option) => (
                                    <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth id="joinDate" label="Join Date" variant="outlined" name="joinDate" value={addEmployee.joinDate} onChange={onUpdateFormField} />
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
