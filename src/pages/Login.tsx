import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { toggleLogin } from '../utils/toggleLogin';
import { LoginContext } from '../contexts/LoginContext';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const { loading, setLoading, isLoggedIn, setIsLoggedIn } = React.useContext(LoginContext);

    const onLogin = async () => {
        if (setLoading) {
            setLoading(true);
        }

        try {
            await toggleLogin();
            if (setIsLoggedIn) setIsLoggedIn(true);
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

    // const handleLoginInfo = () => {
    //     if (userInfo.email === adminDetails.email && userInfo.password === adminDetails.password) {
    //         // set the isAdmin state to true
    //     } else {
    //         // redirect to other route
    //         return;
    //     }
    // };

    // if (isLoggedIn) {
    //     return navigate(from);
    // } else {
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
                            placeholder="john.doe@mail.com"
                            value="john.doe@mail.com"
                            name="email"
                            // value={userInfo.email}
                            onChange={onUpdateFormField}
                            className="textfield-user-reg"
                            helperText
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <TextField
                            type="password"
                            placeholder="secret"
                            value="secret"
                            name="password"
                            // value={userInfo.password}
                            onChange={onUpdateFormField}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                        />
                    </div>
                    <Button onClick={onLogin} style={{ marginTop: 10, marginBottom: 20 }} variant="contained">
                        Login
                    </Button>
                </Box>
            </Paper>
        </React.Fragment>
    );
    // }
};

export default Login;
