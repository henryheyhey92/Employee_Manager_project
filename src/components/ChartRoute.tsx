import * as React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

const ChartRoute = () => {
    const { isLoggedIn, userType } = React.useContext(LoginContext);

    return userType === 'admin' && isLoggedIn ? <Outlet /> : <Navigate to="/nopermission" />;
};

export default ChartRoute;
