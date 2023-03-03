import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { TextField, Grid } from '@mui/material';

const options = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede', 'Hangouts Call', 'Luna', 'Oberon', 'Phobos', 'Pyxis', 'Sedna', 'Titania', 'Triton', 'Umbriel'];

interface EmployeeFormDialogProps {
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
}

const EmployeeFormDialog: React.FC<EmployeeFormDialogProps> = (props: EmployeeFormDialogProps) => {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef<HTMLElement>(null);

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
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <Dialog sx={{ '& .MuiDialog-paper': { width: '100%', height: '100%' } }} fullWidth={true} TransitionProps={{ onEntering: handleEntering }} open={open} {...other}>
            <DialogTitle>Phone Ringtone</DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            id="firstName"
                            label="firstName"
                            variant="outlined"
                            name="firstName"
                            // value={addEmployee.firstName}
                            // onChange={onUpdateFormField}
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
                            // value={addEmployee.lastName}
                            // onChange={onUpdateFormField}
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
                            // value={addEmployee.email}
                            // onChange={onUpdateFormField}
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
                            // value={addEmployee.phoneNumber}
                            // onChange={onUpdateFormField}
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
                            // value={addEmployee.gender}
                            // onChange={onUpdateFormField}
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
                            // value={addEmployee.joinDate}
                            // onChange={onUpdateFormField}
                            // className="textfield-image-url"
                            // error={!props.errorForm.img[0]}
                            // helperText={props.errorForm.img[1]}
                        />
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
