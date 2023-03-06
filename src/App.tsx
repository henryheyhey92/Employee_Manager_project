import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import NoPermissionPage from './pages/NoPermissionPage';
import Appbar from './components/Appbar';
import PrivateRoute from './components/PrivateRoute';
import { LoginContext } from './contexts/LoginContext';
import LeftNavPanel from './components/LeftNavPanel';
import { Box } from '@mui/system';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { BASE_URL } from './Constant/constants';
import axios from 'axios';
import { Employee } from './Constant/constants';
import Displaychart from './pages/Displaychart';

interface AppProps {}

const App: React.FC<AppProps> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isNotValid, setIsNotValid] = useState(false);
    const [employeeData, setEmployeeData] = useState<Employee[] | any>([]);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(BASE_URL + 'api/persondata');
            if (response) {
                setEmployeeData(response.data.employee_data);
            }
        };
        fetchData();
    }, []);

    const passEmployeeData = (data: Employee[] | any) => {
        setEmployeeData(data);
    };

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                loading,
                setLoading,
                isNotValid,
                setIsNotValid,
                employeeData,
                setEmployeeData,
                userType,
                setUserType
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
                                <Route path="/home" element={<Home employeeData={employeeData} setEmployeeData={setEmployeeData} passEmployeeData={passEmployeeData} />} />
                            </Route>
                            <Route path="/nopermission" element={<NoPermissionPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/chart" element={<Displaychart />} />
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </LoginContext.Provider>
    );
};

export default App;
