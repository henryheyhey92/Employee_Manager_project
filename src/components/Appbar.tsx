import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LoginContext } from '../contexts/LoginContext';
import { toggleLogin } from '../utils/toggleLogin';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

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
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={5}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    }}
                                >
                                    E-GIC
                                </Typography>
                                <Button color="inherit" component={Link} to="/">
                                    Home
                                </Button>
                                <Button color="inherit" component={Link} to="/admin">
                                    Admin
                                </Button>
                                <Button color="inherit" component={Link} to="/standard">
                                    Standard
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={1}>
                            {!isLoggedIn ? (
                                <Button color="inherit" component={Link} to="/login">
                                    Login
                                </Button>
                            ) : (
                                // </Link>
                                <Button color="inherit" onClick={() => onLogout()}>
                                    Logout
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ButtonAppBar;
