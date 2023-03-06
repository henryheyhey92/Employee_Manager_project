import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

interface NoPermissionPageProps {}

const NoPermissionPage: React.FC<NoPermissionPageProps> = (props) => {
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
                    <h2>No permission page</h2>
                    <p>
                        Currently you are on the <strong>No permission</strong> page, {!isLoggedIn && 'not'} being logged in.
                    </p>
                    <p> this page is accessible for everybody, being logged in or not.</p>
                    {isLoggedIn ? (
                        <Button color="inherit" component={Link} to="/home" style={{ marginTop: 10, marginBottom: 20 }} variant="contained">
                            Back to Home Page
                        </Button>
                    ) : (
                        <Button color="inherit" component={Link} to="/login" style={{ marginTop: 10, marginBottom: 20 }} variant="contained">
                            Back to Login Page
                        </Button>
                    )}
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default NoPermissionPage;
