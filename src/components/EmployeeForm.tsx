import React, { FC } from 'react';
import { Box, Paper, TextField, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

interface EmployeeFormProps {}

const EmployeeForm: React.FC<EmployeeFormProps> = (props) => {
    return (
        <Box sx={{ flexGrow: 1, mt: 3 }}>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginBottom: 20 }}>
                <CloseIcon fontSize="large" />
            </div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        id="firstName"
                        label="firstName"
                        variant="outlined"
                        name="firstName"
                        // value={props.imageLink}
                        // onChange={props.updateFormField}
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
                        // value={props.imageLink}
                        // onChange={props.updateFormField}
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
                        // value={props.imageLink}
                        // onChange={props.updateFormField}
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
                        // value={props.imageLink}
                        // onChange={props.updateFormField}
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
                        // value={props.imageLink}
                        // onChange={props.updateFormField}
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
                        // value={props.imageLink}
                        // onChange={props.updateFormField}
                        // className="textfield-image-url"
                        // error={!props.errorForm.img[0]}
                        // helperText={props.errorForm.img[1]}
                    />
                </Grid>
            </Grid>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 20 }}>
                <Button variant="contained">Submit</Button>
            </div>
        </Box>
    );
};

export default EmployeeForm;
