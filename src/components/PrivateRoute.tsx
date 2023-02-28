import * as React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

const PrivateRoute = () => {
    const { isLoggedIn } = React.useContext(LoginContext);

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
