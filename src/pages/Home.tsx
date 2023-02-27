import React, { useContext, useState } from 'react';
import LoginContext from '../contexts/AuthContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

interface HomeProps {

}

const Home: React.FC<HomeProps> = (props) => {
    const { login } = useContext(LoginContext)
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [userInfo, setUser] = useState<any>({
        email: "",
        password: ""
    })

    const handleLogin = () => {
        login(isAdmin)
    }

    const onUpdateFormField = (e: any) => setUser({
        ...userInfo,
        [e.target.name]: e.target.value
    })

    return (
        <React.Fragment>
            <Paper elevation={3}
                style={{
                    marginRight: 10,
                    marginLeft: 10,
                    width: "auto",
                    height: "auto",
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                    }}
                >
                    <h1>Welcome to Employee System</h1>
                    <div>
                        <TextField
                            name='email'
                            value={userInfo.email}
                            onChange={onUpdateFormField}
                            className="textfield-user-reg"
                            helperText
                            id="outlined-basic"
                            label="Email"
                            variant="outlined" />
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <TextField
                            name='password'
                            value={userInfo.password}
                            onChange={onUpdateFormField} id="outlined-basic" label="Password" variant="outlined" />
                    </div>
                    <Button style={{ marginTop: 10, marginBottom: 20 }} variant="contained">Login</Button>
                </Box>
            </Paper>

        </React.Fragment>
    )
}

export default Home;