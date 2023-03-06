import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LoginContext } from '../contexts/LoginContext';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Button } from '@mui/material';

const drawerWidth = 240;

export default function ClippedDrawer() {
    const { loading, setLoading, isLoggedIn, setIsLoggedIn, isNotValid, setIsNotValid } = React.useContext(LoginContext);

    const handleLogout = () => {
        if (setIsLoggedIn) {
            setIsLoggedIn(false);
        }
    };
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                {/* <Divider /> */}
                <List>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/home">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/contact">
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact us" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/chart">
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chart" />
                    </ListItemButton>
                    {isLoggedIn ? (
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    ) : (
                        <ListItemButton component={Link} to="/login">
                            <ListItemIcon>
                                <LoginIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItemButton>
                    )}
                </List>
            </Box>
        </Drawer>
    );
}
