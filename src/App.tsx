import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/Admin';
import Standard from './pages/Standard';
import Home from './pages/Home';
import Login from './pages/Login';
import NoPermissionPage from './pages/NoPermissionPage';
import Appbar from './components/Appbar';
import PrivateRoute from './components/PrivateRoute';
import { LoginContext } from './contexts/LoginContext';

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                loading,
                setLoading
            }}
        >
            <Router>
                <Appbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* add route that i want to protect here */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/admin" element={<AdminPage />} />
                    </Route>
                    <Route path="/standard" element={<Standard />} />
                    <Route path="/nopermission" element={<NoPermissionPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </LoginContext.Provider>
    );
};

export default App;
