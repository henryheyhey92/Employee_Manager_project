import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginContext } from '../contexts/LoginContext';
import { toggleLogin } from '../utils/toggleLogin';
import { Link } from 'react-router-dom';

const ButtonAppBar = () => {
    const { isLoggedIn, loading, setLoading, setIsLoggedIn } = React.useContext(LoginContext);

    const onLogout = async () => {
        if (setLoading) setLoading(true);
        try {
            await toggleLogin();
            if (setIsLoggedIn) setIsLoggedIn(false);
        } catch (err) {
            if (setLoading) setLoading(false);
        }
        if (setLoading) setLoading(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">Home</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/standard">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Standard
                        </Typography>
                    </Link>

                    {!isLoggedIn ? (
                        // <Link to="/login">
                        <Button color="inherit">Login</Button>
                    ) : (
                        // </Link>
                        <Button color="inherit" onClick={() => onLogout()}>
                            Logout
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default ButtonAppBar;
