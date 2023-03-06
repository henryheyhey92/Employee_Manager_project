import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { toggleLogin } from '../utils/toggleLogin';
import { LoginContext } from '../contexts/LoginContext';
import { adminDetails, standardDetails } from '../Constant/constants';
import { useNavigate } from 'react-router-dom';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid, userType, setUserType } = React.useContext(LoginContext);
    const navigate = useNavigate();

    const onLogin = async () => {
        if (setLoading) {
            setLoading(true);
        }
        if (setIsNotValid) setIsNotValid(false);

        try {
            await toggleLogin();
            if (userInfo.email === adminDetails.email && userInfo.password === adminDetails.password) {
                // set the isAdmin state to true
                if (setIsLoggedIn) {
                    setIsLoggedIn(true);
                    navigate('/home');
                }
                if (setUserType) {
                    setUserType('admin');
                }
            } else if (userInfo.email === standardDetails.email && userInfo.password === standardDetails.password) {
                // set the is standard state to true
                if (setIsLoggedIn) {
                    setIsLoggedIn(true);
                    navigate('/home');
                }
                if (setUserType) {
                    setUserType('standard');
                }
            } else {
                if (setIsNotValid) setIsNotValid(true);
            }
        } catch (err) {
            if (setLoading) setLoading(false);
        }
        if (setLoading) setLoading(false);
    };

    const [userInfo, setUser] = useState<any>({
        email: '',
        password: ''
    });

    const onUpdateFormField = (e: any) =>
        setUser({
            ...userInfo,
            [e.target.name]: e.target.value
        });

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
                    <h1>Welcome to Employee System</h1>
                    <div>
                        <TextField
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={onUpdateFormField}
                            className="textfield-user-reg"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            error={isNotValid}
                            helperText={isNotValid ? 'wrong email or password' : ''}
                        />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <TextField
                            type="password"
                            name="password"
                            value={userInfo.password}
                            onChange={onUpdateFormField}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            error={isNotValid}
                            helperText={isNotValid ? 'wrong email or password' : ''}
                        />
                    </div>
                    <Button onClick={onLogin} style={{ marginTop: 10, marginBottom: 20 }} variant="contained">
                        Login
                    </Button>
                    <p>
                        There are two types of account ; <strong>Admin and Standard</strong>
                    </p>
                    <p>
                        <strong>Username:</strong> admin@gmail.com, <strong>Password:</strong> admin1234
                    </p>
                    <p>
                        <strong>Username:</strong> standard@gmail.com, <strong>Password:</strong> standard1234
                    </p>
                </Box>
            </Paper>
        </React.Fragment>
    );
    // }
};

export default Login;
