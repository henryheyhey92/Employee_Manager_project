import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { LoginContext } from '../contexts/LoginContext';
import { adminDetails, standardDetails } from '../Constant/constants';
interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    const { isLoggedIn } = React.useContext(LoginContext);

    return (
        <React.Fragment>
            <Paper
                elevation={3}
                style={{
                    marginRight: 10,
                    marginLeft: 10,
                    width: 'auto',
                    height: 'auto'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1
                    }}
                >
                    <h1>Welcome to the GIC's e-services</h1>
                    <p>
                        This is application build for <strong>Front end technical test assessment</strong>
                    </p>
                    <p>
                        There are two types of account ; <strong>Admin and Standard</strong>
                    </p>
                    <p>
                        <strong>Username:</strong> Admin, <strong>Password:</strong> admin123
                    </p>
                    <p>
                        <strong>Username:</strong> Standard, <strong>Password:</strong> standard123
                    </p>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default About;
