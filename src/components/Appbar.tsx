import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LoginContext } from '../contexts/LoginContext';
import { toggleLogin } from '../utils/toggleLogin';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import gic from '../picture/giclogo.png';
import Fab from '@mui/material/Fab';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const ButtonAppBar = () => {
    const { isLoggedIn, setLoading, setIsLoggedIn } = React.useContext(LoginContext);
    const navigate = useNavigate();

    const onLogout = async () => {
        if (setLoading) setLoading(true);
        try {
            await toggleLogin();
            if (setIsLoggedIn) {
                setIsLoggedIn(false);
                navigate('/login');
            }
        } catch (err) {
            if (setLoading) setLoading(false);
        }
        if (setLoading) setLoading(false);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#ebeff0' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={5}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <img src={gic} style={{ width: 'auto', height: '50px' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={1}>
                            {!isLoggedIn ? (
                                <Fab sx={{ mt: 1 }} variant="extended" size="medium" color="primary" aria-label="add" component={Link} to="/login">
                                    <VpnKeyIcon sx={{ mr: 1 }} />
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: 'Sans-serif',
                                            fontWeight: 500,
                                            letterSpacing: '.1rem',
                                            color: '#fff',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Login
                                    </Typography>
                                </Fab>
                            ) : (
                                <Fab variant="extended" size="medium" color="primary" aria-label="add" onClick={() => onLogout()}>
                                    <VpnKeyIcon sx={{ mr: 1 }} />
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                            display: { xs: 'none', md: 'flex' },
                                            fontFamily: 'Sans-serif',
                                            fontWeight: 500,
                                            letterSpacing: '.1rem',
                                            color: '#edf2f7',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Logout
                                    </Typography>
                                </Fab>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ButtonAppBar;
