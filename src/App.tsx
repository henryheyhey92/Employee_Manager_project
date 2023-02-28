import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/Admin';
import Standard from './pages/Standard';
import About from './pages/About';
import Login from './pages/Login';
import NoPermissionPage from './pages/NoPermissionPage';
import Appbar from './components/Appbar';
import PrivateRoute from './components/PrivateRoute';
import { LoginContext } from './contexts/LoginContext';
import LeftNavPanel from './components/LeftNavPanel';
import { Box } from '@mui/system';
import Contact from './pages/Contact';
import Home from '@mui/icons-material/Home';

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isNotValid, setIsNotValid] = useState(false);

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                loading,
                setLoading,
                isNotValid,
                setIsNotValid
            }}
        >
            <Router>
                <Box sx={{ display: 'flex' }}>
                    <Appbar />
                    <LeftNavPanel />
                    <Box component="main" sx={{ flexGrow: 1, m: 10 }}>
                        <Routes>
                            <Route path="/" element={<About />} />
                            {/* add route that i want to protect here */}
                            <Route element={<PrivateRoute />}>
                                <Route path="/home" element={<Home />} />
                                <Route path="/admin" element={<AdminPage />} />
                                <Route path="/standard" element={<Standard />} />
                            </Route>
                            <Route path="/nopermission" element={<NoPermissionPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </LoginContext.Provider>
    );
};

export default App;
