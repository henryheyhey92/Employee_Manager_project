import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { LoginContext } from '../contexts/LoginContext';
import { adminDetails, standardDetails } from '../Constant/constants';
interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
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
                    <h1>Home page</h1>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default Home;
